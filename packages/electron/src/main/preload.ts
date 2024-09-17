import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
export type Channels = string;

console.log('preload debug');

const electronHandler = {
	env: 'electron',
	changeZoom: (we: { deltaY: number; ctrlKey: boolean }) =>
		ipcRenderer.invoke('change-zoom-level', we),
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

export type ElectronHandler = typeof electronHandler;
