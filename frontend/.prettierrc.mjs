/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'always',
  endOfLine: 'lf',
  bracketSpacing: true,
  bracketSameLine: false,
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  embeddedLanguageFormatting: 'auto',
  singleAttributePerLine: true,
  plugins: ["prettier-plugin-astro", ""],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
