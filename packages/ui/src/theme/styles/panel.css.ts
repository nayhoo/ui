import { theme } from "@/theme/themes/theme-contract.css";
import { style } from "@vanilla-extract/css";

export const panel = style({
  backgroundColor: theme.color.container.secondary.background,

  borderColor: theme.color.container.secondary.borderColor,
  borderRadius: theme.radii[2],
  borderStyle: "solid",
  borderWidth: "1px",
});
