import React from "react";
import { styled, CSS } from "./stitches.config";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Box } from "./Box";
import { panelStyles } from "./Panel";
import { Heading } from "./Heading";

/**
 * Nayhoo popover component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/Popover.stories.tsx
 */
export const Popover = PopoverPrimitive.Root;

export const PopoverTrigger = PopoverPrimitive.Trigger;

const StyledContent = styled(PopoverPrimitive.Content, panelStyles, {
  maxWidth: 265,
  minHeight: "$8",
  minWidth: 200,

  "&:focus": {
    outline: "none",
  },
});

type PopoverContentPrimitiveProps = React.ComponentProps<typeof PopoverPrimitive.Content>;
type PopoverContentProps = PopoverContentPrimitiveProps & { css?: CSS; hideArrow?: boolean };

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  PopoverContentProps
>(({ children, hideArrow, ...props }, fowardedRef) => (
  <PopoverPrimitive.Portal>
    <StyledContent sideOffset={hideArrow ? 5 : 10} {...props} ref={fowardedRef}>
      {children}

      {!hideArrow && (
        <Box css={{ color: "$surface" }}>
          <PopoverPrimitive.Arrow height={5} style={{ fill: "currentColor" }} width={11} />
        </Box>
      )}
    </StyledContent>
  </PopoverPrimitive.Portal>
));

export const PopoverClose = PopoverPrimitive.Close;

export const PopoverTitle = styled(Heading, {
  mb: "$5",
});
