/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    root: __dirname,
    include: ["src/**/__tests__/*.{test,spec}.{js,ts,tsx}"],
    environment: "jsdom",
  },
});
