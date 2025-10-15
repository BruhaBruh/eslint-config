import json from '@eslint/json';

/** @type {import('eslint').Linter.Config} */
const recommended = {
  ...json.configs.recommended,
  files: ['**/*.json'],
  ignores: ['package-lock.json'],
  language: 'json/json',
  name: '@bruhabruh/eslint-config/json',
  rules: {
    ...json.configs.recommended.rules,
    'no-irregular-whitespace': 'off',
  },
};

export default {
  configs: {
    recommended,
  },
};
