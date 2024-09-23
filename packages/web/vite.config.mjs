import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import postcss from '@vituum/vite-plugin-postcss';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	base: './',
	build: {
		outDir: './build',
		target: 'es2022',
		cssCodeSplit: false,
		emptyOutDir: true,
		manifest: true,
		rollupOptions: {
			external: [],
			input: 'index.html',
			output: {
				entryFileNames: 'assets/[name].[hash].js',
				chunkFileNames: 'assets/[name].[hash].js',
				assetFileNames: (assetInfo) => {
					if (assetInfo.name.endsWith('.css')) {
						return 'assets/[name].[hash].css';
					}
					return 'assets/[name].[hash][extname]';
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
		react(),
		svgr({ svgrOptions: { icon: true } }),
		postcss(),
		tsconfigPaths(),
		{
			/*******************************************************
			 * Workaround for missing MIME types from WAS.
			 * Defer is unsafe and also breaks in some environments.
			 * TODO: Fix MIME types in WAS or switch to WWE
			 ******************************************************/
			name: 'html-transform',
			transformIndexHtml(html) {
				return process.env.NODE_ENV !== 'development'
					? html.replace(
							/<script type="module"/g,
							'<script defer="defer"',
						)
					: html;
			},
		},
	],
	css: {
		// This ensures CSS Modules generate type definitions
		modules: {
			generateScopedName: '[name]__[local]___[hash:base64:5]',
		},
	},
});
