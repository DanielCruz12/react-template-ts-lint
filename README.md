# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

Iniciar un proyecto react con eslint, prettier, husky, vite, typescript, vitest, tailwind.

yarn create vite@latest ploject-structure

yarn add eslint -D

npx eslint --init

en el archivo eslintrc.cjs añade:

rules: {
"react/react-in-jsx-scope": "off",
},

o lo puedes hacer con un plugin:

extends: [
"plugin:react/jsx-runtime",
],

instalar prettier:
yarn add prettier -D

crea un archivo .prettierrc
y pon:
{
"useTabs": true,
"printWidth": 80,
"semi": false,
"jsxSingleQuote": false,
"trailingComma": "none",
"bracketSpacing": true,
"arrowParens": "avoid",
"singleQuote": true
}

yarn add eslint-config-prettier -D

en el archivo .eslintrc.cjs añade:
extends: [
'standard-with-typescript',
'plugin:react/recommended',
'plugin:react/jsx-runtime',
'prettier'
],

y en algunas reglas puedes poner:

'@typescript-eslint/no-unused-vars': 'error',
'react/react-in-jsx-scope': 'off',
'react/prop-types': 'off',
'@typescript-eslint/explicit-function-return-type': 'off',
'@typescript-eslint/consistent-type-definitions': 'off',
'@typescript-eslint/strict-boolean-expressions': 'off',
'@typescript-eslint/prefer-optional-chain': 'error',
'@typescript-eslint/no-floating-promises': 'off',
'@typescript-eslint/naming-convention': 'off'

asegurate de tener las extensiones eslint y prettier y en vs code añadir formateador prettier por defecto\*\*

en el archivo tsconfig.json añade la ruta
"include": ["src", "./.eslintrc.cjs", "./vite.config.ts"],

y en el archivo .eslintrc.cjs añade:
parserOptions: {
ecmaVersion: 'latest',
sourceType: 'module',
project: './tsconfig.json'
},

asegurate de importar bien vite:
"include": [
"src",
"./.eslintrc.cjs",
"./vite.config.ts"
],
debes de detectar la version de react en eslintrc.cjs
settings: {
react: {
version: 'detect'
}
},
