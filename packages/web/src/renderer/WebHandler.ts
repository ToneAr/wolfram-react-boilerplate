import { Socket } from 'socket.io-client';

class WebHandler {
	private socket: Socket;
	public api: {
		env: string;
		ipc: {
			on: (channel: string, callback: (...args: any[]) => void) => void;
			send: (channel: string, ...args: any[]) => void;
			once: (channel: string, func: (...args: unknown[]) => void) => void;
		};
	};
	private on(channel: string, callback: (...args: any[]) => void): void {
		console.log(`Setting up listener for event: ${channel}`);
		this.socket.on(channel, (...args) => {
			console.log(`Received event: ${channel}`, args);
			callback(...args);
		});
	}
	private send(channel: string, ...args: any[]): void {
		console.log(`Sending event: ${channel}`, args);
		this.socket.emit(channel, ...args);
	}
	private once(channel: string, func: (...args: unknown[]) => void): void {
		this.socket.once(channel, func);
	}

	constructor(socket: Socket, mode: string = 'web') {
		this.socket = socket;
		this.api = {
			env: mode,
			ipc: {
				on: this.on.bind(this),
				send: this.send.bind(this),
				once: this.once.bind(this),
			},
		};
	}
}

export default WebHandler;
