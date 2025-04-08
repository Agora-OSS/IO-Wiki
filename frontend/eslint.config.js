import eslintPluginAstro from "eslint-plugin-astro";

export default [
  ...eslintPluginAstro.configs.base,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["flat/jsx-a11y-recommended"],
  {
    rules: {
      "astro/semi": "error",
    },
  },
];
