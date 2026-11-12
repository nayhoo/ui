import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { style } from "@vanilla-extract/css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const avatarImage = style({
  display: "flex",
  objectFit: "cover",
  boxSizing: "border-box",
  height: "100%",
  verticalAlign: "middle",
  width: "100%",
});

export const avatarRecipe = homemadeRecipe({
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
    fontWeight: theme.fontWeight.medium,
    // color: theme.color.surfaceTextContrast,

    // backgroundColor: theme.color.surface,

    selectors: {
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: "inherit",
        // boxShadow: `inset 0px 0px 1px ${theme.color.line}`,
      },
    },
  },

  variants: {
    size: {
      "1": {
        height: theme.space[3],
        width: theme.space[3],
      },
      "2": {
        height: theme.space[5],
        width: theme.space[5],
      },
      "3": {
        height: theme.space[6],
        width: theme.space[6],
      },
      "4": {
        height: theme.space[7],
        width: theme.space[7],
      },
      "5": {
        height: theme.space[8],
        width: theme.space[8],
      },
      "6": {
        height: theme.space[9],
        width: theme.space[9],
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
          "&:hover::after": {
            opacity: "1",
          },
          '&[data-state="open"]::after': {
            backgroundColor: "rgba(0, 0, 0, 0.12)",
            opacity: "1",
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

export type AvatarVariants = NonNullable<
  HomemadeRecipeVariants<typeof avatarRecipe>
>;

export const avatarFallbackRecipe = homemadeRecipe({
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
        fontSize: theme.fontSize[3],
      },
      "3": {
        fontSize: theme.fontSize[6],
      },
      "4": {
        fontSize: theme.fontSize[7],
      },
      "5": {
        fontSize: theme.fontSize[8],
      },
      "6": {
        fontSize: theme.fontSize[9],
      },
    },
  },
  defaultVariants: {
    size: "2",
  },
});

export type AvatarFallbackVariants = NonNullable<
  HomemadeRecipeVariants<typeof avatarFallbackRecipe>
>;
