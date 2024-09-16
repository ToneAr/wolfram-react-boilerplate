import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dts from 'vite-plugin-dts';
import postcss from '@vituum/vite-plugin-postcss';

export default defineConfig({
	plugins: [
		react(),
		svgr({ svgrOptions: { icon: true } }),
		postcss(),
		dts({
			include: ['src'],
			exclude: ['node_modules', 'build'],
			insertTypesEntry: true,
			outDir: 'build',
		}),
	],
	build: {
		lib: {
			entry: 'src/index.tsx',
			name: 'Frontend',
			formats: ['es', 'cjs'],
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
				assetFileNames: (assetInfo) => {
					if (assetInfo.name.endsWith('.css')) {
						return 'index.css';
					}
					return assetInfo.name;
				},
			},
		},
		outDir: './build',
		sourcemap: true,
		cssCodeSplit: false,
	},
	css: {
		// This will ensure that CSS Modules generate type definitions
		modules: {
			generateScopedName: '[name]__[local]___[hash:base64:5]',
		},
	},
});
