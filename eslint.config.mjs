import typescriptEslint from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	...compat.extends(
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'@electron-toolkit/eslint-config-ts/recommended',
		'@electron-toolkit/eslint-config-prettier',
	),
	{
		plugins: {
			'@typescript-eslint': typescriptEslint,
		},

		languageOptions: {
			globals: {
				...globals.node,
			},

			ecmaVersion: 2022,
			sourceType: 'module',
		},
		settings: {
			'import/resolver': {
				node: {
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
					moduleDirectory: ['node_modules', 'src'],
				},
				typescript: {},
			},

			'import/parsers': {
				'@typescript-eslint/parser': ['.ts', '.tsx'],
			},
		},

		rules: {
			'@typescript-eslint/no-unused-expressions': 'off',
			'@typescript-eslint/no-require-imports': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript/explicit-function-return-type': 'off',
			'import/no-extraneous-dependencies': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/jsx-filename-extension': 'off',
			'import/extensions': 'off',
			'import/no-unresolved': 'off',
			'import/no-import-module-exports': 'off',
			'no-shadow': 'off',
			'@typescript-eslint/no-shadow': 'error',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
		},
	},
];
