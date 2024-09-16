import { createRoot } from 'react-dom/client';
import React from 'react';

import Frontend from './App';
import { useWL, WLProvider } from '../../hooks/src/useWL';
export { Frontend, useWL, WLProvider };

// This is purely for testing
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
	<React.StrictMode>
		{/* <>123</> */}
		<Frontend />
	</React.StrictMode>,
);
