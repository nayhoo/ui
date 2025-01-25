import { createThemeContract } from "@vanilla-extract/css";

// https://www.radix-ui.com/themes/docs/theme/typography#font-weight
export const fontWeightsContract = createThemeContract({
  light: null,
  regular: null,
  medium: null,
  bold: null,
});
