import { Linter } from 'eslint';

declare namespace Base {
  const build: (...configs: Linter.Config[]) => unknown[]; // Определяешь точный тип, если известен
  const configs: Record<'recommended' | 'full', Linter.Config[]>;
}

declare namespace A11y {
  const configs: Record<'recommended', Linter.Config>;
}

declare namespace Client {
  const configs: Record<'recommended', Linter.Config>;
}

declare namespace ImportOrder {
  const configs: Record<'recommended', Linter.Config>;
}

declare namespace Json {
  const configs: Record<'recommended', Linter.Config>;
}

declare namespace Markdown {
  const configs: Record<'recommended' | 'gfm', Linter.Config>;
}

declare namespace Prettier {
  const configs: Record<'recommended', Linter.Config>;
}

declare namespace React {
  const configs: Record<'recommended', Linter.Config[]>;
}

declare namespace Server {
  const configs: Record<'recommended', Linter.Config>;
}

declare const _default: {
  build: typeof Base.build;
  configs: {
    base: typeof Base.configs;
    a11y: typeof A11y.configs;
    client: typeof Client.configs;
    importOrder: typeof ImportOrder.configs;
    json: typeof Json.configs;
    markdown: typeof Markdown.configs;
    prettier: typeof Prettier.configs;
    react: typeof React.configs;
    server: typeof Server.configs;
  };
};

export default _default;
