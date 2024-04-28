import React from "react";
import { Text } from "./Text";
import { VariantProps, CSS } from "./stitches.config";
import { merge } from "@nayhoo/utils";

const DEFAULT_TAG = "h1";

type TextSizeVariants = Pick<VariantProps<typeof Text>, "size">;
type HeadingSizeVariants = "1" | "2" | "3" | "4";
type HeadingVariants = { size?: HeadingSizeVariants } & Omit<VariantProps<typeof Text>, "size">;
type HeadingProps = React.ComponentProps<typeof DEFAULT_TAG> &
  HeadingVariants & { css?: CSS; as?: any };

/**
 * Nayhoo heading component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/Heading.stories.tsx
 */
export const Heading = React.forwardRef<React.ElementRef<typeof DEFAULT_TAG>, HeadingProps>(
  (props, forwardedRef) => {
    const { size = "1", ...textProps } = props;

    // This is the mapping of Heading Variants to Text variants
    const textSize: Record<HeadingSizeVariants, TextSizeVariants["size"]> = {
      1: { "@initial": "4", "@bp2": "5" },
      2: { "@initial": "6", "@bp2": "7" },
      3: { "@initial": "7", "@bp2": "8" },
      4: { "@initial": "8", "@bp2": "9" },
    };

    // This is the mapping of Heading Variants to Text css
    const textCss: Record<HeadingSizeVariants, CSS> = {
      1: {
        fontWeight: "$medium",
        lineHeight: "$fontSizes$4",
        "@bp2": { lineHeight: "$fontSizes$5" },
      },
      2: {
        fontWeight: "$medium",
        lineHeight: "$fontSizes$6",
        "@bp2": { lineHeight: "$fontSizes$7" },
      },
      3: {
        fontWeight: "$medium",
        lineHeight: "$fontSizes$7",
        "@bp2": { lineHeight: "$fontSizes$8" },
      },
      4: {
        fontWeight: "$medium",
        lineHeight: "$fontSizes$8",
        "@bp2": { lineHeight: "$fontSizes$9" },
      },
    };

    return (
      <Text
        as={DEFAULT_TAG}
        {...textProps}
        css={{
          fontVariantNumeric: "proportional-nums",
          ...merge(textCss[size], props.css ?? {}),
        }}
        ref={forwardedRef}
        size={textSize[size]}
      />
    );
  }
);
