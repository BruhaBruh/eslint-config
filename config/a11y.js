import jsxA11y from 'eslint-plugin-jsx-a11y';

/** @type {import('eslint').Linter.Config} */
const recommended = {
  ...jsxA11y.flatConfigs.recommended,
  name: '@bruhabruh/eslint-config/a11y',
};

export default {
  configs: {
    recommended,
  },
};
