import { colorsContract } from "@/theme-contracts/colors-contract.css";
import { fontSizesContract } from "@/theme-contracts/font-sizes-contract.css";
import { fontWeightsContract } from "@/theme-contracts/font-weights-contract.css";
import { fontsContract } from "@/theme-contracts/fonts-contract.css";
import { letterSpacingContract } from "@/theme-contracts/letter-spacing-contract.css";
import { lineHeightsContract } from "@/theme-contracts/line-heights-contract.css";
import { radiiContract } from "@/theme-contracts/radii-contract.css";
import { semanticColorsContract } from "@/theme-contracts/semantic-colors-contract.css";
import { shadowsContract } from "@/theme-contracts/shadows-contract.css";
import { sizesContract } from "@/theme-contracts/sizes-contract.css";
import { spaceContract } from "@/theme-contracts/space-contract.css";
import { zIndicesContract } from "@/theme-contracts/z-indices-contract.css";
import { createThemeContract } from "@vanilla-extract/css";

// Combine the individual contracts into one
// based on the System UI Theme Specification https://github.com/system-ui/theme-specification?tab=readme-ov-file#key-reference
export const theme = createThemeContract({
  space: spaceContract,
  fontSizes: fontSizesContract,
  colors: colorsContract,
  semanticColors: semanticColorsContract,
  fonts: fontsContract,
  fontWeights: fontWeightsContract,
  lineHeights: lineHeightsContract,
  letterSpacing: letterSpacingContract,
  sizes: sizesContract,
  //   todo: borders
  //   todo: borderWidths
  //   todo: borderStyles
  radii: radiiContract,
  shadows: shadowsContract,
  zIndices: zIndicesContract,
  //   todo: transitions
});
