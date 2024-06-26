import React from "react";
import * as SelectPrimitives from "@radix-ui/react-select";
import { CSS, styled } from "./stitches.config";
import {
  CheckIcon,
  ChevronDownIcon,
  //  ChevronUpIcon
} from "@radix-ui/react-icons";
import { menuCss } from "./DropdownMenu";
import { panelStyles } from "./Panel";

type SelectProps = SelectPrimitives.SelectProps & {
  align?: SelectPrimitives.PopperContentProps["align"];
  css?: CSS;
  items: SelectItemProps[];
  placeholder?: SelectPrimitives.SelectValueProps["placeholder"];
  side?: SelectPrimitives.PopperContentProps["side"];
  size?: "1" | "2";
};

/**
 * Nayhoo select component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/Select.stories.tsx
 */
export const Select = ({
  align,
  css,
  items = [],
  placeholder,
  side,
  size,
  ...props
}: SelectProps) => (
  <SelectPrimitives.Root {...props}>
    <StyledSelectTrigger css={css} size={size}>
      <StyledSelectValue placeholder={placeholder} />

      <StyledSelectIcon>
        <ChevronDownIcon />
      </StyledSelectIcon>
    </StyledSelectTrigger>
    <SelectPrimitives.Portal>
      <StyledContent align={align} position="popper" side={side} sideOffset={5}>
        {/* <StyledScrollUpButton>
          <ChevronUpIcon />
        </StyledScrollUpButton> */}
        <StyledViewport>
          {items.map(({ disabled, label, value }) => (
            <SelectItem disabled={disabled} label={label} size={size} value={value} />
          ))}
        </StyledViewport>
        {/* <StyledScrollDownButton>
          <ChevronDownIcon />
        </StyledScrollDownButton> */}
      </StyledContent>
    </SelectPrimitives.Portal>
  </SelectPrimitives.Root>
);

const StyledSelectValue = styled(SelectPrimitives.Value, {});

const StyledSelectTrigger = styled(SelectPrimitives.SelectTrigger, {
  all: "unset",

  alignItems: "center",
  backgroundColor: "transparent",
  boxSizing: "border-box",
  display: "inline-flex",
  gap: "$1",
  justifyContent: "space-between",
  lineHeight: 1,
  transition: "all 100ms",

  "&::after": {
    boxSizing: "border-box",
  },

  "&::before": {
    boxSizing: "border-box",
  },

  "&:focus": {
    // boxShadow: "inset 0 0 0 1px currentColor",
    zIndex: "1",
  },

  // overflow: "hidden",
  // textOverflow: "ellipsis",
  // whiteSpace: "nowrap",

  "@hover": {
    "&:hover": {
      cursor: "pointer",
    },
  },

  "&[data-state=open]": {
    // boxShadow: "inset 0 0 0 1px currentColor",
  },

  "&[data-disabled]": {
    backgroundColor: "$transparentDisabled",
    boxShadow: "none",
    color: "$textDisabled",
    cursor: "not-allowed",
    pointerEvents: "none",
  },

  "&[data-placeholder]": {
    color: "$textPlaceholder",
  },

  variants: {
    variant: {
      outline: {
        boxShadow: "inset 0 0 0 1px $colors$divider",

        "@hover": {
          "&:hover": {
            backgroundColor: "$transparentHover",
          },
        },
      },
      ghost: {
        backgroundColor: "transparent",

        "@hover": {
          "&:hover": {
            backgroundColor: "$transparentHover",
          },
        },
      },
    },
    size: {
      "1": {
        borderRadius: "$lg",
        height: "$6",
        fontSize: "$xs",
        px: "$1",
      },
      "2": {
        borderRadius: "$xl",
        height: "$8",
        fontSize: "$sm",
        px: "$2",
      },
    },
  },

  defaultVariants: {
    size: "2",
    variant: "outline",
  },
});

const StyledSelectIcon = styled(SelectPrimitives.SelectIcon, {
  color: "$backgroundTextContrast",
});

const StyledContent = styled(SelectPrimitives.Content, menuCss, panelStyles);

const StyledViewport = styled(SelectPrimitives.Viewport, {
  maxHeight: 300,
});

type SelectItemProps = {
  disabled?: SelectPrimitives.SelectItemProps["disabled"];
  label: React.ReactNode;
  size?: "1" | "2";
  value: SelectPrimitives.SelectItemProps["value"];
};

const SelectItem = React.forwardRef<React.ElementRef<typeof StyledItem>, SelectItemProps>(
  ({ ...props }, forwardedRef) => (
    <StyledItem disabled={props.disabled} ref={forwardedRef} size={props.size} value={props.value}>
      <SelectPrimitives.ItemText>{props.label}</SelectPrimitives.ItemText>
      <StyledItemIndicator>
        <CheckIcon />
      </StyledItemIndicator>
    </StyledItem>
  )
);

const StyledItem = styled(SelectPrimitives.Item, {
  lineHeight: 1,
  display: "flex",
  alignItems: "center",
  pr: "$8",
  position: "relative",
  userSelect: "none",

  "&:hover": {
    backgroundColor: "$transparentHover",
    // cursor: "pointer",
  },

  "&[data-disabled]": {
    color: "$textDisabled",
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    backgroundColor: "$transparentHover",
    outline: "none",
  },

  variants: {
    size: {
      "1": {
        borderRadius: "$lg",
        height: "$6",
        fontSize: "$xs",
        pl: "$1",
      },
      "2": {
        borderRadius: "$xl",
        height: "$8",
        fontSize: "$sm",
        pl: "$2",
      },
    },
  },

  defaultVariants: {
    size: "2",
  },
});

const StyledItemIndicator = styled(SelectPrimitives.ItemIndicator, {
  alignItems: "center",
  display: "inline-flex",
  justifyContent: "center",
  position: "absolute",
  right: 0,
  width: 25,
});

// const scrollButtonStyles = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   height: 25,
//   backgroundColor: "white",
//   // color: violet.violet11,
//   cursor: "default",
// };

// const StyledScrollUpButton = styled(SelectPrimitives.ScrollUpButton, scrollButtonStyles);

// const StyledScrollDownButton = styled(SelectPrimitives.ScrollDownButton, scrollButtonStyles);
