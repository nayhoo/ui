import React from "react";
import { styled } from "../stitches.config";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { Box } from "./Box";
import { Text } from "./Text";

type TooltipPrimitiveProps = React.ComponentProps<typeof TooltipPrimitive.Root>;
type TooltipProps = TooltipPrimitiveProps &
  React.ComponentProps<typeof TooltipPrimitive.Content> & {
    children: React.ReactElement;
    content: React.ReactNode;
    multiline?: boolean;
  };

const StyledContent = styled(TooltipPrimitive.Content, {
  backgroundColor: "$transparentPanel",
  borderRadius: "$1",
  padding: "$1 $2",

  variants: {
    multiline: {
      true: {
        maxWidth: 250,
        pb: "$2",
      },
    },
  },
});

export function Tooltip({
  children,
  content,
  defaultOpen,
  delayDuration,
  disableHoverableContent,
  multiline,
  onOpenChange,
  open,
  ...props
}: TooltipProps) {
  const rootProps = { open, defaultOpen, onOpenChange, delayDuration, disableHoverableContent };

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...rootProps}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <StyledContent align="center" side="top" sideOffset={5} {...props} multiline={multiline}>
            <Text
              as="p"
              css={{ color: "white", lineHeight: multiline ? "20px" : (undefined as any) }}
              size="1"
            >
              {content}
            </Text>
            <Box css={{ color: "$transparentPanel" }}>
              <TooltipPrimitive.Arrow height={5} style={{ fill: "currentColor" }} width={11} />
            </Box>
          </StyledContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
