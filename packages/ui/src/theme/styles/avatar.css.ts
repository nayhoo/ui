import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { style } from "@vanilla-extract/css";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const avatarImage = style({
  display: "flex",
  height: "100%",
  objectFit: "cover",
  verticalAlign: "middle",
  width: "100%",
});

export const avatar = homemadeRecipe({
  base: {
    alignItems: "center",
    backgroundColor: theme.color.container.secondary.background,
    borderRadius: theme.radii[2],
    color: theme.color.content.primary.foreground,
    display: "flex",
    flexShrink: 0,
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    userSelect: "none",
    verticalAlign: "middle",

    selectors: {
      "&::before": {
        border: "1px solid",
        borderColor: theme.color.container.secondary.borderColor,
        borderRadius: "inherit",
        bottom: 0,
        content: '""',
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
      },
    },
  },

  variants: {
    size: {
      "1": {
        height: theme.space[5],
        width: theme.space[5],
      },
      "2": {
        height: theme.space[6],
        width: theme.space[6],
      },
      "3": {
        height: theme.space[7],
        width: theme.space[7],
      },
    },
    round: {
      true: {
        borderRadius: theme.radii.full,
      },
    },
    inactive: {
      true: {
        opacity: ".4",
      },
    },
    interactive: {
      true: {
        selectors: {
          "&::after": {
            backgroundColor: "rgba(0, 0, 0, 0.08)",
            bottom: "0",
            content: '""',
            left: "0",
            opacity: "0",
            pointerEvents: "none",
            position: "absolute",
            right: "0",
            top: "0",
            transition: "opacity 100ms linear",
          },
          "&:hover": {
            cursor: "pointer",
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
    size: "2",
  },
});

export type AvatarVariants = NonNullable<HomemadeRecipeVariants<typeof avatar>>;
