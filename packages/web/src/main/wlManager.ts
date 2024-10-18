import { spawn, execSync } from 'child_process';
import { Socket, Server } from 'socket.io';
import axios from 'axios';

export default class WLManager {
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
		if (global.wlProc && this.aliveQ()) {
			this.socket.emit('wl-status', 0);
			return;
		}

		global.wlProc = spawn(
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
				detached: false,
			},
		);

		console.log(`WL[\x1b[0;32mPID\x1b[0m]: ${global.wlProc.pid}`);

		global.wlProc.stdout.on('data', (data) => {
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

		global.wlProc.stderr.on('data', (err) => {
			console.log(`WL[\x1b[0;31merror\x1b[0m]: ${err}`);
		});

		global.wlProc.on('exit', (code) => {
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
			const wait /* in minutes */ =
				process.env.NODE_ENV === 'development' ? 0.25 : 5;
			console.log(
				`\x1b[0;33mScheduled termination of Wolfram Language process in ${wait} minute(s)\x1b[0m`,
			);
			this.isQuitting = true;
			this.startWL = this.startWL.bind(this);

			const cleanupTimeout = setTimeout(
				() => {
					console.log(
						'\x1b[0;31mTerminating Wolfram Language process\x1b[0m',
					);
					if (global.wlProc && global.wlProc.pid) {
						try {
							global.wlProc.kill('SIGKILL');
						} catch (error) {
							console.error(
								'WL[\x1b[0;31merror\x1b[0m]: Terminating Wolfram Language process:',
								error,
							);
						}
					}
					global.wlProc = null;
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
