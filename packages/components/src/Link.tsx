import { styled } from "./stitches.config";
import { Text } from "./Text";

export const Link = styled("a", {
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  alignItems: "center",
  color: "$textBackgroundContrast",
  flexShrink: 0,
  gap: "$1",
  lineHeight: "inherit",
  outline: "none",
  textDecorationColor: "$textBackgroundContrast",
  textDecorationLine: "none",
  textUnderlineOffset: "3px",

  "&:focus": {
    outlineOffset: "2px",
    outlineStyle: "solid",
    outlineWidth: "2px",
    textDecorationLine: "none",
  },

  [`& ${Text}`]: {
    color: "inherit",
  },

  "@hover": {
    "&:hover": {
      textDecorationLine: "underline",
    },
  },

  variants: {
    color: {
      primary: {
        color: "$primary",
        textDecorationColor: "$primary",
      },
      secondary: {
        color: "$secondary",
        textDecorationColor: "$secondary",
      },
    },
  },
  defaultVariants: {},
});
