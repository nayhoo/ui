import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    // components
    "src/components/avatar.tsx",
    "src/components/badge.tsx",
    "src/components/box.tsx",
    "src/components/button.tsx",
    "src/components/card.tsx",
    "src/components/checkbox.tsx",
    "src/components/container.tsx",
    "src/components/dropdown-menu.tsx",
    "src/components/flex.tsx",
    "src/components/form.tsx",
    "src/components/grid.tsx",
    "src/components/heading.tsx",
    "src/components/icon-button.tsx",
    "src/components/label.tsx",
    "src/components/link.tsx",
    "src/components/menu.tsx",
    "src/components/panel.tsx",
    "src/components/paragraph.tsx",
    "src/components/popover.tsx",
    "src/components/select.tsx",
    "src/components/separator.tsx",
    "src/components/skeleton.tsx",
    "src/components/spinner.tsx",
    "src/components/status.tsx",
    "src/components/switch.tsx",
    "src/components/text-field.tsx",
    "src/components/text.tsx",
    "src/components/tooltip.tsx",
    // providers
    "src/providers/index.ts",
    // theme
    "src/theme/index.ts",
    // types
    "src/types/index.ts",
    // utils
    "src/utils/index.ts",
  ],
  sourcemap: true,
  outDir: "dist",
  format: ["esm", "cjs"],
  esbuildPlugins: [vanillaExtractPlugin()],
  dts: true,
});
