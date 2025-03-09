import { createThemeContract } from "@vanilla-extract/css";

// https://www.radix-ui.com/themes/docs/theme/typography#font-family
export const fontsContract = createThemeContract({
  text: null,
  code: null,
  emphasis: null,
  quote: null,
});
