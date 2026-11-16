import { theme } from "@/theme/themes/theme-contract.css";
import { style } from "@vanilla-extract/css";

export const card = style({
  backgroundColor: theme.color.background.surface.raised,
  borderWidth: theme.border.width.default,
  borderStyle: theme.border.style.default,
  borderColor: theme.color.border.default,
  borderRadius: theme.radii[2],
  padding: `${theme.space[2]} ${theme.space[2]} ${theme.space[3]} ${theme.space[2]}`,
});
