import { createRoot } from 'react-dom/client';
import { Frontend } from '@wrb/frontend';
import { io } from 'socket.io-client';
import WebHandler from './WebHandler';
import React from 'react';
import { domain } from '../../package.json';

const socket = io(
	process.env.NODE_ENV === 'development' ? 'localhost:3000' : `${domain}`,
	{
		path: process.env.NODE_ENV === 'development' ? '/' : '/.ipc/',
	},
);
const webHandler = new WebHandler(socket);

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<Frontend api={webHandler.api} />
	</React.StrictMode>,
);

webHandler.api.ipc.on('connect', () => {
	console.log('Connected to server');
	webHandler.api.ipc.send('start-wl');
});

webHandler.api.ipc.on('disconnect', () => {
	console.log('Disconnected from server');
});

window.addEventListener('beforeunload', () => {
	socket.disconnect();
});

// Debug
webHandler.api.ipc.on('wl-status', (code) => {
	console.log('Wolfram Language status:', code);
});
