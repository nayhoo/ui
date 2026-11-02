import { theme } from "@/theme/themes/theme-contract.css";
import { style } from "@vanilla-extract/css";

export const dialogDescription = style({
  color: theme.color.textSubtle,
  fontSize: theme.fontSize[3],
  marginBottom: theme.space[4],
});

export const dialogFooter = style({
  backgroundColor: theme.color.surface,
  borderTop: `1px solid ${theme.color.line}`,
  bottom: 0,
  padding: `${theme.space[2]} ${theme.space[2]}`,
  position: "sticky",
  zIndex: theme.zIndex[5],
});

export const dialogHeader = style({
  backgroundColor: theme.color.surface,
  padding: `${theme.space[2]} ${theme.space[2]}`,
  position: "sticky",
  top: 0,
  zIndex: theme.zIndex[5],
});

export const dialogOverlay = style({
  backgroundColor: `color-mix(in srgb, ${theme.color.background}, transparent 40%)`,
  bottom: 0,
  left: 0,
  position: "fixed",
  right: 0,
  top: 0,

  transition: "backdrop-filter 100ms linear",
  willChange: "backdrop-filter",

  zIndex: theme.zIndex[5],
});
