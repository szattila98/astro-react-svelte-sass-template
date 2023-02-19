module.exports = {
	root: true,
	plugins: ['prettier', 'tailwindcss'],
	extends: ['eslint:recommended', 'plugin:tailwindcss/recommended', 'prettier'],
	rules: {
		'prettier/prettier': ['warn', { endOfLine: 'auto' }],
		'no-unused-vars': 'warn',
		'tailwindcss/no-custom-classname': 'off',
	},
	overrides: [
		{
			files: ['*.cjs'],
			env: {
				node: true,
			},
		},
		{
			files: ['*.mjs'],
			env: {
				node: true,
			},
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: '2022',
			},
		},
		{
			files: ['*.astro'],
			extends: ['plugin:astro/recommended'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
			env: { browser: true, node: false, es6: true },
		},
		{
			files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
			},
			plugins: ['react'],
			extends: ['plugin:react/recommended'],
			env: { browser: true, node: false, es6: true },
			settings: {
				react: {
					version: 'detect',
				},
			},
		},
		{
			files: ['*.svelte'],
			extends: ['plugin:svelte/recommended', 'plugin:svelte/prettier'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.svelte'],
			},
			env: { browser: true, node: false, es6: true },
		},
	],
};
