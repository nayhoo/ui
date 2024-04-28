import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { styled } from "./stitches.config";

/**
 * Nayhoo separator component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/Separator.stories.tsx
 */
export const Separator = styled(SeparatorPrimitive.Root, {
  backgroundColor: "$divider",

  "&[data-orientation=horizontal]": {
    height: 1,
    width: "$full",
  },
  "&[data-orientation=vertical]": {
    height: "$full",
    width: 1,
  },
});
