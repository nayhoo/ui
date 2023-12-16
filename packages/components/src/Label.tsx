import * as LabelPrimitive from "@radix-ui/react-label";
import { styled } from "../stitches.config";
import { Text } from "./Text";

export const Label = styled(LabelPrimitive.Root, Text, {
  color: "$textLabel",
  cursor: "default",
  display: "inline-block",
  verticalAlign: "middle",
});
