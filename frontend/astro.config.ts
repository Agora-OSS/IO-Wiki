// @ts-check
import react from "@astrojs/react";
import UnpluginTypia from "@ryoppippi/unplugin-typia/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import astrobook from "astrobook";
import checker from "vite-plugin-checker";
import devtoolsJson from "vite-plugin-devtools-json";
import mkcert from "vite-plugin-mkcert";

// https://astro.build/config
export default defineConfig({
  site: "https://iowiki.com",
  base: "/",
  output: "static",
  integrations: [
    react(),
    astrobook({
      directory: "src",
      head: "src/core/layouts/Layout.astro",
      subpath: "/docs/components",
    }),
  ],
  vite: {
    server: {
      https: {
        key: ".certs/local-key.pem",
        cert: ".certs/local-cert.pem",
      },
      host: true,
      port: 443,
      proxy: {
        "/admin-api": {
          target: "http://localhost:8080",
          changeOrigin: false,
          secure: false,
        },
        "/api": {
          target: "http://localhost:8080",
          changeOrigin: false,
          secure: false,
        },
      },
    },
    plugins: [
      mkcert({
        force: true,
        savePath: "./.certs",
        keyFileName: "local-key.pem",
        certFileName: "local-cert.pem",
      }),
      checker({
        typescript: true,
        root: "./",
        biome: {
          command: "lint",
        },
      }),
      tailwindcss(),
      UnpluginTypia({ tsconfig: "./tsconfig.json" }),
      devtoolsJson(),
    ],
  },
});
