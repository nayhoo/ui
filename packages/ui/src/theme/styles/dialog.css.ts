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
  zIndex: theme.zIndices[5],
});

export const dialogHeader = style({
  backgroundColor: theme.semanticColors.surface,
  padding: `${theme.space[2]} ${theme.space[2]}`,
  position: "sticky",
  top: 0,
  zIndex: theme.zIndices[5],
});

export const dialogOverlay = style({
  backgroundColor: `color-mix(in srgb, ${theme.semanticColors.background}, transparent 40%)`,
  bottom: 0,
  left: 0,
  position: "fixed",
  right: 0,
  top: 0,

  transition: "backdrop-filter 100ms linear",
  willChange: "backdrop-filter",

  zIndex: theme.zIndices[5],
});
