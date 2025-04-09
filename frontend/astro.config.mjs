// @ts-check
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import UnpluginTypia from "@ryoppippi/unplugin-typia/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [react(), vue({})],
	server: {
		host: "localhost",
		port: 3000,
	},
	vite: {
		plugins: [tailwindcss(), UnpluginTypia({ tsconfig: "./tsconfig.json" })],
	},
});
