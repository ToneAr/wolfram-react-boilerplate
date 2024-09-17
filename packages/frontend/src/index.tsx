// import { createRoot } from 'react-dom/client';
// import React from 'react';

// import { io } from 'socket.io-client';

import Frontend from './App';
import { useWL, WLProvider } from './hooks/useWL';
export { Frontend, useWL, WLProvider };

// import WebHandler from '@wrb/web/src/renderer/WebHandler';

// const container = document.getElementById('root') as HTMLElement;
// 	const root = createRoot(container);
// 	root.render(
// 		<React.StrictMode>
// 			<Frontend api={webHandler.api} />
// 		</React.StrictMode>,
// 	);

// if (process.env.NODE_ENV === 'development') {
// 	console.log('Development mode');
// 	const socket = io('localhost:3000');
// 	const webHandler = new WebHandler(socket);

// 	const container = document.getElementById('root') as HTMLElement;
// 	const root = createRoot(container);
// 	root.render(
// 		<React.StrictMode>
// 			<Frontend api={webHandler.api} />
// 		</React.StrictMode>,
// 	);

// 	webHandler.api.ipc.on('connect', () => {
// 		console.log('Connected to server');
// 		webHandler.api.ipc.send('start-wl');
// 	});

// 	webHandler.api.ipc.on('disconnect', () => {
// 		console.log('Disconnected from server');
// 	});

// 	window.addEventListener('beforeunload', () => {
// 		socket.disconnect();
// 	});

// 	// Debug
// 	webHandler.api.ipc.on('wl-status', (code) => {
// 		console.log('Wolfram Language status:', code);
// 	});
// }
