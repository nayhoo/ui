import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

export default defineConfig((options) => ({
  entry: ["src/index.ts"],
  outDir: "dist",
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: "cjs",
  esbuildPlugins: [
    vanillaExtractPlugin({
      identifiers: options.watch ? "debug" : "short",
    }),
  ],
}));
