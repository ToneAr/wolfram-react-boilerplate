import axios from 'axios';
import { io } from 'socket.io-client';
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
		if (window.api) {
			if (window.api.env === 'electron') {
				window.api.ipcRenderer.on('wl-status', handleWlCode);
			} else if (window.api.env === 'web') {
				const socket = io('localhost:3000');
				socket.on('wl-status', handleWlCode);
			}
		}
	});

	async function req(
		endpoint: string,
		dataIn: object = {},
		port: number = 4848,
	): Promise<any> {
		try {
			const response = await axios.post(endpoint, null, {
				baseURL: `http://localhost:${port}`,
				params: dataIn,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			});
			return response.data;
		} catch (error) {
			console.log(error);
			return null;
		}
	}

	const aliveQ = useCallback(async () => {
		const res = await req('aliveQ', {}, 8888);
		if (res === 'True') {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [setIsActive]);

	useEffect(() => {
		aliveQ();
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
