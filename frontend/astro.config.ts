// @ts-check
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import UnpluginTypia from "@ryoppippi/unplugin-typia/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import checker from "vite-plugin-checker";
import astrobook from "astrobook";

// https://astro.build/config
export default defineConfig({
  site: "https://iowiki.com",
  base: "/",
  output: "static",
  integrations: [
    react(),
    vue(),
    astrobook({
      directory: "src",
      head: "src/core/layouts/Layout.astro",
      subpath: "/docs/components",
    }),
  ],
  vite: {
    plugins: [
      checker({
        typescript: true,
        root: "./",
        biome: {
          command: "lint",
        },
      }),
      tailwindcss(),
      UnpluginTypia({ tsconfig: "./tsconfig.json" }),
    ],
  },
});
