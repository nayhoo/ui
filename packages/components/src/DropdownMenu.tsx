import React from "react";
import { CheckIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { styled, CSS, VariantProps, css } from "./stitches.config";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Box } from "./Box";
import { Flex } from "./Flex";
import { panelStyles } from "./Panel";

export const baseItemCss = css({
  alignItems: "center",
  cursor: "default",
  display: "flex",
  fontSize: "$sm",
  fontVariantNumeric: "tabular-nums",
  height: "$8",
  justifyContent: "space-between",
  lineHeight: "1",
  px: "$2",
  userSelect: "none",
  whiteSpace: "nowrap",
});

export const itemCss = css(baseItemCss, {
  borderRadius: "$xl",
  lineHeight: 1,
  position: "relative",

  "&:hover": {
    backgroundColor: "$transparentHover",
    cursor: "pointer",
  },

  "&[data-disabled]": {
    color: "$textDisabled",
    cursor: "not-allowed",
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    backgroundColor: "$transparentHover",
    outline: "none",
  },

  "&[data-state=open]": {
    backgroundColor: "$transparentHover",
    outline: "none",
  },
});

export const labelCss = css(baseItemCss, {
  color: "$textLabel",
});

export const menuCss = css({
  boxSizing: "border-box",
  minWidth: 120,
  p: "$1",
});

export const separatorCss = css({
  backgroundColor: "$divider",
  height: 1,
  my: "$1",
});

/**
 * Nayhoo dropdown menu component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/DropdownMenu.stories.tsx
 */
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const StyledSubTrigger = styled(DropdownMenuPrimitive.SubTrigger, itemCss);

type SubTriggerVariants = VariantProps<typeof StyledSubTrigger>;
type SubTriggerProps = DropdownMenuPrimitive.MenuSubTriggerProps &
  SubTriggerVariants & { css?: CSS };

const DropdownMenuSubTrigger = ({ ...props }: SubTriggerProps) => (
  <StyledSubTrigger {...props}>
    {props.children}
    <RightSlot>
      <ChevronRightIcon />
    </RightSlot>
  </StyledSubTrigger>
);

const StyledContent = styled(DropdownMenuPrimitive.Content, menuCss, panelStyles);

type DropdownMenuContentPrimitiveProps = React.ComponentProps<typeof DropdownMenuPrimitive.Content>;
type DropdownMenuContentProps = DropdownMenuContentPrimitiveProps & {
  css?: CSS;
  hideArrow?: boolean;
};

const StyledArrow = styled(DropdownMenuPrimitive.Arrow, { fill: "$surface" });

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  DropdownMenuContentProps
>(({ children, ...props }, forwardedRef) => (
  <DropdownMenuPrimitive.Portal>
    <StyledContent {...props} ref={forwardedRef}>
      {children}
      {!props.hideArrow && <StyledArrow />}
    </StyledContent>
  </DropdownMenuPrimitive.Portal>
));

const StyledSubContent = styled(DropdownMenuPrimitive.SubContent, menuCss, panelStyles);

type DropdownMenuSubContentPrimitiveProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.SubContent
>;
type DropdownMenuSubContentProps = DropdownMenuSubContentPrimitiveProps & { css?: CSS };

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof StyledSubContent>,
  DropdownMenuSubContentProps
>((props, forwardedRef) => (
  <DropdownMenuPrimitive.Portal>
    <StyledSubContent sideOffset={2} alignOffset={-5} {...props} ref={forwardedRef} />
  </DropdownMenuPrimitive.Portal>
));

const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, itemCss);
const DropdownMenuGroup = styled(DropdownMenuPrimitive.Group, {});
const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, labelCss);
const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, separatorCss);

const StyledDropdownMenuCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, itemCss);

type DialogMenuCheckboxItemPrimitiveProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.CheckboxItem
>;
type DialogMenuCheckboxItemProps = DialogMenuCheckboxItemPrimitiveProps & { css?: CSS };

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof StyledDropdownMenuCheckboxItem>,
  DialogMenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledDropdownMenuCheckboxItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ left: "$1", position: "absolute" }}>
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon />
      </DropdownMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledDropdownMenuCheckboxItem>
));

const DropdownMenuRadioGroup = styled(DropdownMenuPrimitive.RadioGroup, {});
const StyledDropdownMenuRadioItem = styled(DropdownMenuPrimitive.RadioItem, itemCss);

type DialogMenuRadioItemPrimitiveProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.RadioItem
>;
type DialogMenuRadioItemProps = DialogMenuRadioItemPrimitiveProps & { css?: CSS };

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof StyledDropdownMenuRadioItem>,
  DialogMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledDropdownMenuRadioItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ left: "$1", position: "absolute" }}>
      <DropdownMenuPrimitive.ItemIndicator>
        <Flex css={{ alignItems: "center", height: "$3", justifyContent: "center", width: "$3" }}>
          <Box
            css={{
              backgroundColor: "currentColor",
              borderRadius: "$round",
              height: "$1",
              width: "$1",
            }}
          />
        </Flex>
      </DropdownMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledDropdownMenuRadioItem>
));

const DropdownMenuItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  alignItems: "center",
  display: "inline-flex",
  justifyContent: "center",
  left: 0,
  position: "absolute",
  width: 25,
});

const RightSlot = styled("div", {
  marginLeft: "auto",
  paddingLeft: 20,

  "[data-disabled] &": {
    color: "$textDisabled",
  },
});

export {
  DropdownMenuTrigger,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSub,
  DropdownMenuSeparator,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuLabel,
  DropdownMenuItemIndicator,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenu,
};
