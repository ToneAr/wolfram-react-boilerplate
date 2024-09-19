import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { WLManager } from './wlManager';
import { version, domain } from '../../package.json';

const base = process.env.NODE_ENV === 'development' ? '127.0.0.1' : domain;

const app = express();
const server = createServer(app);
const io = new Server(server, {
	cors: {
		methods: ['GET', 'POST'],
	},
});

// if (!wlManager.checkWL()) {
// 	console.error('wolframscript not found. Please install it and try again.');
// 	process.exit(1);
// }

io.on('connection', (socket) => {
	console.log('[+]Connected users:', io.sockets.sockets.size);

	// Create client's WLManager instance
	const wlManager = new WLManager(socket, base);

	// -------- Add event listeners --------
	socket.on('start-wl', wlManager.startWL);

	socket.on('req', (args: [string, object, number]) =>
		wlManager.req(...args),
	);

	socket.on('stop-wl', wlManager.cleanupWL);

	socket.on('disconnect', () => {
		console.log('[-]Connected users:', io.sockets.sockets.size);
		if (io.sockets.sockets.size < 1) wlManager.cleanupWL();
	});
	// -------------------------------------
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
	console.log(`
  \x1b[1;31mWRB IPC Server \x1b[0;31mv${version}\x1b[0m

  \x1b[0;31m➜\x1b[0m  \x1b[1;39mServer\x1b[0m: \x1b[0;36mhttp://${base}:\x1b[1;36m${PORT}\x1b[0;36m/\x1b[0;39m
`);
});
