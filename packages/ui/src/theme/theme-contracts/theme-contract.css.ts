import { createThemeContract } from "@vanilla-extract/css";
import { colorsContract } from "./colors-contract.css";
import { fontSizesContract } from "./font-sizes-contract.css";
import { fontWeightsContract } from "./font-weights-contract.css";
import { fontsContract } from "./fonts-contract.css";
import { letterSpacingContract } from "./letter-spacing-contract.css";
import { lineHeightsContract } from "./line-heights-contract.css";
import { radiiContract } from "./radii-contract.css";
import { semanticColorsContract } from "./semantic-colors-contract.css";
import { shadowsContract } from "./shadows-contract.css";
import { sizesContract } from "./sizes-contract.css";
import { spaceContract } from "./space-contract.css";
import { zIndicesContract } from "./z-indices-contract.css";

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
