# @bruhabruh/eslint-config

## Install

```bash
npm install --save-dev eslint @bruhabruh/eslint-config
```

```bash
pnpm add -S -D eslint @bruhabruh/eslint-config
```

## Usage

Add `eslint.config.js` file in the project root with the following content:

```js
import eslint from '@bruhabruh/eslint-config';

export default eslint.build(
  {
    ignores: ['dist', 'node_modules', 'coverage'],
  },
  ...eslint.configs.base.recommended,
  ...eslint.configs.base.full, // with jsdoc
  eslint.configs.a11y.recommended,
  eslint.configs.client.recommended, // like a11y
  eslint.configs.importOrder.recommended,
  eslint.configs.json.recommended,
  eslint.configs.markdown.recommended, // commonmark
  eslint.configs.markdown.gfm, // gfm
  eslint.configs.prettier.recommended,
  eslint.configs.react.recommended, // for sort required importOrder below
  eslint.configs.server.recommended,
);
```
