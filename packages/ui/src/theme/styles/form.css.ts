import { theme } from "@/theme/themes/theme-contract.css";
import { style } from "@vanilla-extract/css";

export const formField = style({
  display: "grid",
  marginBottom: theme.space[2],
});

export const formLabel = style({
  color: theme.colors.textSubtle,
  fontSize: theme.fontSizes[3],
  fontWeight: theme.fontWeights.medium,
  lineHeight: theme.lineHeights[6],
});
