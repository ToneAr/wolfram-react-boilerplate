import { spawn, execSync, ChildProcessWithoutNullStreams } from 'child_process';
import { Socket, Server } from 'socket.io';
import axios from 'axios';
import os from 'os';

export default class WLManager {
	wlProc: ChildProcessWithoutNullStreams | null = null;
	isQuitting: boolean = false;
	socket: Socket;
	server: Server;
	base: string;
	wlCmd: string = process.platform === 'linux' ? 'math' : 'wolframscript';

	constructor(socket: Socket, server: Server, base: string) {
		this.socket = socket;
		this.server = server;
		this.base = base;
		this.startWL = this.startWL.bind(this);
		this.cleanupWL = this.cleanupWL.bind(this);
		this.req = this.req.bind(this);
	}

	checkWL(): boolean {
		try {
			execSync(`${this.wlCmd} -version`);
			return true;
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (error) {
			return false;
		}
	}

	aliveQ(): boolean {
		try {
			const result = execSync(
				'curl -s --max-time 2 http://localhost:8888/aliveQ',
			)
				.toString()
				.trim();
			return result === 'true';
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (e) {
			return false;
		}
	}

	startWL(): void {
		if (this.aliveQ()) {
			this.socket.emit('wl-status', 0);
			return;
		}

		this.wlProc = spawn(
			this.wlCmd,
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
				this.socket.emit('wl-status', 0);
			}
		});

		this.wlProc.stderr.on('data', (err) => {
			console.log(`WL[\x1b[0;31merror\x1b[0m]: ${err}`);
		});

		this.wlProc.on('exit', (code) => {
			if (!this.isQuitting) {
				console.log(`WL exit code: ${code}`);
				console.error(
					'WL[\x1b[0;31merror\x1b[0m]: The Wolfram kernel has quit unexpectedly.',
					'Will attempt to restart the process.',
				);
				this.socket.emit('wl-status', code);
				this.startWL();
			}
		});
	}

	cleanupWL(): void {
		if (this.server.sockets.sockets.size < 1 && this.aliveQ()) {
			const wait = 2; // In minutes
			console.log(
				`\x1b[0;33mScheduled termination of Wolfram Language process in ${wait} minute(s)\x1b[0m`,
			);
			this.isQuitting = true;

			const cleanupTimeout = setTimeout(
				() => {
					console.log(
						'\x1b[0;31mTerminating Wolfram Language process\x1b[0m',
					);
					if (this.wlProc && this.wlProc.pid) {
						try {
							process.kill(
								this.wlProc.pid *
									(os.platform() === 'win32' ? 1 : -1),
								'SIGKILL',
							);
						} catch (error) {
							console.error(
								'WL[\x1b[0;31merror\x1b[0m]: Terminating Wolfram Language process:',
								error,
							);
						}
					}
					this.wlProc = null;
				},
				wait * 60 * 1000,
			);

			this.server.once('connection', () => {
				console.log(
					'\x1b[0;33mNew connection detected, cancelling scheduled termination\x1b[0m',
				);
				clearTimeout(cleanupTimeout);
				this.isQuitting = false;
			});
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
			this.socket.emit('req', response.data);
			return response.data;
		} catch (error) {
			return error;
		}
	}
}
