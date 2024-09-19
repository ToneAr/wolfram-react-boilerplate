import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import postcss from '@vituum/vite-plugin-postcss';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [
		react(),
		svgr({ svgrOptions: { icon: true } }),
		postcss(),
		tsconfigPaths(),
	],
	base: './',
	build: {
		rollupOptions: {
			external: [],
			input: 'index.html',
			output: {
				entryFileNames: 'index.js',
				assetFileNames: (assetInfo) => {
					if (assetInfo.name.endsWith('.css')) {
						return 'index.css';
					}
					return assetInfo.name;
				},
			},
		},
		outDir: './build',
		target: 'es2022',
		sourcemap: true,
		cssCodeSplit: false,
		emptyOutDir: true,
		manifest: true,
	},
	css: {
		// This will ensure that CSS Modules generate type definitions
		modules: {
			generateScopedName: '[name]__[local]___[hash:base64:5]',
		},
	},
});
