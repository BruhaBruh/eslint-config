import globals from 'globals';
import react from './react.js';

export default [
  ...react,
  {
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
      },
    },
  },
];
