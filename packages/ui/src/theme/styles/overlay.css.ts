import { theme } from "@/theme/themes/theme-contract.css";
import { style } from "@vanilla-extract/css";

export const overlay = style({
  backgroundColor: theme.color.background.surface.overlay,
  borderWidth: theme.border.width.default,
  borderStyle: theme.border.style.default,
  borderColor: theme.color.border.default,
  borderRadius: theme.radii[2],
});
