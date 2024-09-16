/// <reference types="./electron" />

import { createRoot } from 'react-dom/client';
import React from 'react';
import { Frontend } from '@erwb/frontend';

import '@erwb/frontend/build/index.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<Frontend />
	</React.StrictMode>,
);

console.log(window.api);

// CTRL+Scroll zoom event listener
window.addEventListener(
	'wheel',
	(event: { deltaY: number; ctrlKey: boolean }) => {
		const eventData = {
			ctrlKey: event.ctrlKey,
			deltaY: event.deltaY,
		};
		window.api.changeZoom(eventData);
	},
);

// calling IPC exposed from preload script
window.api.ipcRenderer.once('ipc-example', (arg) => {
	console.log(arg);
});
window.api.ipcRenderer.sendMessage('ipc-example', ['ping']);

// start WL Socket
window.api.ipcRenderer.sendMessage('start-wl', []);
// ---------
