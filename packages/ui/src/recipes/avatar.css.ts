import { theme } from "@/theme-contracts/theme-contract.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const avatarRecipe = recipe({
  base: {
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
    overflow: "hidden",
    userSelect: "none",
    boxSizing: "border-box",
    display: "flex",
    flexShrink: 0,
    position: "relative",
    border: "none",
    fontFamily: "inherit",
    lineHeight: "1",
    margin: "0",
    outline: "none",
    padding: "0",
    fontWeight: theme.fontWeights.medium,
    color: theme.semanticColors.surfaceTextContrast,

    backgroundColor: theme.semanticColors.surface,

    selectors: {
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: "inherit",
        boxShadow: `inset 0px 0px 1px ${theme.semanticColors.line}`,
      },
    },
  },

  variants: {
    size: {
      "1": {
        height: theme.sizes[3],
        width: theme.sizes[3],
      },
      "2": {
        height: theme.sizes[5],
        width: theme.sizes[5],
      },
      "3": {
        height: theme.sizes[6],
        width: theme.sizes[6],
      },
      "4": {
        height: theme.sizes[7],
        width: theme.sizes[7],
      },
      "5": {
        height: theme.sizes[8],
        width: theme.sizes[8],
      },
      "6": {
        height: theme.sizes[9],
        width: theme.sizes[9],
      },
    },
    shape: {
      square: {
        borderRadius: theme.radii[2],
      },
      circle: {
        borderRadius: "50%",
      },
    },
    inactive: {
      true: {
        opacity: ".3",
      },
    },
    interactive: {
      true: {
        selectors: {
          "&::after": {
            content: '""',
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            backgroundColor: "rgba(0, 0, 0, 0.08)",
            opacity: "0",
            pointerEvents: "none",
            transition: "opacity 100ms linear",
          },
          "&:hover": {
            // "&::after": {
            //   opacity: "1",
            // },
          },
          '&[data-state="open"]': {
            // "&::after": {
            //   backgroundColor: "rgba(0, 0, 0, 0.12)",
            //   opacity: "1",
            // },
          },
        },
      },
    },
  },
  defaultVariants: {
    shape: "circle",
    size: "3",
  },
});

export type AvatarVariants = NonNullable<RecipeVariants<typeof avatarRecipe>>;

export const avatarImageRecipe = recipe({
  base: {
    display: "flex",
    objectFit: "cover",
    boxSizing: "border-box",
    height: "100%",
    verticalAlign: "middle",
    width: "100%",
  },

  variants: {},
  defaultVariants: {},
});

export type AvatarImageVariants = NonNullable<RecipeVariants<typeof avatarImageRecipe>>;

export const avatarFallbackRecipe = recipe({
  base: {
    textTransform: "uppercase",
  },

  variants: {
    size: {
      "1": {
        fontSize: "10px",
        lineHeight: "15px",
      },
      "2": {
        fontSize: theme.fontSizes[3],
      },
      "3": {
        fontSize: theme.fontSizes[6],
      },
      "4": {
        fontSize: theme.fontSizes[7],
      },
      "5": {
        fontSize: theme.fontSizes[8],
      },
      "6": {
        fontSize: theme.fontSizes[9],
      },
    },
  },
  defaultVariants: {
    size: "2",
  },
});

export type AvatarFallbackVariants = NonNullable<RecipeVariants<typeof avatarFallbackRecipe>>;
