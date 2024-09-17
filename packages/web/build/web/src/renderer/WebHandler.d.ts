import { Socket } from '../../../../node_modules/socket.io-client';
declare class WebHandler {
    private socket;
    api: {
        env: string;
        ipc: {
            on: (event: string, callback: (...args: any[]) => void) => void;
            send: (event: string, ...args: any[]) => void;
            once: (channel: string, func: (...args: unknown[]) => void) => void;
        };
    };
    private on;
    private send;
    private once;
    constructor(socket: Socket);
}
export default WebHandler;
