import eslint from './index.js';

export default eslint.build(
  ...eslint.configs.base.recommended,
  ...eslint.configs.react.recommended,
  eslint.configs.json.recommended,
  eslint.configs.markdown.gfm,
  eslint.configs.importOrder.recommended,
  eslint.configs.prettier.recommended,
);
