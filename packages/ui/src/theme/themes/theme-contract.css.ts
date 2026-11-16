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
    actionable: {
      accented: {
        solid: {
          background: {
            initial: null,
            active: null,
            hover: null,
          },
          borderColor: {
            initial: null,
            active: null,
            hover: null,
          },
          foreground: {
            initial: null,
            active: null,
            hover: null,
          },
        },
        bordered: {
          background: {
            initial: null,
            active: null,
            hover: null,
          },
          borderColor: {
            initial: null,
            active: null,
            hover: null,
          },
          foreground: {
            initial: null,
            active: null,
            hover: null,
          },
        },
        ghost: {
          background: {
            initial: null,
            active: null,
            hover: null,
          },
          borderColor: {
            initial: null,
            active: null,
            hover: null,
          },
          foreground: {
            initial: null,
            active: null,
            hover: null,
          },
        },
      },
      neutral: {
        solid: {
          background: {
            initial: null,
            active: null,
            hover: null,
          },
          borderColor: {
            initial: null,
            active: null,
            hover: null,
          },
          foreground: {
            initial: null,
            active: null,
            hover: null,
          },
        },
        bordered: {
          background: {
            initial: null,
            active: null,
            hover: null,
          },
          borderColor: {
            initial: null,
            active: null,
            hover: null,
          },
          foreground: {
            initial: null,
            active: null,
            hover: null,
          },
        },
        ghost: {
          background: {
            initial: null,
            active: null,
            hover: null,
          },
          borderColor: {
            initial: null,
            active: null,
            hover: null,
          },
          foreground: {
            initial: null,
            active: null,
            hover: null,
          },
        },
      },
      caution: {
        solid: {
          background: {
            initial: null,
            active: null,
            hover: null,
          },
          borderColor: {
            initial: null,
            active: null,
            hover: null,
          },
          foreground: {
            initial: null,
            active: null,
            hover: null,
          },
        },
        bordered: {
          background: {
            initial: null,
            active: null,
            hover: null,
          },
          borderColor: {
            initial: null,
            active: null,
            hover: null,
          },
          foreground: {
            initial: null,
            active: null,
            hover: null,
          },
        },
        ghost: {
          background: {
            initial: null,
            active: null,
            hover: null,
          },
          borderColor: {
            initial: null,
            active: null,
            hover: null,
          },
          foreground: {
            initial: null,
            active: null,
            hover: null,
          },
        },
      },
      negative: {
        solid: {
          background: {
            initial: null,
            active: null,
            hover: null,
          },
          borderColor: {
            initial: null,
            active: null,
            hover: null,
          },
          foreground: {
            initial: null,
            active: null,
            hover: null,
          },
        },
        bordered: {
          background: {
            initial: null,
            active: null,
            hover: null,
          },
          borderColor: {
            initial: null,
            active: null,
            hover: null,
          },
          foreground: {
            initial: null,
            active: null,
            hover: null,
          },
        },
        ghost: {
          background: {
            initial: null,
            active: null,
            hover: null,
          },
          borderColor: {
            initial: null,
            active: null,
            hover: null,
          },
          foreground: {
            initial: null,
            active: null,
            hover: null,
          },
        },
      },
      positive: {
        solid: {
          background: {
            initial: null,
            active: null,
            hover: null,
          },
          borderColor: {
            initial: null,
            active: null,
            hover: null,
          },
          foreground: {
            initial: null,
            active: null,
            hover: null,
          },
        },
        bordered: {
          background: {
            initial: null,
            active: null,
            hover: null,
          },
          borderColor: {
            initial: null,
            active: null,
            hover: null,
          },
          foreground: {
            initial: null,
            active: null,
            hover: null,
          },
        },
        ghost: {
          background: {
            initial: null,
            active: null,
            hover: null,
          },
          borderColor: {
            initial: null,
            active: null,
            hover: null,
          },
          foreground: {
            initial: null,
            active: null,
            hover: null,
          },
        },
      },
    },

    selectable: {
      background: {
        selected: null,
      },
      borderColor: {
        selected: null,
      },
      foreground: {
        selected: null,
      },
    },

    background: {
      surface: {
        /** primary background */
        default: null,
        /** cards */
        raised: null,
        /** dialogs, dropdown menus, toasts etc. */
        overlay: null,
      },
    },

    border: {
      default: null,
      focused: null,
    },

    text: {
      default: null,
      subtle: null,
      disabled: null,
      visited: null,
      /** used on top of "solid" variant elements */
      onSolid: null,
      brand: null,
      positive: null,
      caution: null,
      negative: null,
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
