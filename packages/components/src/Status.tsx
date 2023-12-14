import { styled } from "../stitches.config";

export const Status = styled("div", {
  backgroundColor: "$line", // todo: could this be another theme token?
  borderRadius: "$round",
  flexShrink: 0,

  variants: {
    color: {
      info: {
        backgroundColor: "$info",
      },
      success: {
        backgroundColor: "$success",
      },
      warning: {
        backgroundColor: "$warning",
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
