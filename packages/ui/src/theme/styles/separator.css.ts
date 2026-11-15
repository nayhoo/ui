import { theme } from "@/theme/themes/theme-contract.css";
import { style } from "@vanilla-extract/css";

export const separator = style({
  backgroundColor: theme.color.border.default,
  selectors: {
    "&[data-orientation=horizontal]": {
      height: theme.border.width.default,
      width: "100%",
    },
    "&[data-orientation=vertical]": {
      height: "100%",
      width: theme.border.width.default,
    },
  },
});
