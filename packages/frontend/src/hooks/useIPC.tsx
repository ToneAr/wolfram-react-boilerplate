import { Handler } from '../api';
import { createContext, useContext } from 'react';

const IPCContext = createContext<Handler>({
	env: '',
	ipc: {
		send: () => {},
		on: () => () => {},
		once: () => {},
	},
});

function IPCProvider({
	api,
	children,
}: {
	api: Handler;
	children: React.ReactNode;
}) {
	return <IPCContext.Provider value={api}>{children}</IPCContext.Provider>;
}

function useIPC() {
	return useContext(IPCContext);
}

export { useIPC, IPCProvider };
