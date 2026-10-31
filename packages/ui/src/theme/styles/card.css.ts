import { panel } from "@/theme/styles/panel.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { style } from "@vanilla-extract/css";

export const card = style([
  panel,
  {
    padding: `${theme.space[5]} ${theme.space[5]} ${theme.space[6]} ${theme.space[5]}`,
  },
]);
