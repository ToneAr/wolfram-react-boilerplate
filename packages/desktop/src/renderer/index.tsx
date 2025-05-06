/// <reference types="./electron" />

import { createRoot } from 'react-dom/client';
import React from 'react';
import { Frontend } from '@wrb/frontend';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<Frontend api={window.api} />
	</React.StrictMode>,
);


// CTRL+Scroll zoom event listener
window.addEventListener(
	'wheel',
	(event: { deltaY: number; ctrlKey: boolean }) => {
		const eventData = {
			ctrlKey: event.ctrlKey,
			deltaY: event.deltaY,
		};
		window.api.ipc.send('change-zoom-level', eventData);
	},
);

// calling IPC exposed from preload script
window.api.ipc.once('ipc-example', (arg) => {
	console.log(arg);
});
window.api.ipc.send('ipc-example', ['ping']);

// start WL Socket
window.api.ipc.send('start-wl', []);
// ---------
