import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { style } from "@vanilla-extract/css";

export const panel = style({
  color: theme.semanticColors.surfaceTextContrast,
  backgroundColor: theme.semanticColors.surface,
  borderRadius: theme.radii[3],
  boxShadow: `${theme.semanticColors.shadow} 0px 10px 38px -10px, ${theme.semanticColors.shadow} 0px 10px 20px -15px`,
});
