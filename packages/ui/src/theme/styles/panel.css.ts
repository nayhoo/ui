import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { style } from "@vanilla-extract/css";

export const panel = style({
  color: theme.colors.surfaceTextContrast,
  backgroundColor: theme.colors.surface,
  borderRadius: theme.radii[3],
  boxShadow: `inset 0 0 0 1px ${theme.colors.line}`,
});
