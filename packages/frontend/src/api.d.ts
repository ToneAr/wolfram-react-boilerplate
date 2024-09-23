/* These are placeholder definitions for the electron & webhook api.
 * They are left as dormant placeholder types until they are defined in their
 * respective packages.
 * TODO: There has to be a better way to do this...
 */

/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

type Channels = string;

export interface Handler {
	env: string;
	ipc: {
		send(channel: Channels, ...args: unknown[]);
		on(channel: Channels, func: (...args: unknown[]) => void);
		once(channel: Channels, func: (...args: unknown[]) => void);
	};
}
