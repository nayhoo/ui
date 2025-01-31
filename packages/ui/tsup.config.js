import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/index.ts"],
  outDir: "dist",
  splitting: false,
  sourcemap: true,
  dts: true,
  format: "cjs",
  esbuildPlugins: [
    vanillaExtractPlugin({
      identifiers: options.watch ? "debug" : "short",
    }),
  ],
}));
