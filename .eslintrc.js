/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  extends: ['./index.js', './import-order.js', './prettier.js'],
  env: {
    node: true,
  },
};
