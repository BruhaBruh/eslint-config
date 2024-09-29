import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  jsdoc.configs['flat/recommended-typescript'],
  {
    plugins: {
      import: importPlugin,
      '@typescript-eslint/parser': tseslint,
    },
    languageOptions: {
      globals: {
        ...globals.es2024,
        ...globals['shared-node-browser'],
      },
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      // Possible 'error's
      'no-empty': 'off', // eslint:recommended

      // Best Practices
      'array-callback-return': 'error',
      'block-scoped-var': 'warn',
      complexity: 'warn',
      'consistent-return': 'warn',
      curly: 'error',
      'dot-location': ['error', 'property'],
      eqeqeq: ['warn', 'always'],
      'guard-for-in': 'error',
      'no-caller': 'error',
      'no-console': 'warn',
      'no-div-regex': 'warn',
      'no-eq-null': 'error',
      'no-eval': 'warn',
      'no-extend-native': 'error',
      'no-extra-bind': 'warn',
      'no-extra-label': 'error',
      'no-floating-decimal': 'error',
      'no-global-assign': 'warn', // eslint:recommended
      'no-implicit-coercion': 'warn',
      'no-implicit-globals': 'warn',
      'no-implied-eval': 'warn',
      'no-iterator': 'error',
      'no-labels': 'error',
      'no-loop-func': 'error',
      'no-new': 'error',
      'no-new-func': 'warn',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': ['warn', { props: true }],
      'no-proto': 'error',
      'no-return-assign': ['error', 'always'],
      'no-script-url': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'warn',
      'no-unmodified-loop-condition': 'error',
      'no-unused-expressions': 'error',
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'no-void': 'error',
      'no-with': 'error',
      radix: 'warn',
      'wrap-iife': ['error', 'inside'],

      // Variables
      'no-label-var': 'error',
      'no-shadow': 'warn',
      'no-shadow-restricted-names': 'error',
      'no-undef-init': 'error',
      'no-use-before-define': ['warn', { functions: false }],

      // Node.js and CommonJS
      'callback-return': 'warn',
      'handle-callback-err': 'warn',
      'no-new-require': 'error',
      'no-path-concat': 'warn',

      // Stylistic Issues
      camelcase: ['error', { properties: 'never' }],
      'comma-style': ['error', 'last'],
      'max-depth': ['warn', { maximum: 5 }],
      'new-cap': 'error',
      'new-parens': 'error',
      'no-array-constructor': 'warn',
      'no-bitwise': 'error',
      'no-lonely-if': 'warn',
      'no-negated-condition': 'warn',
      'no-nested-ternary': 'warn',
      'no-new-object': 'warn',
      'no-restricted-syntax': ['error', 'WithStatement'],
      'no-unneeded-ternary': 'error',
      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
        },
      ],

      // ECMAStrict 6
      'no-useless-constructor': 'error',
      'no-var': 'error',
      'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }],
      'prefer-const': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'require-atomic-updates': 'off', // eslint:recommended
      'require-yield': 'warn', // eslint:recommended

      'import/no-duplicates': ['error', { considerQueryString: true }],
      'import/no-extraneous-dependencies': ['error', { includeTypes: true }],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // TypeScript compiler handles these on its own
      strict: 'off',
      'no-undef': 'off',
      'no-dupe-class-members': 'off',

      // TypeScript-specific extension rules
      'no-array-constructor': 'off',
      'no-loop-func': 'off',
      'no-redeclare': 'off',
      'no-shadow': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-array-constructor': 'warning',
      '@typescript-eslint/no-loop-func': 'error',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/no-shadow': 'warning',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-use-before-define': [
        'warning',
        { functions: false },
      ],
      '@typescript-eslint/no-useless-constructor': 'error',

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'typeLike',
          format: ['PascalCase'],
          leadingUnderscore: 'forbid',
        },
      ],
      '@typescript-eslint/member-delimiter-style': 'error',
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'public-static-field',
            'protected-static-field',
            'private-static-field',

            'public-static-method',
            'protected-static-method',
            'private-static-method',

            'public-instance-field',
            'protected-instance-field',
            'private-instance-field',

            'constructor',

            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
          ],
        },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        { accessibility: 'no-public' },
      ],
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/no-explicit-any': 'warning',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warning',
      '@typescript-eslint/parameter-properties': 'error',
      '@typescript-eslint/triple-slash-reference': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/type-annotation-spacing': [
        'error',
        {
          before: true,
          after: true,
          overrides: {
            colon: {
              before: false,
            },
          },
        },
      ],
    },
  },
);
