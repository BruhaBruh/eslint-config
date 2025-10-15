import prettier from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config} */
const recommended = {
  ...prettier,
  files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
  name: '@bruhabruh/eslint-config/prettier',
};

export default {
  configs: {
    recommended,
  },
};
