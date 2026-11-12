import { homemadeRecipe } from "@/lib/homemade-recipe.css";
import { pulse } from "@/theme/animations/pulse.css";
import { theme } from "@/theme/themes/theme-contract.css";
import * as colors from "@radix-ui/colors";
import { HomemadeRecipeVariants } from "homemade-recipes";

export const skeletonRecipe = homemadeRecipe({
  base: {
    backgroundColor: colors.slate.slate4,
    position: "relative",
    overflow: "hidden",

    selectors: {
      "&::after": {
        animationName: `${pulse}`,
        animationDuration: "500ms",
        animationDirection: "alternate",
        animationIterationCount: "infinite",
        animationTimingFunction: "ease-in-out",
        backgroundColor: colors.slate.slate6,
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
    variant: {
      avatar1: {
        borderRadius: theme.radii.round,
        height: theme.space[3],
        width: theme.space[3],
      },
      avatar2: {
        borderRadius: theme.radii.round,
        height: theme.space[5],
        width: theme.space[5],
      },
      avatar3: {
        borderRadius: theme.radii.round,
        height: theme.space[6],
        width: theme.space[6],
      },
      avatar4: {
        borderRadius: theme.radii.round,
        height: theme.space[7],
        width: theme.space[7],
      },
      avatar5: {
        borderRadius: theme.radii.round,
        height: theme.space[8],
        width: theme.space[8],
      },
      avatar6: {
        borderRadius: theme.radii.round,
        height: theme.space[9],
        width: theme.space[9],
      },
      text: {
        height: theme.space[1],
      },
      title: {
        height: theme.space[5],
      },
      heading: {
        height: theme.space[3],
      },
      button: {
        borderRadius: theme.radii[1],
        height: theme.space[5],
        width: theme.space[8],
      },
    },
  },
  defaultVariants: {
    variant: "text",
  },
});

export type SkeletonVariants = NonNullable<
  HomemadeRecipeVariants<typeof skeletonRecipe>
>;
