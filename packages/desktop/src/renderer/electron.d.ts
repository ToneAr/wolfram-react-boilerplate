/// <reference types="vite-plugin-svgr/client" />
/// <reference types="electron-vite/node" />

import { ElectronHandler } from '../main/preload';

declare global {
	interface Window {
		api: ElectronHandler;
	}
}

export {};
