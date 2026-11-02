import { theme } from "@/theme/themes/theme-contract.css";
import { style } from "@vanilla-extract/css";

export const panel = style({
  color: theme.color.surfaceTextContrast,
  backgroundColor: theme.color.surface,
  borderRadius: theme.radii[3],
  boxShadow: `inset 0 0 0 1px ${theme.color.line}`,
});
