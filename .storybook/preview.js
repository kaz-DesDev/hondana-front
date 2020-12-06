import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

// デフォルト CSS を読み込む
import "../src/styles/globals.css";
import "sanitize.css";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    storySort: {
      order: ["Welcome", "README"],
    },
  },
});
