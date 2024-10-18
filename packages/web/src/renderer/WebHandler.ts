import { Environments, Handler } from '@wrb/frontend/src/api';
import { Socket } from 'socket.io-client';

export default class WebHandler {
	private socket: Socket;
	public api: Handler;
	private on(channel: string, callback: (...args: any[]) => void) {
		console.log(`Setting up listener for event: ${channel}`);
		const subscription = (...args: unknown[]) => callback(...args);
		this.socket.on(channel, subscription);

		return () => {
			this.socket.removeListener(channel, subscription);
		};
	}
	private send(channel: string, ...args: any[]) {
		console.log(`Sending event: ${channel}`, args);
		this.socket.emit(channel, ...args);
	}
	private once(channel: string, func: (...args: unknown[]) => void) {
		this.socket.once(channel, func);
	}

	constructor(socket: Socket, mode: Environments = 'web') {
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
