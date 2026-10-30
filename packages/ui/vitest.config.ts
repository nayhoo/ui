import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { playwright } from "@vitest/browser-playwright";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [vanillaExtractPlugin()],
  test: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    browser: {
      enabled: true,
      headless: true,
      instances: [{ browser: "chromium" }],
      provider: playwright(),
    },
    coverage: {
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/components/aspect-ratio", // straight port from radix ui
        "src/components/flex", // deprecated
        "src/components/grid", // deprecated
        "src/components/separator", // straight port from radix ui (almost)
        "src/**/index.ts",
        "src/theme/*",
        "src/types/*",
        "src/utils/create-theme.ts",
      ],
      thresholds: {
        lines: 85,
        functions: 85,
        branches: 85,
        statements: 85,
      },
    },
  },
});
