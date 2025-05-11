// @ts-check
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import UnpluginTypia from "@ryoppippi/unplugin-typia/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import checker from "vite-plugin-checker";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue()],
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
