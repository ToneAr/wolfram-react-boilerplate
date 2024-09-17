import { Handler } from '../../api';
declare function IPCProvider({ api, children, }: {
    api: Handler;
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
declare function useIPC(): Handler;
export { useIPC, IPCProvider };
