import { Socket } from 'socket.io-client';

class WebHandler {
	private socket: Socket;
	public api: {
		env: string;
		ipc: {
			on: (event: string, callback: (...args: any[]) => void) => void;
			send: (event: string, ...args: any[]) => void;
			once: (channel: string, func: (...args: unknown[]) => void) => void;
		};
	};
	private on(event: string, callback: (...args: any[]) => void): void {
		console.log(`Setting up listener for event: ${event}`);
		this.socket.on(event, (...args) => {
			console.log(`Received event: ${event}`, args);
			callback(...args);
		});
	}
	private send(event: string, ...args: any[]): void {
		console.log(`Sending event: ${event}`, args);
		this.socket.emit(event, ...args);
	}
	private once(channel: string, func: (...args: unknown[]) => void): void {
		this.socket.once(channel, func);
	}

	constructor(socket: Socket) {
		this.socket = socket;
		this.api = {
			env: 'web',
			ipc: {
				on: this.on.bind(this),
				send: this.send.bind(this),
				once: this.once.bind(this),
			},
		};
	}
}

export default WebHandler;
