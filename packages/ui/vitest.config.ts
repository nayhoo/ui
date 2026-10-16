import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [vanillaExtractPlugin()],
  test: {
    environment: "happy-dom",
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    coverage: {
      include: ["src/**/*.{ts,tsx}"],
    },
  },
});
