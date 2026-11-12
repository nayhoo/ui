import { createThemeContract } from "@vanilla-extract/css";

// Combine the individual contracts into one
// based on the System UI Theme Specification https://github.com/system-ui/theme-specification?tab=readme-ov-file#key-reference
export const theme = createThemeContract({
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

    container: {
      primary: {
        background: null,
      },
      secondary: {
        background: null,
        borderColor: null,
      },
    },

    content: {
      primary: {
        foreground: null,
        disabled: null,
      },
      subtle: {
        foreground: null,
        disabled: null,
      },
      accent: {
        foreground: null,
      },
      visited: {
        foreground: null,
      },
      // onSolid: {
      //   foreground: null,
      // },
      error: {
        foreground: null,
      },
    },

    focused: {
      // onSolid: {
      //   outlineColor: null,
      // },
      outlineColor: null,
      outlineOffset: null,
      outlineStyle: null,
      outlineWidth: null,
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

    separable: {
      primary: {
        borderColor: null,
      },
      secondary: {
        borderColor: null,
      },
      tertiary: {
        borderColor: null,
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
  //   todo: border
  //   todo: borderWidth
  //   todo: borderStyle
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
