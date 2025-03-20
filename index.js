import a11y from './config/a11y.js';
import base from './config/base.js';
import client from './config/client.js';
import importOrder from './config/import-order.js';
import json from './config/json.js';
import markdown from './config/markdown.js';
import prettier from './config/prettier.js';
import react from './config/react.js';
import server from './config/server.js';

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
  },
};
