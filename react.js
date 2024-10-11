import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

/** @type {import('eslint').Linter.Config[]} */
const recommended = [
  {
    ...react.configs.flat.recommended,
    name: 'react',
    ignores: ['**/*.json', '**/*.md'],
  },
  {
    ...react.configs.flat['jsx-runtime'],
    name: 'jsx-runtime',
  },
  {
    name: '@bruhabruh/eslint-config/react',
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/sort-comp': [
        'warn',
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
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

export default {
  configs: {
    recommended,
  },
};
