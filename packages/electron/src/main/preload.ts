import { Handler } from '@wrb/frontend/src/api';
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
export type Channels = string;

const electronHandler = {
	env: 'electron',
	ipc: {
		send(channel: Channels, ...args: unknown[]) {
			ipcRenderer.send(channel, ...args);
		},
		on(channel: Channels, func: (...args: unknown[]) => void) {
			const subscription = (
				_event: IpcRendererEvent,
				...args: unknown[]
			) => func(...args);
			ipcRenderer.on(channel, subscription);

			return () => {
				ipcRenderer.removeListener(channel, subscription);
			};
		},
		once(channel: Channels, func: (...args: unknown[]) => void) {
			ipcRenderer.once(channel, (_event, ...args) => func(...args));
		},
	},
};
contextBridge.exposeInMainWorld('api', electronHandler);

export type ElectronHandler = Handler;
