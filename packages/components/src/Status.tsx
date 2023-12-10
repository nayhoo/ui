import { styled } from "../stitches.config";

export const Status = styled("div", {
  borderRadius: "$round",
  flexShrink: 0,

  variants: {
    size: {
      "1": {
        size: 5,
      },
      "2": {
        size: 9,
      },
    },
    variant: {
      gray: {
        backgroundColor: "$slate7",
      },
      blue: {
        // backgroundColor: "$blue9",
      },
      green: {
        // backgroundColor: "$green9",
      },
      red: {
        // backgroundColor: "$red9",
      },
    },
  },
  defaultVariants: {
    size: "2",
    variant: "gray",
  },
});
