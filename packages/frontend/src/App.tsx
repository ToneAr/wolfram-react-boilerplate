// Packages
import { MemoryRouter, Routes, Route, BrowserRouter, RouterProps } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect } from 'react';

// Hooks
import { WLProvider, useWL } from './hooks/useWL';
import { IPCProvider, useIPC } from './hooks/useIPC';

// Styles
import '../css/App.css';

// Components
import Demo from './components/pages/Demo';
import LoadingScreen from './components/pages/LoadingScreen';

import { Handler } from './api';

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#ee0915',
		},
	},
});
function Router({
	children,
	env,
	props,
}: {
	children: React.JSX.Element;
	env: string;
	props?: RouterProps;
}) {
	return env !== 'web' ? (
		<MemoryRouter {...props}>{children}</MemoryRouter>
	) : (
		<BrowserRouter {...props}>{children}</BrowserRouter>
	);
}
function AppContent() {
	const wl = useWL();
	const api = useIPC();

	return !wl.isActive ? (
		<LoadingScreen />
	) : (
		<Router env={api.env}>
			<Routes>
				<Route path="/" element={<Demo />} />
			</Routes>
		</Router>
	);
}

export function Frontend({ api }: { api: Handler }) {
	useEffect(() => {
		document.title = 'WRB: Example Project';
	});
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
