import { WebHandler } from '../main/preload';

declare global {
	interface Window {
		api: WebHandler;
	}
}

export {};
