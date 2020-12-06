const addParameters = require("@storybook/react").addParameters;

// デフォルト CSS を読み込む
import "sanitize.css";

addParameters({
  options: {
    storySort: {
      order: ["Welcome", "README"],
    },
  },
});
