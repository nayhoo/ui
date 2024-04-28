import React from "react";
import { Text } from "./Text";
import { VariantProps, CSS } from "./stitches.config";
import { merge } from "@nayhoo/utils";

const DEFAULT_TAG = "p";

type TextSizeVariants = Pick<VariantProps<typeof Text>, "size">;
type ParagraphSizeVariants = "1" | "2";
type ParagraphVariants = { size?: ParagraphSizeVariants } & Omit<VariantProps<typeof Text>, "size">;
type ParagraphProps = React.ComponentProps<typeof DEFAULT_TAG> &
  ParagraphVariants & { css?: CSS; as?: any };

/**
 * Nayhoo paragraph component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/Paragraph.stories.tsx
 */
export const Paragraph = React.forwardRef<React.ElementRef<typeof DEFAULT_TAG>, ParagraphProps>(
  (props, forwardedRef) => {
    const { size = "1", ...textProps } = props;

    // This is the mapping of Paragraph Variants to Text variants
    const textSize: Record<ParagraphSizeVariants, TextSizeVariants["size"]> = {
      1: { "@initial": "2", "@bp2": "3" },
      2: { "@initial": "3", "@bp2": "4" },
    };

    // This is the mapping of Paragraph Variants to Text css
    const textCss: Record<ParagraphSizeVariants, CSS> = {
      1: { lineHeight: "$fontSizes$2", "@bp2": { lineHeight: "$fontSizes$3" } },
      2: { lineHeight: "$fontSizes$3", "@bp2": { lineHeight: "$fontSizes$4" } },
    };

    return (
      <Text
        as={DEFAULT_TAG}
        {...textProps}
        css={{ ...merge(textCss[size], props.css ?? {}) }}
        ref={forwardedRef}
        size={textSize[size]}
      />
    );
  }
);
