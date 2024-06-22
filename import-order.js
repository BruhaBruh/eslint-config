/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ['./react'],
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
};
