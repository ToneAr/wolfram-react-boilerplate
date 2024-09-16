/* These are placeholder definitions for the electron & webhook api.
 * They are left as dormant placeholder types until they are defined in their
 * respective packages.
 * TODO: There has to be a better way to do this...
 */

/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

type Channels = string;

interface Handler {
	env: string;
	changeZoom: (we: { deltaY: number; ctrlKey: boolean }) => Promise<unknown>;
	ipcRenderer: {
		sendMessage(channel: Channels, ...args: unknown[]): void;
		on(channel: Channels, func: (...args: unknown[]) => void): () => void;
		once(channel: Channels, func: (...args: unknown[]) => void): void;
	};
}

declare global {
	interface Window {
		api: Handler;
	}
}

export {};
