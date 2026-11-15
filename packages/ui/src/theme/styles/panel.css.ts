import { theme } from "@/theme/themes/theme-contract.css";
import { style } from "@vanilla-extract/css";

export const panel = style({
  backgroundColor: theme.color.container.secondary.background,
  borderWidth: theme.border.width.default,
  borderStyle: theme.border.style.default,
  borderColor: theme.color.container.secondary.borderColor,
  borderRadius: theme.radii[2],
});
