import { Box } from "@/components/box";
import { Paragraph } from "@/components/paragraph";
import {
  TooltipContentVariants,
  tooltipContentRecipe,
} from "@/recipes/tooltip.css";
import { theme } from "@/theme-contracts/theme-contract.css";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import React from "react";

type TooltipPrimitiveProps = React.ComponentProps<typeof TooltipPrimitive.Root>;
type TooltipProps = TooltipPrimitiveProps &
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

  const variants = pick(props, ...tooltipContentRecipe.variants());
  const tooltipContent = tooltipContentRecipe(variants);

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...rootProps}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side="top"
            align="center"
            sideOffset={5}
            {...props}
            className={mergeClasses(tooltipContent, props.className)}
          >
            <Paragraph
              size="1"
              style={{
                lineHeight: props.multiline ? "20px" : undefined,
              }}
            >
              {content}
            </Paragraph>
            <Box>
              <TooltipPrimitive.Arrow
                width={11}
                height={5}
                style={{
                  fill: theme.semanticColors.transparentSurface,
                }}
              />
            </Box>
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
