const js = require("@eslint/js");
const nodePlugin = require("eslint-plugin-n");
const jest = require("eslint-plugin-jest");

module.exports = [
  js.configs.recommended,
  nodePlugin.configs["flat/recommended-script"],
  jest.configs["flat/recommended"],
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
];
