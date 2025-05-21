import { Box } from "@/components/box";
import { Text } from "@/components/text";
import {
  TooltipContentVariants,
  tooltipContentRecipe,
} from "@/theme/recipes/tooltip.css";
import { theme } from "@/theme/theme-contracts/theme-contract.css";
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
    ...tooltipContentRecipe.variants(),
  );
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
            {...rest}
            className={mergeClasses(tooltipContent, rest.className)}
          >
            <Text
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
