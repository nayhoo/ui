import { createThemeContract } from "@vanilla-extract/css";

// Combine the individual contracts into one
// based on the System UI Theme Specification https://github.com/system-ui/theme-specification?tab=readme-ov-file#key-reference
export const theme = createThemeContract({
  colors: {
    primary: {
      primary1: null,
      primary2: null,
      primary3: null,
      primary4: null,
      primary5: null,
      primary6: null,
      primary7: null,
      primary8: null,
      primary9: null,
      primary10: null,
      primary11: null,
      primary12: null,
    },
    primaryA: {
      primaryA1: null,
      primaryA2: null,
      primaryA3: null,
      primaryA4: null,
      primaryA5: null,
      primaryA6: null,
      primaryA7: null,
      primaryA8: null,
      primaryA9: null,
      primaryA10: null,
      primaryA11: null,
      primaryA12: null,
    },

    secondary: {
      secondary1: null,
      secondary2: null,
      secondary3: null,
      secondary4: null,
      secondary5: null,
      secondary6: null,
      secondary7: null,
      secondary8: null,
      secondary9: null,
      secondary10: null,
      secondary11: null,
      secondary12: null,
    },
    secondaryA: {
      secondaryA1: null,
      secondaryA2: null,
      secondaryA3: null,
      secondaryA4: null,
      secondaryA5: null,
      secondaryA6: null,
      secondaryA7: null,
      secondaryA8: null,
      secondaryA9: null,
      secondaryA10: null,
      secondaryA11: null,
      secondaryA12: null,
    },

    error: {
      error1: null,
      error2: null,
      error3: null,
      error4: null,
      error5: null,
      error6: null,
      error7: null,
      error8: null,
      error9: null,
      error10: null,
      error11: null,
      error12: null,
    },
    errorA: {
      errorA1: null,
      errorA2: null,
      errorA3: null,
      errorA4: null,
      errorA5: null,
      errorA6: null,
      errorA7: null,
      errorA8: null,
      errorA9: null,
      errorA10: null,
      errorA11: null,
      errorA12: null,
    },

    success: {
      success1: null,
      success2: null,
      success3: null,
      success4: null,
      success5: null,
      success6: null,
      success7: null,
      success8: null,
      success9: null,
      success10: null,
      success11: null,
      success12: null,
    },
    successA: {
      successA1: null,
      successA2: null,
      successA3: null,
      successA4: null,
      successA5: null,
      successA6: null,
      successA7: null,
      successA8: null,
      successA9: null,
      successA10: null,
      successA11: null,
      successA12: null,
    },

    // warning: ,
    // info: ,

    background: null,
    backgroundTextContrast: null,

    surface: null,
    surfaceTextContrast: null,

    transparentSurface: null,
    transparentSurfaceTextContrast: null,

    textSubtle: null,
    textPlaceholder: null,

    /** Dividers, outlines etc. */
    line: null,

    transparentHover: null,
    transparentActive: null,

    shadow: null,
  },
  // https://www.radix-ui.com/themes/docs/theme/typography#font-family
  fonts: {
    text: null,
    code: null,
    emphasis: null,
    quote: null,
  },
  // https://www.radix-ui.com/themes/docs/theme/typography#type-scale
  fontSizes: {
    1: null,
    2: null,
    /** Base font */
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
  },
  // https://www.radix-ui.com/themes/docs/theme/typography#font-weight
  fontWeights: {
    light: null,
    regular: null,
    medium: null,
    bold: null,
  },
  // https://www.radix-ui.com/themes/docs/theme/typography#type-scale
  letterSpacing: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
  },
  // https://www.radix-ui.com/themes/docs/theme/typography#type-scale
  lineHeights: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
  },
  // https://www.radix-ui.com/themes/docs/theme/radius
  radii: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    round: null,
    full: null,
  },
  // https://www.radix-ui.com/themes/docs/theme/shadows
  shadows: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
  },
  // https://www.radix-ui.com/themes/docs/theme/spacing
  sizes: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
  },
  //   todo: borders
  //   todo: borderWidths
  //   todo: borderStyles
  // https://www.radix-ui.com/themes/docs/theme/spacing
  space: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
  },
  //   todo: transitions
  zIndices: {
    /**
     * Tooltips
     * @examples Small hint overlays
     */
    1: null,
    /**
     * Dropdowns
     * @examples Dropdown menus, popovers
     */
    2: null,
    /**
     * Sticky elements
     * @examples Sticky sidebars, floating buttons
     */
    3: null,
    /**
     * Navigation
     * @examples Fixed/sticky nav-bars, headers
     */
    4: null,
    /**
     * Modals
     * @examples Modal dialogs, full overlays
     */
    5: null,
    /**
     * Notification
     * @examples Toasts
     */
    6: null,
    max: null,
  },
});
