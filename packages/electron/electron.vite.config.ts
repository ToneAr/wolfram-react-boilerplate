import { resolve } from 'path';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	main: {
		plugins: [externalizeDepsPlugin()],
		build: {
			outDir: resolve('out/app/src/main'),
			emptyOutDir: false,
			lib: {
				entry: resolve('src/main/main.ts'),
			},
			rollupOptions: {
				external: ['electron'],
				output: {
					entryFileNames: 'main.js',
				},
			},
		},
	},
	preload: {
		plugins: [externalizeDepsPlugin()],
		build: {
			outDir: resolve('out/app/src/main'),
			emptyOutDir: false,
			lib: {
				entry: resolve('src/main/preload.ts'),
			},
		},
	},
	renderer: {
		build: {
			outDir: resolve('out/app/src/renderer'),
			rollupOptions: {
				input: resolve('src/renderer/index.html'),
			},
		},
		plugins: [react(), svgr({ svgrOptions: { icon: true } })],
	},
});
