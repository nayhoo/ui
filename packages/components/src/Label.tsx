import * as LabelPrimitive from "@radix-ui/react-label";
import { styled } from "./stitches.config";
import { Text } from "./Text";

/**
 * Nayhoo label component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/Label.stories.tsx
 */
export const Label = styled(LabelPrimitive.Root, Text, {
  color: "$textLabel",
  cursor: "default",
  display: "inline-block",
  verticalAlign: "middle",
});
