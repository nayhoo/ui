import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { style } from "@vanilla-extract/css";

export const dialogDescription = style({
  color: theme.semanticColors.textSubtle,
  fontSize: theme.fontSizes[3],
  marginBottom: theme.space[4],
});

export const dialogFooter = style({
  backgroundColor: theme.semanticColors.surface,
  borderTop: `1px solid ${theme.semanticColors.line}`,
  bottom: 0,
  padding: `${theme.space[2]} ${theme.space[2]}`,
  position: "sticky",
  zIndex: theme.zIndices.max,
});

export const dialogHeader = style({
  backgroundColor: theme.semanticColors.surface,
  padding: `${theme.space[1]} ${theme.space[2]}`,
  position: "sticky",
  top: 0,
  zIndex: theme.zIndices.max,
});

export const dialogTitle = style({
  marginBottom: theme.space[4],
});
