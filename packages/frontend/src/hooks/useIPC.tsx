import { Handler } from '../api';
import { createContext, useContext } from 'react';

let IPCContext: React.Context<Handler>;

function IPCProvider({
	api,
	children,
}: {
	api: Handler;
	children: React.ReactNode;
}) {
	IPCContext = createContext<Handler>(api);
	return <IPCContext.Provider value={api}>{children}</IPCContext.Provider>;
}

function useIPC() {
	return useContext(IPCContext);
}

export { useIPC, IPCProvider };
