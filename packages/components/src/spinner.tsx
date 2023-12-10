import React from "react";
import { styled, keyframes, CSS, VariantProps } from "../stitches.config";

type SpinnerVariants = VariantProps<typeof StyledSpinner>;
type SpinnerProps = SpinnerVariants & { css?: CSS };

export const Spinner = ({ ...props }: SpinnerProps) => <StyledSpinner {...props} />;

const spin = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

const StyledSpinner = styled("div", {
  animation: `${spin} .8s linear infinite`,

  border: "1px solid $textDisabled",
  borderRadius: "$round",
  borderTop: "1px solid currentColor",

  variants: {
    size: {
      "1": {
        size: "$1",
      },
      "2": {
        size: "$2",
      },
      "3": {
        size: "$3",
      },
      "4": {
        size: "$4",
      },
      "5": {
        size: "$5",
      },
      "6": {
        size: "$6",
      },
      "7": {
        size: "$7",
      },
      "8": {
        size: "$8",
      },
      "9": {
        size: "$9",
      },
    },
  },

  defaultVariants: {
    size: "3",
  },
});
