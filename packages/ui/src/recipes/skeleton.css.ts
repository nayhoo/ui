import { theme } from "@/theme-contracts/theme-contract.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { pulse } from "../animations/pulse.css";

export const skeletonRecipe = recipe({
  base: {
    backgroundColor: theme.colors.slate.slate4,
    position: "relative",
    overflow: "hidden",

    selectors: {
      "&::after": {
        animationName: `${pulse}`,
        animationDuration: "500ms",
        animationDirection: "alternate",
        animationIterationCount: "infinite",
        animationTimingFunction: "ease-in-out",
        backgroundColor: theme.colors.slate.slate6,
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
        height: theme.sizes[3],
        width: theme.sizes[3],
      },
      avatar2: {
        borderRadius: theme.radii.round,
        height: theme.sizes[5],
        width: theme.sizes[5],
      },
      avatar3: {
        borderRadius: theme.radii.round,
        height: theme.sizes[6],
        width: theme.sizes[6],
      },
      avatar4: {
        borderRadius: theme.radii.round,
        height: theme.sizes[7],
        width: theme.sizes[7],
      },
      avatar5: {
        borderRadius: theme.radii.round,
        height: theme.sizes[8],
        width: theme.sizes[8],
      },
      avatar6: {
        borderRadius: theme.radii.round,
        height: theme.sizes[9],
        width: theme.sizes[9],
      },
      text: {
        height: theme.sizes[1],
      },
      title: {
        height: theme.sizes[5],
      },
      heading: {
        height: theme.sizes[3],
      },
      button: {
        borderRadius: theme.radii[1],
        height: theme.sizes[5],
        width: theme.sizes[8],
      },
    },
  },
  defaultVariants: {
    variant: "text",
  },
});

export type SkeletonVariants = NonNullable<
  RecipeVariants<typeof skeletonRecipe>
>;
