import express from 'express';
import { createServer } from 'http';
import { Server as SocketServer } from 'socket.io';
import { WLManager } from './wlManager';

const app = express();
const server = createServer(app);
const io = new SocketServer(server, {
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
	console.log('A user connected');

	socket.on('start-wl', () => {
		console.log('Received start-wl event from client');
		wlManager.startWL();
		socket.emit('wl-status', 'starting');
	});

	socket.on('stop-wl', () => {
		console.log('Received stop-wl event from client');
		wlManager.cleanupWL();
		socket.emit('wl-status', 'starting');
	});

	socket.on('disconnect', () => {
		console.log('User disconnected');
	});
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
