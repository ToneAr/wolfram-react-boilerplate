import { spawn, execSync, ChildProcessWithoutNullStreams } from 'child_process';
import { Socket } from 'socket.io';
import axios from 'axios';
import os from 'os';

export class WLManager {
	wlProc: ChildProcessWithoutNullStreams | null = null;
	isQuitting: boolean = false;
	io: Socket;
	base: string;

	constructor(io: Socket, base: string) {
		this.io = io;
		this.base = base;
		this.startWL = this.startWL.bind(this);
		this.cleanupWL = this.cleanupWL.bind(this);
		this.req = this.req.bind(this);
	}

	checkWL(): boolean {
		try {
			execSync('wolframscript -version');
			return true;
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (error) {
			return false;
		}
	}

	startWL(): void {
		if (this.wlProc || global.isActive) {
			this.io.emit('wl-status', 0);
			return;
		}

		this.wlProc = spawn(
			'math',
			[
				'-noinit',
				'-noprompt',
				'-rawterm',
				'-script',
				require.resolve('@wrb/wl'),
				'-b',
				process.env.NODE_ENV !== 'development'
					? '0.0.0.0'
					: '127.0.0.1',
			],
			{
				detached: true,
			},
		);

		console.log(`WL[\x1b[0;32mPID\x1b[0m]: ${this.wlProc.pid}`);

		this.wlProc.stdout.on('data', (data) => {
			const dataStr = data
				.toString()
				.trim()
				.replace(/\\n/g, '\n')
				.replace(/\\t/g, '\t')
				.replace(/\\\\"/g, '')
				.replace(/\\"/g, '')
				.replace(/"/g, '')
				.replace(/\\/g, '');

			console.log('WL:', dataStr);
			// TODO: There has to be a better way to handle this...
			if (dataStr === `Type 'exit' to end process:`) {
				global.isActive = true;
				this.io.emit('wl-status', 0);
			}
		});

		this.wlProc.stderr.on('data', (err) => {
			console.log(`WL[\x1b[0;31merror\x1b[0m]: ${err}`);
		});

		this.wlProc.on('exit', (code) => {
			global.isActive = false;
			if (!this.isQuitting) {
				console.log(`WL exit code: ${code}`);
				console.error(
					'WL[\x1b[0;31merror\x1b[0m]: wolframscript has quit unexpectedly.',
					'Will attempt to restart the process.',
				);
				this.io.emit('wl-status', code);
				this.startWL();
			}
		});
	}

	cleanupWL(): void {
		if (this.wlProc && this.wlProc.pid) {
			console.log(
				'\x1b[0;31mTerminating Wolfram Language process\x1b[0m',
			);
			this.isQuitting = true;
			try {
				process.kill(
					this.wlProc.pid * (os.platform() === 'win32' ? 1 : -1),
					'SIGKILL',
				);
			} catch (error) {
				console.error(
					'WL[\x1b[0;31merror\x1b[0m]: Terminating Wolfram Language process:',
					error,
				);
			}
			global.isActive = false;
			this.wlProc = null;
		}
	}

	async req(endpoint: string, dataIn: object = {}, port: number = 4848) {
		try {
			const response = await axios.post(endpoint, null, {
				baseURL: `http://127.0.0.1:${port}`,
				params: dataIn,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			});
			this.io.emit('req', response.data);
			return response.data;
		} catch (error) {
			return error;
		}
	}
}
