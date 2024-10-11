import a11y from './a11y.js';
import base from './base.js';
import client from './client.js';
import importOrder from './import-order.js';
import json from './json.js';
import markdown from './markdown.js';
import prettier from './prettier.js';
import react from './react.js';
import server from './server.js';
import tailwind from './tailwind.js';

export default {
  build: base.build,
  configs: {
    base: base.configs,
    a11y: a11y.configs,
    client: client.configs,
    importOrder: importOrder.configs,
    json: json.configs,
    markdown: markdown.configs,
    prettier: prettier.configs,
    react: react.configs,
    server: server.configs,
    tailwind: tailwind.configs,
  },
};
