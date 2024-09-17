import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { WLManager } from './wlManager';

const app = express();
const server = createServer(app);
const io = new Server(server, {
	cors: {
		origin: 'http://localhost:5173',
		methods: ['GET', 'POST'],
	},
});

const wlManager = new WLManager(io);

if (!wlManager.checkWL()) {
	console.error('wolframscript not found. Please install it and try again.');
	process.exit(1);
}

io.on('connection', (socket) => {
	console.log('[+]Connected users:', io.sockets.sockets.size);

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
	console.log(`Server is running on port ${PORT}`);
});
