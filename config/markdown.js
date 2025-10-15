import markdown from '@eslint/markdown';

/** @type {import('eslint').Linter.Config} */
const recommended = {
  ...markdown.configs.recommended[0],
  name: '@bruhabruh/eslint-config/markdown/common',
  files: ['**/*.md', '**/*.mdx'],
  rules: {
    ...markdown.configs.recommended[0].rules,
    'no-irregular-whitespace': 'off',
  },
};

/** @type {import('eslint').Linter.Config} */
const gfm = {
  ...markdown.configs.recommended[0],
  name: '@bruhabruh/eslint-config/markdown/gfm',
  files: ['**/*.md', '**/*.mdx'],
  language: 'markdown/gfm',
  rules: {
    ...markdown.configs.recommended[0].rules,
    'no-irregular-whitespace': 'off',
  },
};

export default {
  configs: {
    recommended,
    gfm,
  },
};
