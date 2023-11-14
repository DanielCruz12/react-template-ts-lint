module.exports = {
	env: {
		es2021: true,
		node: true
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript',
		'prettier',
		'eslint-config-prettier'
	],
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script'
			}
		}
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json'
	},
	plugins: ['react'],
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {
		'@typescript-eslint/no-unused-vars': 'error',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/naming-convention': 'off'
	}
}
