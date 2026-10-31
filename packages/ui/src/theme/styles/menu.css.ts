import { theme } from "@/theme/themes/theme-contract.css";
import * as colors from "@radix-ui/colors";
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
        backgroundColor: theme.colors.transparentHover,
      },

      "&[data-highlighted]": {
        outline: "none",
        backgroundColor: theme.colors.transparentActive,
      },

      "&[data-disabled]": {
        color: colors.slate.slate8,
        backgroundColor: colors.slate.slate2,
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
    color: theme.colors.textSubtle,
  },
]);

export const menu = style({
  boxSizing: "border-box",
  minWidth: 120,
  padding: theme.space[1],
  zIndex: theme.zIndices[2],
});

export const menuSeparator = style({
  height: 1,
  marginTop: theme.space[1],
  marginBottom: theme.space[1],
  backgroundColor: theme.colors.line,
});
