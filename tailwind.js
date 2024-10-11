import tailwind from 'eslint-plugin-tailwindcss';

/** @type {import('eslint').Linter.Config[]} */
const recommended = {
  ...tailwind.configs['flat/recommended'][0],
  ...tailwind.configs['flat/recommended'][1],
  name: '@bruhabruh/eslint-config/tailwind',
  rules: {
    ...tailwind.configs['flat/recommended'][1].rules,
    'tailwindcss/no-custom-classname': 'off',
  },
  settings: {
    tailwindcss: {
      callees: ['classnames', 'clsx', 'ctl', 'cn', 'cva'],
      cssFiles: [
        '**/*.css',
        '**/*.mdx',
        '!**/node_modules',
        '!**/.*',
        '!**/dist',
        '!**/build',
      ],
      classRegex: '^class(Name)?$', // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
    },
  },
};

export default {
  configs: {
    recommended,
  },
};
