import security from 'eslint-plugin-security';
import globals from 'globals';

/** @type {import('eslint').Linter.Config} */
const recommended = {
  name: '@bruhabruh/eslint-config/server',
  plugins: {
    security: security,
  },
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
  rules: {
    'global-require': 'warn',
    'security/detect-buffer-noassert': 'error',
    'security/detect-child-process': 'error',
    'security/detect-disable-mustache-escape': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-new-buffer': 'error',
    'security/detect-no-csrf-before-method-override': 'error',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-non-literal-require': 'error',
    'security/detect-possible-timing-attacks': 'error',
    'security/detect-pseudoRandomBytes': 'error',
    'security/detect-unsafe-regex': 'error',
  },
};

export default {
  configs: {
    recommended,
  },
};
