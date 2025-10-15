import globals from 'globals';

/** @type {import('eslint').Linter.Config} */
const recommended = {
  name: '@bruhabruh/eslint-config/import-order',
  languageOptions: {
    parserOptions: {
      sourceType: 'module',
    },
    globals: {
      ...globals.browser,
    },
  },
};

export default {
  configs: {
    recommended,
  },
};
