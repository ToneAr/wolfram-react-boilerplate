import { ChildProcessWithoutNullStreams } from '../../../../node_modules/child_process';
import { Server } from '../../../../node_modules/socket.io';
export declare class WLManager {
    wlProc: ChildProcessWithoutNullStreams | null;
    isQuitting: boolean;
    io: Server;
    constructor(io: Server);
    checkWL(): boolean;
    startWL(): void;
    cleanupWL(): void;
    req(endpoint: string, dataIn?: object, port?: number): Promise<any>;
}
