import { styled } from "../stitches.config";
import { Text } from "./Text";

export const Link = styled("a", {
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  alignItems: "center",
  flexShrink: 0,
  gap: "$1",
  lineHeight: "inherit",
  outline: "none",
  textDecorationColor: "transparent",
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
        color: "$textPrimary",
        textDecorationColor: "$textPrimary",
      },
      secondary: {
        color: "$textSecondary",
        textDecorationColor: "$textSecondary",
      },
      accent: {
        color: "$textAccent",
        textDecorationColor: "$textAccent",
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});
