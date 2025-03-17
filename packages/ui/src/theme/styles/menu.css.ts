import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { style } from "@vanilla-extract/css";

const baseMenuItem = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: theme.fontSizes[1],
  fontVariantNumeric: "tabular-nums",
  lineHeight: "1",
  cursor: "default",
  userSelect: "none",
  whiteSpace: "nowrap",
  height: theme.sizes[5],
  paddingLeft: theme.space[5],
  paddingRight: theme.space[5],
  borderRadius: theme.radii[1],
});

export const menuItem = style([
  baseMenuItem,
  {
    position: "relative",
    backgroundColor: "transparent",

    selectors: {
      "&:hover": {
        backgroundColor: theme.semanticColors.transparentHover,
      },

      "&[data-highlighted]": {
        outline: "none",
        backgroundColor: theme.semanticColors.transparentActive,
      },

      "&[data-disabled]": {
        color: theme.colors.slate.slate8,
        backgroundColor: theme.colors.slate.slate2,
        cursor: "not-allowed",
        pointerEvents: "none",
      },
    },
  },
]);

export const menuLabel = style([
  baseMenuItem,
  {
    position: "relative",
    color: theme.semanticColors.textSubtle,
  },
]);

export const menu = style({
  boxSizing: "border-box",
  minWidth: 120,
  padding: theme.space[1],
});

export const menuSeparator = style({
  height: 1,
  marginTop: theme.space[1],
  marginBottom: theme.space[1],
  backgroundColor: theme.semanticColors.line,
});
