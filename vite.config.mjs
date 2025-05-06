import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import postcss from '@vituum/vite-plugin-postcss';
import tsconfigPaths from 'vite-tsconfig-paths';
import mkcert from 'vite-plugin-mkcert';
import { base } from './package.json';

export default defineConfig({
	base: process.env.NODE_ENV === 'development' ? './' : base,
	build: {
		outDir: './build/',
		target: 'esnext',
		cssCodeSplit: false,
		emptyOutDir: true,
		manifest: true,
		// sourcemap: true,
		rollupOptions: {
			external: [],
			input: 'index.html',
			output: {
				// format: 'iife',
				entryFileNames: 'src/renderer/[name].js',
				chunkFileNames: 'src/renderer/[name].js',
				assetFileNames: (assetInfo) => {
					if (assetInfo.name.endsWith('.css')) {
						return 'src/renderer/[name].css';
					}
					return 'src/renderer/assets/[name][extname]';
				},
			},
		},
	},
	resolve: {
		alias: {
			react: 'react',
			'react-dom': 'react-dom',
		},
	},
	plugins: [
		mkcert(),
		react(),
		svgr({ svgrOptions: { icon: true } }),
		postcss(),
		tsconfigPaths(),
	],
	css: {
		// This ensures CSS Modules generate type definitions
		modules: {
			generateScopedName: '[name]__[local]___[hash:base64:5]',
		},
	},
});
