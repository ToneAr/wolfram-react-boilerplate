import { Handler } from './api';
// Packages
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Hooks
import { WLProvider, useWL } from './hooks/useWL';
import { IPCProvider } from './hooks/useIPC';

// Styles
import './css/App.css';

// Components
import Demo from './components/pages/Demo';
import LoadingScreen from './components/pages/LoadingScreen';

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#ee0915',
		},
	},
});
function AppContent() {
	const wl = useWL();

	return !wl.isActive ? (
		<LoadingScreen />
	) : (
		<Router>
			<Routes>
				<Route path="/" element={<Demo />} />
			</Routes>
		</Router>
	);
}

export default function Frontend({ api }: { api: Handler }) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<IPCProvider api={api}>
				<WLProvider>
					<AppContent />
				</WLProvider>
			</IPCProvider>
		</ThemeProvider>
	);
}
