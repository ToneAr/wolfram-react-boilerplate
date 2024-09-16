/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 */

import path from 'path';
import { app, BrowserWindow, shell, ipcMain, dialog } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import nodeChildProcess from 'child_process';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';
import * as os from 'os';

class AppUpdater {
	constructor() {
		log.transports.file.level = 'info';
		autoUpdater.logger = log;
		autoUpdater.checkForUpdatesAndNotify();
	}
}

let mainWindow: BrowserWindow | null = null;

if (process.env.NODE_ENV === 'production') {
	const sourceMapSupport = require('source-map-support');
	sourceMapSupport.install();
}

const isDebug =
	process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
	require('electron-debug')();
}

const installExtensions = async () => {
	const installer = require('electron-devtools-installer');
	const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
	const extensions = ['REACT_DEVELOPER_TOOLS'];

	return installer
		.default(
			extensions.map((name) => installer[name]),
			forceDownload,
		)
		.catch(console.log);
};

const createWindow = async () => {
	if (isDebug) {
		await installExtensions();
	}

	const RESOURCES_PATH = app.isPackaged
		? path.join(process.resourcesPath, 'assets')
		: path.join(__dirname, '../../assets');

	const getAssetPath = (...paths: string[]): string => {
		return path.join(RESOURCES_PATH, ...paths);
	};

	console.log(path.join(__dirname, 'preload.js'));

	mainWindow = new BrowserWindow({
		show: false,
		width: 1024,
		height: 728,
		// transparent: true,
		// resizable: true,
		icon: getAssetPath('icon.png'),
		webPreferences: {
			contextIsolation: true,
			sandbox: true,
			preload: path.join(__dirname, 'preload.js'),
		},
	});

	// mainWindow.setResizable(true);
	mainWindow.loadURL(resolveHtmlPath('index.html'));

	mainWindow.on('ready-to-show', () => {
		if (!mainWindow) {
			throw new Error('"mainWindow" is not defined');
		}
		if (process.env.START_MINIMIZED) {
			mainWindow.minimize();
		} else {
			mainWindow.show();
		}
	});

	mainWindow.on('closed', () => {
		mainWindow = null;
	});

	const menuBuilder = new MenuBuilder(mainWindow);
	menuBuilder.buildMenu();

	// Open urls in the user's browser
	mainWindow.webContents.setWindowOpenHandler((edata) => {
		shell.openExternal(edata.url);
		return { action: 'deny' };
	});

	// Remove this if your app does not use auto updates
	new AppUpdater();
};

/**
 * Add event listeners...
 */

ipcMain.on('ipc-example', async (event, arg) => {
	const msgTemplate = (pingPong: string): string => `IPC test: ${pingPong}`;
	console.log(msgTemplate(arg));
	event.reply('ipc-example', msgTemplate('pong'));
});

// ----- Wolfram Language -----
let wlProc: nodeChildProcess.ChildProcessWithoutNullStreams | null = null;
let isQuitting = false;

function checkWL(): boolean {
	try {
		nodeChildProcess.execSync('wolframscript -version');
		return true;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error) {
		return false;
	}
}
function startWL(): void {
	if (isQuitting) return;

	wlProc = nodeChildProcess.spawn(
		'wolframscript',
		[
			'-noinit',
			'-noprompt',
			'-rawterm',
			'-script',
			require.resolve('@erwb/wl'),
		],
		{
			detached: true,
		},
	);

	console.log(`WL pid: ${wlProc.pid}`);

	wlProc.stdout.on('data', (data) => {
		const dataStr = data.toString().trim();
		console.log(`WL stdout: ${dataStr}`);
		if (dataStr === `"Type 'exit' to end process:"`) {
			mainWindow?.webContents.send('wl-status', 0);
		}
	});
	wlProc.stderr.on('data', (err) => {
		console.log(`WL stderr: ${err}`);
	});
	wlProc.on('exit', (code) => {
		if (!isQuitting) {
			console.log(`WL exit code: ${code}`);
			dialog.showErrorBox(
				'wolframscript has quit unexpectedly',
				'Will attempt to restart the process.',
			);
			mainWindow?.webContents.send('wl-status', code);
			startWL();
		}
	});
}
function cleanupWL(): void {
	if (wlProc && wlProc.pid) {
		console.log('Terminating Wolfram Language process');
		isQuitting = true;
		try {
			// treeKill(wlProc.pid, 'SIGKILL', (err) => {
			// 	console.error(
			// 		'Error terminating Wolfram Language process tree:',
			// 		err,
			// 	);
			// });
			process.kill(
				// Make PID negative if on Unix systems to close entire process group
				wlProc.pid * (os.platform() === 'win32' ? 1 : -1),
				'SIGKILL',
			);
		} catch (error) {
			console.error('Error terminating Wolfram Language process:', error);
		}
		wlProc = null;
	}
}

if (!checkWL()) {
	dialog.showErrorBox(
		'wolframscript not found',
		'Please install it and try again.',
	);
	app.exit(1);
}
ipcMain.on('start-wl', startWL);
app.on('will-quit', () => {
	cleanupWL();
});
// -------------------------

// ----- Window Zoom ------
ipcMain.handle(
	'change-zoom-level',
	(_event, we: { deltaY: number; ctrlKey: boolean }) => {
		if (we.ctrlKey) {
			const zoomFactor = mainWindow?.webContents.getZoomFactor() ?? 1;
			const delta = we.deltaY > 0 ? -0.1 : 0.1;
			const newZoom = Math.max(0.1, zoomFactor + delta);
			console.log('Zoom:', `${newZoom * 100}%`);
			mainWindow?.webContents.setZoomFactor(newZoom);
		}
	},
);
// ------------------------

app.on('window-all-closed', () => {
	// Respect the OSX convention of having the application in memory even
	// after all windows have been closed
	if (process.platform !== 'darwin') {
		cleanupWL();
		app.quit();
	}
});
app.whenReady()
	.then(() => {
		isQuitting = false;
		createWindow();
		app.on('activate', () => {
			// On macOS it's common to re-create a window in the app when the
			// dock icon is clicked and there are no other windows open.
			if (mainWindow === null) createWindow();
		});
	})
	.catch(console.log);
