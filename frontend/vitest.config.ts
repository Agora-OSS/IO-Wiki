/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
	test: {
		globals: true,
		setupFiles: ["./vitest.setup.ts"],
		root: __dirname,
		environment: "node",
		include: ["src/**/__tests__/*.{test,spec}.{js,ts}"],
	},
});
