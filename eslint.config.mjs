import tsParser from '@typescript-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default [
	...tseslint.configs.recommended,
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		plugins: {
			'@typescript-eslint': typescriptEslint,
			react: react,
			prettier: prettierPlugin,
		},

		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module',
				ecmaFeatures: { jsx: true },
			},
			globals: { ...globals.node, ...globals.browser },
		},
		settings: {
			react: { version: 'detect' },
			'import/resolver': {
				node: {
					moduleDirectory: [
						'**/node_modules/*',
						'**/src/*',
						'**/frontend/*',
					],
				},
				typescript: {},
			},
		},

		rules: {
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/no-unused-expressions': 'off',
			'@typescript-eslint/no-require-imports': 'warn',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/explicit-function-return-type': 'off',
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

			'prettier/prettier': 'warn',
		},
	},
	prettierConfig,
];
