/*
 * This is the index used fro development. It is not used in production or building.
 */
import React from 'react';
import WebHandler from '@wrb/web/src/renderer/WebHandler';
import { createRoot } from 'react-dom/client';
import { io } from 'socket.io-client';
import { Frontend } from './App';

const socket = io(`localhost:3000`);

const webHandler = new WebHandler(socket, 'dev');

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

webHandler.api.ipc.on('wl-status', (code) => {
	console.log('Wolfram Language status:', code);
});
