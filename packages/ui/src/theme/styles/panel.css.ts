import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { style } from "@vanilla-extract/css";

export const panel = style({
  backgroundColor: theme.semanticColors.surface,
  borderRadius: theme.radii[3],
  boxShadow: `${theme.colors.slate.slate8} 0px 10px 38px -10px, ${theme.colors.slate.slate8} 0px 10px 20px -15px`,
});
