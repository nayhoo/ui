import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { style } from "@vanilla-extract/css";

export const separator = style({
  backgroundColor: theme.semanticColors.line,

  selectors: {
    "&[data-orientation=horizontal]": {
      height: 1,
      width: "100%",
    },
    "&[data-orientation=vertical]": {
      height: "100%",
      width: 1,
    },
  },
});
