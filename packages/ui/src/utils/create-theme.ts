import { theme } from "@/theme/themes/theme-contract.css";
import type { SystemTheme } from "@/types/theme";
import { createGlobalTheme } from "@vanilla-extract/css";

const palette = {
  black: "rgb(0, 0, 0)",
  black5a: "rgba(0, 0, 0, 0.05)",
  black10a: "rgba(0, 0, 0, 0.1)",
  black15a: "rgba(0, 0, 0, 0.15)",
  black20a: "rgba(0, 0, 0, 0.2)",
  black30a: "rgba(0, 0, 0, 0.3)",
  black40a: "rgba(0, 0, 0, 0.4)",
  black50a: "rgba(0, 0, 0, 0.5)",
  black65a: "rgba(0, 0, 0, 0.65)",
  black80a: "rgba(0, 0, 0, 0.8)",
  white: "rgb(255, 255, 255)",
  white5a: "rgba(255, 255, 255, 0.05)",
  white10a: "rgba(255, 255, 255, 0.1)",
  white15a: "rgba(255, 255, 255, 0.15)",
  white20a: "rgba(255, 255, 255, 0.2)",
  white30a: "rgba(255, 255, 255, 0.3)",
  white40a: "rgba(255, 255, 255, 0.4)",
  white50a: "rgba(255, 255, 255, 0.5)",
  white65a: "rgba(255, 255, 255, 0.65)",
  white80a: "rgba(255, 255, 255, 0.8)",
  transparent: "transparent",
  neutral050: "#fafafa",
  neutral100: "#f5f5f5",
  neutral200: "#e5e5e5",
  neutral300: "#d4d4d4",
  neutral400: "#a3a3a3",
  neutral500: "#737373",
  neutral600: "#525252",
  neutral700: "#404040",
  neutral800: "#262626",
  neutral900: "#171717",
  neutral950: "#0a0a0a",
  brand050: "#f9faf9",
  brand100: "#f1f4f2",
  brand200: "#dee5e0",
  brand300: "#c4cfc8",
  brand400: "#94a599",
  brand500: "#6c8072",
  brand600: "#56675b",
  brand700: "#435147",
  brand800: "#313c35",
  brand900: "#222a24",
  brand950: "#101512",
  positive050: "#f0fdf4",
  positive100: "#dcfce7",
  positive200: "#bbf7d0",
  positive300: "#86efac",
  positive400: "#4ade80",
  positive500: "#22c55e",
  positive600: "#16a34a",
  positive700: "#15803d",
  positive800: "#166534",
  positive900: "#14532d",
  positive950: "#052e16",
  caution050: "#fff7ed",
  caution100: "#ffedd5",
  caution200: "#fed7aa",
  caution300: "#fdba74",
  caution400: "#fb923c",
  caution500: "#f97316",
  caution600: "#ea580c",
  caution700: "#c2410c",
  caution800: "#9a3412",
  caution900: "#7c2d12",
  caution950: "#431407",
  negative050: "#fef2f2",
  negative100: "#fee2e2",
  negative200: "#fecaca",
  negative300: "#fca5a5",
  negative400: "#f87171",
  negative500: "#ef4444",
  negative600: "#dc2626",
  negative700: "#b91c1c",
  negative800: "#991b1b",
  negative900: "#7f1d1d",
  negative950: "#450a0a",
};

const { color, shadow } = theme;

export const createTheme = (mode: SystemTheme) => {
  createGlobalTheme(
    `[data-theme="${mode}"]`,
    {
      color,
      shadow,
    },
    {
      ...t[mode],
    },
  );
};

const t = {
  light: {
    color: {
      actionable: {
        accented: {
          solid: {
            background: {
              initial: palette.brand500,
              active: palette.brand200,
              hover: `linear-gradient(${palette.black15a},${palette.black15a}) ${palette.brand500}`,
            },
            borderColor: {
              initial: palette.brand500,
              active: palette.brand500,
              hover: palette.black30a,
            },
            foreground: {
              initial: palette.white,
              active: palette.black,
              hover: palette.white,
            },
          },
          bordered: {
            background: {
              initial: palette.transparent,
              active: palette.brand200,
              hover: palette.brand100,
            },
            borderColor: {
              initial: palette.brand500,
              active: palette.brand500,
              hover: palette.brand500,
            },
            foreground: {
              initial: palette.brand600,
              active: palette.black,
              hover: palette.brand700,
            },
          },
          ghost: {
            background: {
              initial: palette.transparent,
              active: palette.black15a,
              hover: palette.black10a,
            },
            borderColor: {
              initial: palette.transparent,
              active: palette.transparent,
              hover: palette.transparent,
            },
            foreground: {
              initial: palette.brand600,
              active: palette.black,
              hover: palette.brand700,
            },
          },
        },
        neutral: {
          solid: {
            background: {
              initial: palette.neutral500,
              active: palette.neutral200,
              hover: `linear-gradient(${palette.black15a},${palette.black15a}) ${palette.neutral500}`,
            },
            borderColor: {
              initial: palette.neutral500,
              active: palette.neutral500,
              hover: palette.black30a,
            },
            foreground: {
              initial: palette.white,
              active: palette.black,
              hover: palette.white,
            },
          },
          bordered: {
            background: {
              initial: palette.transparent,
              active: palette.neutral200,
              hover: palette.neutral100,
            },
            borderColor: {
              initial: palette.neutral500,
              active: palette.neutral500,
              hover: palette.neutral500,
            },
            foreground: {
              initial: palette.neutral600,
              active: palette.black,
              hover: palette.neutral700,
            },
          },
          ghost: {
            background: {
              initial: palette.transparent,
              active: palette.black15a,
              hover: palette.black10a,
            },
            borderColor: {
              initial: palette.transparent,
              active: palette.transparent,
              hover: palette.transparent,
            },
            foreground: {
              initial: palette.neutral600,
              active: palette.black,
              hover: palette.neutral700,
            },
          },
        },
        caution: {
          solid: {
            background: {
              initial: palette.caution500,
              active: palette.caution200,
              hover: `linear-gradient(${palette.black15a},${palette.black15a}) ${palette.caution500}`,
            },
            borderColor: {
              initial: palette.caution500,
              active: palette.caution500,
              hover: palette.black30a,
            },
            foreground: {
              initial: palette.white,
              active: palette.black,
              hover: palette.white,
            },
          },
          bordered: {
            background: {
              initial: palette.transparent,
              active: palette.caution200,
              hover: palette.caution100,
            },
            borderColor: {
              initial: palette.caution500,
              active: palette.caution500,
              hover: palette.caution500,
            },
            foreground: {
              initial: palette.caution600,
              active: palette.black,
              hover: palette.caution700,
            },
          },
          ghost: {
            background: {
              initial: palette.transparent,
              active: palette.black15a,
              hover: palette.black10a,
            },
            borderColor: {
              initial: palette.transparent,
              active: palette.transparent,
              hover: palette.transparent,
            },
            foreground: {
              initial: palette.caution600,
              active: palette.black,
              hover: palette.caution700,
            },
          },
        },
        negative: {
          solid: {
            background: {
              initial: palette.negative500,
              active: palette.negative200,
              hover: `linear-gradient(${palette.black15a},${palette.black15a}) ${palette.negative500}`,
            },
            borderColor: {
              initial: palette.negative500,
              active: palette.negative500,
              hover: palette.black30a,
            },
            foreground: {
              initial: palette.white,
              active: palette.black,
              hover: palette.white,
            },
          },
          bordered: {
            background: {
              initial: palette.transparent,
              active: palette.negative200,
              hover: palette.negative100,
            },
            borderColor: {
              initial: palette.negative500,
              active: palette.negative500,
              hover: palette.negative500,
            },
            foreground: {
              initial: palette.negative600,
              active: palette.black,
              hover: palette.negative700,
            },
          },
          ghost: {
            background: {
              initial: palette.transparent,
              active: palette.black15a,
              hover: palette.black10a,
            },
            borderColor: {
              initial: palette.transparent,
              active: palette.transparent,
              hover: palette.transparent,
            },
            foreground: {
              initial: palette.negative600,
              active: palette.black,
              hover: palette.negative700,
            },
          },
        },
        positive: {
          solid: {
            background: {
              initial: palette.positive500,
              active: palette.positive200,
              hover: `linear-gradient(${palette.black15a},${palette.black15a}) ${palette.positive500}`,
            },
            borderColor: {
              initial: palette.positive500,
              active: palette.positive500,
              hover: palette.black30a,
            },
            foreground: {
              initial: palette.white,
              active: palette.black,
              hover: palette.white,
            },
          },
          bordered: {
            background: {
              initial: palette.transparent,
              active: palette.positive200,
              hover: palette.positive100,
            },
            borderColor: {
              initial: palette.positive500,
              active: palette.positive500,
              hover: palette.positive500,
            },
            foreground: {
              initial: palette.positive600,
              active: palette.black,
              hover: palette.positive700,
            },
          },
          ghost: {
            background: {
              initial: palette.transparent,
              active: palette.black15a,
              hover: palette.black10a,
            },
            borderColor: {
              initial: palette.transparent,
              active: palette.transparent,
              hover: palette.transparent,
            },
            foreground: {
              initial: palette.positive600,
              active: palette.black,
              hover: palette.positive700,
            },
          },
        },
      },

      content: {
        primary: {
          foreground: palette.black,
          disabled: palette.black40a,
        },
        subtle: {
          foreground: palette.neutral700,
          disabled: "rgba(64, 64, 64, 0.4)", // neutral700a40
        },
        accent: {
          foreground: palette.brand600,
        },
        visited: {
          foreground: "#6b21a8", // purple800
        },
        onSolid: {
          foreground: palette.white,
        },
        error: {
          foreground: palette.negative600,
        },
      },

      selectable: {
        background: {
          selected: palette.brand200,
        },
        borderColor: {
          selected: palette.brand500,
        },
        foreground: {
          selected: palette.brand500,
        },
      },

      background: {
        surface: {
          default: palette.neutral050,
          raised: palette.neutral100,
          overlay: palette.neutral100,
        },
      },

      border: {
        default: palette.black30a,
        focused: "#3b82f6", // blue500
      },
    },

    shadow: {
      1: "0 1px 3px 0 rgba(0,0,0,0.1)",
      2: "0 2px 4px 0 rgba(0,0,0,0.1)",
      3: "0 4px 8px 0 rgba(0,0,0,0.15)",
      4: "0 6px 10px 0 rgba(0,0,0,0.2)",
      5: "0 12px 40px 0 rgba(0,0,0,0.3)",
    },
  },
  dark: {
    color: {
      actionable: {
        accented: {
          solid: {
            background: {
              initial: palette.brand500,
              active: palette.brand800,
              hover: `linear-gradient(${palette.black15a},${palette.black15a}) ${palette.brand500}`,
            },
            borderColor: {
              initial: palette.brand500,
              active: palette.brand500,
              hover: palette.white30a,
            },
            foreground: {
              initial: palette.white,
              active: palette.white,
              hover: palette.white,
            },
          },
          bordered: {
            background: {
              initial: palette.transparent,
              active: palette.brand800,
              hover: palette.brand900,
            },
            borderColor: {
              initial: palette.brand500,
              active: palette.brand500,
              hover: palette.brand500,
            },
            foreground: {
              initial: palette.brand400,
              active: palette.white,
              hover: palette.brand300,
            },
          },
          ghost: {
            background: {
              initial: palette.transparent,
              active: palette.white15a,
              hover: palette.white10a,
            },
            borderColor: {
              initial: palette.transparent,
              active: palette.transparent,
              hover: palette.transparent,
            },
            foreground: {
              initial: palette.brand400,
              active: palette.white,
              hover: palette.brand300,
            },
          },
        },
        neutral: {
          solid: {
            background: {
              initial: palette.neutral500,
              active: palette.neutral800,
              hover: `linear-gradient(${palette.black15a},${palette.black15a}) ${palette.neutral500}`,
            },
            borderColor: {
              initial: palette.neutral500,
              active: palette.neutral500,
              hover: palette.white30a,
            },
            foreground: {
              initial: palette.white,
              active: palette.white,
              hover: palette.white,
            },
          },
          bordered: {
            background: {
              initial: palette.transparent,
              active: palette.neutral800,
              hover: palette.neutral900,
            },
            borderColor: {
              initial: palette.neutral500,
              active: palette.neutral500,
              hover: palette.neutral500,
            },
            foreground: {
              initial: palette.neutral400,
              active: palette.white,
              hover: palette.neutral300,
            },
          },
          ghost: {
            background: {
              initial: palette.transparent,
              active: palette.white15a,
              hover: palette.white10a,
            },
            borderColor: {
              initial: palette.transparent,
              active: palette.transparent,
              hover: palette.transparent,
            },
            foreground: {
              initial: palette.neutral400,
              active: palette.white,
              hover: palette.neutral300,
            },
          },
        },
        caution: {
          solid: {
            background: {
              initial: palette.caution500,
              active: palette.caution800,
              hover: `linear-gradient(${palette.black15a},${palette.black15a}) ${palette.caution500}`,
            },
            borderColor: {
              initial: palette.caution500,
              active: palette.caution500,
              hover: palette.white30a,
            },
            foreground: {
              initial: palette.white,
              active: palette.white,
              hover: palette.white,
            },
          },
          bordered: {
            background: {
              initial: palette.transparent,
              active: palette.caution800,
              hover: palette.caution900,
            },
            borderColor: {
              initial: palette.caution500,
              active: palette.caution500,
              hover: palette.caution500,
            },
            foreground: {
              initial: palette.caution400,
              active: palette.white,
              hover: palette.caution300,
            },
          },
          ghost: {
            background: {
              initial: palette.transparent,
              active: palette.white15a,
              hover: palette.white10a,
            },
            borderColor: {
              initial: palette.transparent,
              active: palette.transparent,
              hover: palette.transparent,
            },
            foreground: {
              initial: palette.caution400,
              active: palette.white,
              hover: palette.caution300,
            },
          },
        },
        negative: {
          solid: {
            background: {
              initial: palette.negative500,
              active: palette.negative800,
              hover: `linear-gradient(${palette.black15a},${palette.black15a}) ${palette.negative500}`,
            },
            borderColor: {
              initial: palette.negative500,
              active: palette.negative500,
              hover: palette.white30a,
            },
            foreground: {
              initial: palette.white,
              active: palette.white,
              hover: palette.white,
            },
          },
          bordered: {
            background: {
              initial: palette.transparent,
              active: palette.negative800,
              hover: palette.negative900,
            },
            borderColor: {
              initial: palette.negative500,
              active: palette.negative500,
              hover: palette.negative500,
            },
            foreground: {
              initial: palette.negative400,
              active: palette.white,
              hover: palette.negative300,
            },
          },
          ghost: {
            background: {
              initial: palette.transparent,
              active: palette.white15a,
              hover: palette.white10a,
            },
            borderColor: {
              initial: palette.transparent,
              active: palette.transparent,
              hover: palette.transparent,
            },
            foreground: {
              initial: palette.negative400,
              active: palette.white,
              hover: palette.negative300,
            },
          },
        },
        positive: {
          solid: {
            background: {
              initial: palette.positive500,
              active: palette.positive800,
              hover: `linear-gradient(${palette.black15a},${palette.black15a}) ${palette.positive500}`,
            },
            borderColor: {
              initial: palette.positive500,
              active: palette.positive500,
              hover: palette.white30a,
            },
            foreground: {
              initial: palette.white,
              active: palette.white,
              hover: palette.white,
            },
          },
          bordered: {
            background: {
              initial: palette.transparent,
              active: palette.positive800,
              hover: palette.positive900,
            },
            borderColor: {
              initial: palette.positive500,
              active: palette.positive500,
              hover: palette.positive500,
            },
            foreground: {
              initial: palette.positive400,
              active: palette.white,
              hover: palette.positive300,
            },
          },
          ghost: {
            background: {
              initial: palette.transparent,
              active: palette.white15a,
              hover: palette.white10a,
            },
            borderColor: {
              initial: palette.transparent,
              active: palette.transparent,
              hover: palette.transparent,
            },
            foreground: {
              initial: palette.positive400,
              active: palette.white,
              hover: palette.positive300,
            },
          },
        },
      },

      content: {
        primary: {
          foreground: palette.white,
          disabled: palette.white40a,
        },
        subtle: {
          foreground: palette.neutral300,
          disabled: "rgba(212, 212, 212, 0.4)", // neutral300a40
        },
        accent: {
          foreground: palette.brand400,
        },
        visited: {
          foreground: "#e9d5ff", // purple200
        },
        onSolid: {
          foreground: palette.white,
        },
        error: {
          foreground: palette.negative400,
        },
      },

      selectable: {
        background: {
          selected: palette.brand800,
        },
        borderColor: {
          selected: palette.brand500,
        },
        foreground: {
          selected: palette.brand500,
        },
      },

      background: {
        surface: {
          default: palette.neutral950,
          raised: palette.neutral900,
          overlay: palette.neutral900,
        },
      },

      border: {
        default: palette.white30a,
        focused: "#3b82f6", // blue500
      },
    },

    shadow: {
      1: "0 1px 3px 0 rgba(0,0,0,0.5)",
      2: "0 2px 4px 0 rgba(0,0,0,0.5)",
      3: "0 4px 8px 0 rgba(0,0,0,0.55)",
      4: "0 6px 10px 0 rgba(0,0,0,0.55)",
      5: "0 12px 40px 0 rgba(0,0,0,0.65)",
    },
  },
};
