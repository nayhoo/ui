import { createThemeContract } from "@vanilla-extract/css";

export const theme = createThemeContract({
  border: {
    style: {
      default: null,
      focused: null,
      selected: null,
    },
    width: {
      default: null,
      focused: null,
      selected: null,
    },
  },
  color: {
    background: {
      surface: {
        /** primary background */
        default: null,
        /** cards */
        raised: null,
        /** dialogs, dropdown menus, toasts etc. */
        overlay: null,
      },
      brand: {
        default: null,
        hovered: null,
        pressed: null,
      },
      neutral: {
        default: null,
        hovered: null,
        pressed: null,
      },
      positive: {
        default: null,
        hovered: null,
        pressed: null,
      },
      caution: {
        default: null,
        hovered: null,
        pressed: null,
      },
      negative: {
        default: null,
        hovered: null,
        pressed: null,
      },
      ghost: {
        default: null,
        hovered: null,
        pressed: null,
      },
    },

    border: {
      default: null,
      focused: null,
      brand: null,
      neutral: null,
      positive: null,
      caution: null,
      negative: null,
      ghost: null,
    },

    text: {
      default: null,
      subtle: null,
      disabled: null,
      visited: null,
      /** used on top of "solid" variant elements */
      onSolid: null,
      brand: {
        default: null,
        hovered: null,
      },
      neutral: {
        default: null,
        hovered: null,
      },
      positive: {
        default: null,
        hovered: null,
      },
      caution: {
        default: null,
        hovered: null,
      },
      negative: {
        default: null,
        hovered: null,
      },
    },
  },
  // https://www.radix-ui.com/themes/docs/theme/typography#font-family
  fontFamily: {
    text: null,
    code: null,
    emphasis: null,
    quote: null,
  },
  // https://www.radix-ui.com/themes/docs/theme/typography#type-scale
  fontSize: {
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
  fontWeight: {
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
  lineHeight: {
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
  shadow: {
    /** scroll */
    1: null,
    /** default, region */
    2: null,
    /** hover */
    3: null,
    /** drag, popout */
    4: null,
    /** modal */
    5: null,
  },
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
  //   todo: transition
  zIndex: {
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
