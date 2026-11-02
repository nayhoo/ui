import { theme } from "@/theme/themes/theme-contract.css";
import { style } from "@vanilla-extract/css";

export const formField = style({
  display: "grid",
  marginBottom: theme.space[2],
});

export const formLabel = style({
  color: theme.color.textSubtle,
  fontSize: theme.fontSize[3],
  fontWeight: theme.fontWeight.medium,
  lineHeight: theme.lineHeight[6],
});
