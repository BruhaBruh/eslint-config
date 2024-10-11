import a11y from './a11y.js';

/** @type {import('eslint').Linter.Config} */
const recommended = {
  ...a11y,
  name: '@bruhabruh/eslint-config/client',
};

export default {
  configs: {
    recommended,
  },
};
