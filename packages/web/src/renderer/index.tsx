import { createRoot } from 'react-dom/client';
import { Frontend } from '@erwb/frontend';
import { io } from 'socket.io-client';
import React from 'react';

import '@erwb/frontend/build/index.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<Frontend />
	</React.StrictMode>,
);

const newSocket = io('localhost:3000');
const handleStoptWL = () => {
	if (newSocket) {
		console.log('Sending stop-wl event');
		newSocket.emit('stop-wl');
	}
};

console.log(newSocket);

// Set up event listeners
newSocket.on('connect', () => {
	console.log('Connected to server');

	// Automatically start WL when connected
	console.log('Sending start-wl event');
	newSocket.emit('start-wl');
});

newSocket.on('disconnect', () => {
	console.log('Disconnected from server');
});

newSocket.on('wl-status', (newStatus: string) => {
	console.log('Wolfram Language status:', newStatus);
});

window.addEventListener('beforeunload', () => {
	handleStoptWL();
	newSocket.disconnect();
});
