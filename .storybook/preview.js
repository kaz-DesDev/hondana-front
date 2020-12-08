import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { ThemeProvider } from '@material-ui/core/styles';

// デフォルト CSS を読み込む
import "../src/styles/globals.css";
import "sanitize.css";
import theme from "../src/theme.tsx";

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

addDecorator((story) => (
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
));
