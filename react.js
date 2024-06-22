const {OFF, WARNING} = require('./constants');

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/prop-types': WARNING,
    'react/sort-comp': WARNING,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/prop-types': OFF,
        'react/sort-comp': [
          WARNING,
          {
            order: [
              'static-variables',
              'static-methods',
              'instance-variables',
              'lifecycle',
              'render',
              'everything-else',
            ],
          },
        ],
      },
    },
  ],
};
