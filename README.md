# @bruhabruh/eslint-config

## Install

```
npm install --save-dev eslint @bruhabruh/eslint-config
```

## Usage

Add `.eslintrc` file in the project root with the following content:

```js
import mainConfig from '@bruhabruh/eslint-config';

export default [
  {
    ignores: ['dist', 'node_modules', 'coverage'],
  },
  ...mainConfig,
];
```

Add client and server config files in corresponding directories:

```js
import clientConfig from '@bruhabruh/eslint-config/client.js';

export default [
  {
    ignores: ['dist', 'node_modules', 'coverage'],
  },
  ...clientConfig,
];
```

```js
import serverConfig from '@bruhabruh/eslint-config/server.js';

export default [
  {
    ignores: ['dist', 'node_modules', 'coverage'],
  },
  ...serverConfig,
];
```

### Prettier

If you are using Prettier, extend root config with the additional rules:

```js
import mainConfig from '@bruhabruh/eslint-config';
import prettierConfig from '@bruhabruh/eslint-config/prettier.js';

export default [
  {
    ignores: ['dist', 'node_modules', 'coverage'],
  },
  ...mainConfig,
  ...prettierConfig,
];
```

### a11y

If you want to spot accessibility issues, extend root config with the additional rules:

```js
import mainConfig from '@bruhabruh/eslint-config';
import a11yConfig from '@bruhabruh/eslint-config/a11y.js';

export default [
  {
    ignores: ['dist', 'node_modules', 'coverage'],
  },
  ...mainConfig,
  ...a11yConfig,
];
```

### Order

if you want to enforce a convention in module import order, extend root config with the additional rules:

```js
import mainConfig from '@bruhabruh/eslint-config';
import importOrderConfig from '@bruhabruh/eslint-config/import-order.js';

export default [
  {
    ignores: ['dist', 'node_modules', 'coverage'],
  },
  ...mainConfig,
  ...importOrderConfig,
];
```

### JSON

```js
import mainConfig from '@bruhabruh/eslint-config';
import jsonConfig from '@bruhabruh/eslint-config/json.js';

export default [
  {
    ignores: ['dist', 'node_modules', 'coverage'],
  },
  ...mainConfig,
  ...jsonConfig,
];
```

### Markdown

```js
import mainConfig from '@bruhabruh/eslint-config';
import markdownConfig from '@bruhabruh/eslint-config/markdown.js';

export default [
  {
    ignores: ['dist', 'node_modules', 'coverage'],
  },
  ...mainConfig,
  ...markdownConfig,
];
```
