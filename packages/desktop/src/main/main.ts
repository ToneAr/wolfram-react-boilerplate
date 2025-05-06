/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 */

/*****************************************
 **************** Imports ****************
 *****************************************/
import path from 'path';
import {
	app,
	BrowserWindow,
	shell,
	ipcMain,
	dialog,
	IpcMainEvent,
} from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import nodeChildProcess from 'child_process';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';
import axios from 'axios';
import WebSocket from 'ws';
/*****************************************/

/*****************************************
 *********** Auto Update Setup ***********
 *****************************************/
class AppUpdater {
	constructor() {
		log.transports.file.level = 'info';
		autoUpdater.logger = log;
		autoUpdater.checkForUpdatesAndNotify();
	}
}
/*****************************************/

/*****************************************
 *********** Developer Tools *************
 *****************************************/
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
/*****************************************/

/*****************************************
 *********** Main Window Setup ***********
 *****************************************/
let mainWindow: BrowserWindow | null = null;

if (process.env.NODE_ENV === 'production') {
	const sourceMapSupport = require('source-map-support');
	sourceMapSupport.install();
}

const createWindow = async () => {
	if (isDebug) {
		await installExtensions();
	}

	const RESOURCES_PATH = app.isPackaged
		? path.join(process.resourcesPath, 'assets')
		: path.join(
				path.dirname(require.resolve('@wrb/frontend/assets/icon.png')),
			);

	const getAssetPath = (...paths: string[]): string => {
		return path.join(RESOURCES_PATH, ...paths);
	};

	mainWindow = new BrowserWindow({
		show: false,
		minWidth: 1024,
		minHeight: 728,
		icon: getAssetPath('icon.png'),
		webPreferences: {
			contextIsolation: true,
			sandbox: true,
			preload: path.join(__dirname, 'preload.js'),

			webSecurity: process.env.NODE_ENV !== 'development',
			allowRunningInsecureContent: process.env.NODE_ENV === 'development',
		},
	});

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
/*****************************************/

/*****************************************
 *********** Wolfram Language ************
 *****************************************/
interface IWLWebSocketMessage {
	uuid: string;
	tag: string;
	message: string;
	success: boolean;
}
let wlProc: nodeChildProcess.ChildProcessWithoutNullStreams | null = null;
let isQuitting = false;
let isWlActive = false;
let wlRestartCount = 0;

const wlCmd = process.platform === 'linux' ? 'math' : 'wolframscript';
function connectWebSocket(): void {
	let isStartup = true;
	const WLWebSocket = new WebSocket('ws://localhost:38080');
	WLWebSocket.onopen = () => {
		console.log('WL[\x1b[0;36mWebSocket\x1b[0m]: Connected');
	};
	WLWebSocket.onmessage = (event) => {
		const data: IWLWebSocketMessage = JSON.parse(event.data as string);
		if (data.tag === 'connected' && data.success) {
			isWlActive = true;
			isStartup = false;
			mainWindow?.webContents.send('wl-status', 0);
		} else if (data.tag === 'disconnected' && data.success) {
			isWlActive = false;
			mainWindow?.webContents.send('wl-status', -1);
		}
	};
	WLWebSocket.onclose = (): void => {
		setTimeout(connectWebSocket, 1000);
		isWlActive = false;
		if (!isStartup) {
			console.log('WebSocket disconnected');
			mainWindow?.webContents.send('wl-status', -1);
		}
	};
	WLWebSocket.onerror = (): void => {
		isWlActive = false;
		if (!isStartup) {
			console.error('WebSocket error');
			WLWebSocket.close();
		}
	};
}
function checkWL(): boolean {
	try {
		nodeChildProcess.execSync(`${wlCmd} -version`);
		return true;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error) {
		return false;
	}
}
function startWL(): void {
	if (isQuitting) return;

	connectWebSocket();
	if (isWlActive) {
		console.log('WL: Already running');
		return;
	}

	const scriptLoc =
		process.env.NODE_ENV === 'development'
			? require.resolve('@wrb/wolfram')
			: path.resolve(__dirname, '../../../../../wl/deploy.wls'); // TODO: This annoys me. Fix it.

	wlProc = nodeChildProcess.spawn(
		wlCmd,
		['-noinit', '-noprompt', '-rawterm', '-script', scriptLoc],
		{ detached: false },
	);
	console.log(`WL[\x1b[0;32mPID\x1b[0m]: ${wlProc.pid}`);

	wlProc.stdout.on('data', (data) => {
		const dataStr = data
			.toString()
			.trim()
			.replace(/\\n/g, '\n')
			.replace(/\\t/g, '\t')
			.replace(/\\\\"/g, '')
			.replace(/\\"/g, '')
			.replace(/"/g, '')
			.replace(/\\/g, '');
		console.log(`WL: ${dataStr}`);
	});
	wlProc.stderr.on('data', (err) => {
		console.log(`WL[\x1b[0;31merror\x1b[0m]: ${err}`);
	});
	wlProc.on('exit', (code) => {
		if (!isQuitting) {
			console.log(`WL[exit]: ${code ?? -1}`);
			mainWindow?.webContents.send('wl-status', code ?? -1);
			wlProc?.kill('SIGKILL');
			wlRestartCount++;
			if (wlRestartCount > 2) {
				dialog.showErrorBox(
					//`The Wolfram kernel (${scriptLoc}) has quit unexpectedly`,
					`Failed to start Wolfram Engine`,
					'Quitting',
				);
			}
			startWL();
		}
	});
}
function cleanupWL(): void {
	if (wlProc && wlProc.pid) {
		console.log('\x1b[0;31mTerminating Wolfram Language process\x1b[0m');
		isQuitting = true;
		try {
			wlProc.kill('SIGKILL');
		} catch (error) {
			console.error(
				'WL[\x1b[0;31merror\x1b[0m]: Terminating Wolfram Language process:',
				error,
			);
		}
		wlProc = null;
	}
}
async function req(
	event: IpcMainEvent,
	[endpoint, dataIn, port]: [string, object, number],
) {
	try {
		const response = await axios.post(endpoint, null, {
			baseURL: `http://localhost:${port}`,
			params: dataIn,
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		});
		event.reply('req', response.data);
		return response.data;
	} catch (error) {
		return error;
	}
}

if (!checkWL()) {
	dialog.showErrorBox(
		`${wlCmd} not found`,
		'Please install it and try again.',
	);
	app.exit(1);
}

/*****************************************/

/*****************************************
 ********** IPC Event listeners **********
 *****************************************/
ipcMain.on('start-wl', startWL);

ipcMain.on('req', (event, args) => {
	req(event, args).then((res) => {
		console.log('Request:', { args, res });
	});
});

ipcMain.on(
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

ipcMain.on('ipc-example', async (event, arg) => {
	const msgTemplate = (pingPong: string): string => `IPC test: ${pingPong}`;
	console.log(msgTemplate(arg));
	event.reply('ipc-example', msgTemplate('pong'));
});
/*****************************************
 ********** App Event listeners **********
 *****************************************/

// SSL/TSL: this is the self signed certificate support
if (process.env.NODE_ENV === 'development') {
	app.on(
		'certificate-error',
		(event, webContents, url, error, certificate, callback) => {
			/*
			 * On certificate error we disable default behavior (stop loading the page)
			 * and we then say "it is all fine - true" to the callback
			 */
			event.preventDefault();
			callback(true);
		},
	);
}

app.on('window-all-closed', () => {
	/*
	 * Respect the OSX convention of having the application in memory even
	 * after all windows have been closed
	 */
	if (process.platform !== 'darwin') {
		cleanupWL();
		app.quit();
	}
});

// app.on('will-quit', () => {
// 	wl.cleanupWL();
// });
/*****************************************/

/*****************************************
 ********** App Initialization ***********
 *****************************************/
app.whenReady()
	.then(() => {
		isQuitting = false;
		createWindow();
		app.on('activate', () => {
			/*
			 * On macOS it's common to re-create a window in the app when the
			 * dock icon is clicked and there are no other windows open.
			 */
			if (mainWindow === null) createWindow();
		});
	})
	.catch(console.log);
/*****************************************/
