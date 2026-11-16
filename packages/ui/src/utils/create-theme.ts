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
      background: {
        surface: {
          default: palette.neutral050,
          raised: palette.neutral100,
          overlay: palette.neutral100,
        },
        brand: {
          default: palette.brand500,
          hovered: palette.brand100,
          pressed: palette.brand200,
        },
        neutral: {
          default: palette.neutral500,
          hovered: palette.neutral100,
          pressed: palette.neutral200,
        },
        positive: {
          default: palette.positive500,
          hovered: palette.positive100,
          pressed: palette.positive200,
        },
        caution: {
          default: palette.caution500,
          hovered: palette.caution100,
          pressed: palette.caution200,
        },
        negative: {
          default: palette.negative500,
          hovered: palette.negative100,
          pressed: palette.negative200,
        },
        ghost: {
          default: palette.transparent,
          hovered: palette.black15a,
          pressed: palette.black10a,
        },
      },

      border: {
        default: palette.black30a,
        focused: "#3b82f6", // blue500
        brand: palette.brand500,
        neutral: palette.neutral500,
        positive: palette.positive500,
        caution: palette.caution500,
        negative: palette.negative500,
        ghost: palette.transparent,
      },

      text: {
        default: palette.black,
        subtle: palette.neutral700,
        disabled: palette.black40a,
        visited: "#6b21a8", // purple800
        onSolid: palette.white,
        brand: {
          default: palette.brand600,
          hovered: palette.brand700,
        },
        neutral: {
          default: palette.neutral600,
          hovered: palette.neutral700,
        },
        positive: {
          default: palette.positive600,
          hovered: palette.positive700,
        },
        caution: {
          default: palette.caution600,
          hovered: palette.caution700,
        },
        negative: {
          default: palette.negative600,
          hovered: palette.negative700,
        },
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
      background: {
        surface: {
          default: palette.neutral950,
          raised: palette.neutral900,
          overlay: palette.neutral900,
        },
        brand: {
          default: palette.brand500,
          hovered: palette.brand800,
          pressed: palette.brand900,
        },
        neutral: {
          default: palette.neutral500,
          hovered: palette.neutral800,
          pressed: palette.neutral900,
        },
        positive: {
          default: palette.positive500,
          hovered: palette.positive800,
          pressed: palette.positive900,
        },
        caution: {
          default: palette.caution500,
          hovered: palette.caution800,
          pressed: palette.caution900,
        },
        negative: {
          default: palette.negative500,
          hovered: palette.negative800,
          pressed: palette.negative900,
        },
        ghost: {
          default: palette.transparent,
          hovered: palette.white15a,
          pressed: palette.white10a,
        },
      },

      border: {
        default: palette.white30a,
        focused: "#3b82f6", // blue500
        brand: palette.brand500,
        neutral: palette.neutral500,
        positive: palette.positive500,
        caution: palette.caution500,
        negative: palette.negative500,
        ghost: palette.transparent,
      },

      text: {
        default: palette.white,
        subtle: palette.neutral300,
        disabled: palette.white40a,
        visited: "#e9d5ff", // purple200
        onSolid: palette.white,
        brand: {
          default: palette.brand400,
          hovered: palette.brand300,
        },
        neutral: {
          default: palette.neutral400,
          hovered: palette.neutral300,
        },
        positive: {
          default: palette.positive400,
          hovered: palette.positive300,
        },
        caution: {
          default: palette.caution400,
          hovered: palette.caution300,
        },
        negative: {
          default: palette.negative400,
          hovered: palette.negative300,
        },
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
