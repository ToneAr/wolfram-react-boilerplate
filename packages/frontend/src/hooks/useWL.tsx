import { Handler } from '../api';
import { useIPC } from './useIPC';
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';

interface IuseWL {
	isActive: boolean;
	req: (endpoint: string, dataIn?: object, port?: number) => any;
}
function useWl(): IuseWL {
	const [isActive, setIsActive] = useState<boolean>(false);
	const [api] = useState<Handler>(useIPC());

	function handleWlCode(code) {
		if (code === 0) {
			console.log('WL Ready');
			setIsActive(true);
		} else {
			setIsActive(false);
			throw new Error(`wolframscript returned code: ${code}`);
		}
	}

	useEffect(() => {
		api.ipc.on('wl-status', (code) => {
			handleWlCode(code);
			console.log('wl-status effect:', isActive);
		});
	});

	async function req(
		endpoint: string,
		dataIn: object = {},
		port: number = 4848,
	): Promise<unknown> {
		return new Promise((resolve, reject) => {
			try {
				api.ipc.send('req', [endpoint, dataIn, port]);

				api.ipc.once('req', (res) => {
					console.log('Received response:', res);
					resolve(res);
				});
			} catch (error) {
				reject(error);
			}
		});
	}

	const aliveQ = useCallback(async () => {
		const res = await req('aliveQ', {}, 8888);
		console.log('aliveQ res:', res);
		if (res === 'True') {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [isActive, setIsActive]);

	useEffect(() => {
		aliveQ();
		console.log(`isActive after aliveQ: ${isActive}`);
	}, [aliveQ, isActive]);

	return {
		isActive,
		req,
	};
}

const WLContext = createContext<IuseWL>({
	isActive: false,
	req: async () => {},
});

function WLProvider({ children }: { children: React.ReactNode }) {
	const wl = useWl();
	return <WLContext.Provider value={wl}>{children}</WLContext.Provider>;
}

function useWL() {
	return useContext(WLContext);
}

export { useWL, WLProvider };
