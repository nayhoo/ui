import { Box } from "@/components/box";
import { Text } from "@/components/text";
import {
  tooltipContent,
  TooltipContentVariants,
} from "@/theme/styles/tooltip.css";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import React from "react";

type TooltipPrimitiveProps = React.ComponentProps<typeof TooltipPrimitive.Root>;

export type TooltipProps = TooltipPrimitiveProps &
  TooltipPrimitive.TooltipContentProps &
  TooltipContentVariants;

export function Tooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  delayDuration,
  disableHoverableContent,
  ...props
}: TooltipProps) {
  const rootProps = {
    open,
    defaultOpen,
    onOpenChange,
    delayDuration,
    disableHoverableContent,
  };

  const [variants, rest] = extractVariantsFromProps(
    props,
    ...tooltipContent.variants(),
  );

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...rootProps}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side="top"
            align="center"
            sideOffset={4}
            {...rest}
            className={mergeClasses(tooltipContent(variants), rest.className)}
          >
            <Text
              color="onSolid"
              size="1"
              style={{
                lineHeight: variants.multiline ? "20px" : undefined,
              }}
            >
              {content}
            </Text>
            <Box>
              <TooltipPrimitive.Arrow
                width={11}
                height={5}
                style={{
                  fill: "rgb(0, 0, 0)",
                }}
              />
            </Box>
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
