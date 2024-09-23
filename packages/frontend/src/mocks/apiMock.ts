export default {
	env: 'jest',
	ipc: {
		send: jest.fn(),
		on: jest.fn(),
		once: jest.fn(),
	},
};
