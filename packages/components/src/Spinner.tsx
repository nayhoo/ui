import React from "react";
import { styled, CSS, VariantProps } from "./stitches.config";
import { spin } from "./keyframes";

type SpinnerVariants = VariantProps<typeof StyledSpinner>;
type SpinnerProps = SpinnerVariants & { css?: CSS };

/**
 * Nayhoo spinner component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/Spinner.stories.tsx
 */
export const Spinner = ({ ...props }: SpinnerProps) => <StyledSpinner {...props} />;

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
      "10": {
        size: "$10",
      },
    },
  },

  defaultVariants: {
    size: "3",
  },
});
