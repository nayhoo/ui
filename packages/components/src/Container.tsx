import { styled } from "./stitches.config";

export const Container = styled("div", {
  boxSizing: "border-box",
  flexShrink: 0,
  mx: "auto",
  px: "0 12px",

  variants: {
    size: {
      "1": {
        maxWidth: "430px",
      },
      "2": {
        maxWidth: "715px",
      },
      "3": {
        maxWidth: "1145px",
      },
      "4": {
        maxWidth: "none",
      },
    },
  },
  defaultVariants: {
    size: "4",
  },
});
