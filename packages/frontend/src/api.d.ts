/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

export type Channels = string;
export type Environments = 'web' | 'electron' | 'jest';

export interface Handler {
	env: Environments;
	ipc: {
		send(channel: Channels, ...args: unknown[]);
		on(channel: Channels, func: (...args: unknown[]) => void);
		once(channel: Channels, func: (...args: unknown[]) => void);
	};
}
