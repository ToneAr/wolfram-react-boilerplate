import { spawn, execSync, ChildProcessWithoutNullStreams } from 'child_process';
import { Server } from 'socket.io';
import axios from 'axios';
import os from 'os';

export class WLManager {
	wlProc: ChildProcessWithoutNullStreams | null = null;
	isQuitting = false;
	io: Server;

	constructor(io: Server) {
		this.io = io;
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
		if (this.wlProc) {
			this.io.emit('wl-status', 0);
			return;
		}

		this.wlProc = spawn(
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

		console.log(`WL pid: ${this.wlProc.pid}`);

		this.wlProc.stdout.on('data', (data) => {
			const dataStr = data
				.toString()
				.trim()
				.replace(/\\n/g, '\n')
				.replace(/\\t/g, '\t')
				.replace(/\\"/g, '"')
				.replace(/\\\\/g, '\\');
			console.log(`WL stdout: ${dataStr}`);
			if (dataStr === `"Type 'exit' to end process:"`) {
				this.io.emit('wl-status', 0);
			}
		});

		this.wlProc.stderr.on('data', (err) => {
			console.log(`WL stderr: ${err}`);
		});

		this.wlProc.on('exit', (code) => {
			if (!this.isQuitting) {
				console.log(`WL exit code: ${code}`);
				console.error(
					'wolframscript has quit unexpectedly. Will attempt to restart the process.',
				);
				this.io.emit('wl-status', code);
				this.startWL();
			}
		});
	}

	cleanupWL(): void {
		if (this.wlProc && this.wlProc.pid) {
			console.log('Terminating Wolfram Language process');
			this.isQuitting = true;
			try {
				process.kill(
					this.wlProc.pid * (os.platform() === 'win32' ? 1 : -1),
					'SIGKILL',
				);
			} catch (error) {
				console.error(
					'Error terminating Wolfram Language process:',
					error,
				);
			}
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
			console.log(error);
			return;
		}
	}
}
