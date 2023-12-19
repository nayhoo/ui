import { styled } from "../stitches.config";

export const Status = styled("div", {
  backgroundColor: "$divider",
  borderRadius: "$round",
  flexShrink: 0,

  variants: {
    color: {
      primary: {
        backgroundColor: "$primary",
      },
      secondary: {
        backgroundColor: "$secondary",
      },
      error: {
        backgroundColor: "$error",
      },
    },
    size: {
      "1": {
        size: 5,
      },
      "2": {
        size: 9,
      },
    },
  },
  defaultVariants: {
    size: "2",
  },
});
