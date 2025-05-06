import { spawn, execSync } from 'child_process';
import { Socket, Server } from 'socket.io';
import axios from 'axios';

export interface IWLWebSocketMessage {
	uuid: string;
	tag: string;
	message: string;
	success: boolean;
}

export default class WLManager {
	isQuitting: boolean = false;
	socket: Socket;
	server: Server;
	base: string;
	restarts: number = 0;
	WLWebSocket: WebSocket | null = null;
	wlCmd: string = process.platform === 'linux' ? 'math' : 'wolframscript';

	constructor(socket: Socket, server: Server, base: string) {
		this.socket = socket;
		this.server = server;
		this.base = base;
		this.connectWebSocket = this.connectWebSocket.bind(this);
		this.startWL = this.startWL.bind(this);
		this.cleanupWL = this.cleanupWL.bind(this);
		this.req = this.req.bind(this);
	}

	connectWebSocket(): void {
		let isStartup = true;
		this.WLWebSocket = new WebSocket('ws://localhost:38080');
		this.WLWebSocket.onopen = () => {
			console.log('WL[\x1b[0;36mWebSocket\x1b[0m]: Connected');
		};
		this.WLWebSocket.onmessage = (event) => {
			const data: IWLWebSocketMessage = JSON.parse(event.data.toString());
			if (data.tag === 'connected' && data.success) {
				global.isWLActive = true;
				isStartup = false;
				this.socket.emit('wl-status', 0);
			} else if (data.tag === 'disconnected' && data.success) {
				global.isWLActive = false;
				this.socket.emit('wl-status', -1);
			}
		};
		this.WLWebSocket.onclose = (): void => {
			global.isWLActive = false;
			if (!isStartup) {
				console.log('WebSocket disconnected');
				this.socket.emit('wl-status', -1);
			}
			this.WLWebSocket = null;
			setTimeout(this.connectWebSocket, 3000);
		};
		this.WLWebSocket.onerror = (): void => {
			global.isWLActive = false;
			if (!isStartup) {
				console.error('WebSocket error');
				this.WLWebSocket?.close();
			} else setTimeout(this.connectWebSocket, 3000);
		};
	}

	checkWL(): boolean {
		try {
			execSync(`${this.wlCmd} -version`);
			return true;
		} catch {
			return false;
		}
	}

	startWL(): void {
		this.connectWebSocket();
		if (global.wlProc && global.isWLActive) {
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
				require.resolve('@wrb/wolfram'),
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
		global.wlProc.stdout.on('data', (data: Blob) => {
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
		global.wlProc.stderr.on('data', (err: Error) => {
			console.log(`WL[\x1b[0;31merror\x1b[0m]: ${err}`);
		});
		global.wlProc.on('exit', (code: number | null) => {
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
		if (this.server.sockets.sockets.size < 1 && global.isWLActive) {
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

	async req(
		endpoint: string,
		dataIn: object = {},
		port: number = 4848,
	): Promise<unknown> {
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
