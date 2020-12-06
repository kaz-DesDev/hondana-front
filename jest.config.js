module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["js", "ts", "jsx, tsx", "json"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  // DMX と SVG の変換処理を追加
  transform: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.jsx?$": "ts-jest",
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^(pages|components)/(.+)": "<rootDir>/src/$1/$2",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/src/__test__/__mocks__/fileMock.js",
  },
  globals: {
    "ts-jest": {
      tsconfig: {
        jsx: "react",
      },
    },
  },
};
