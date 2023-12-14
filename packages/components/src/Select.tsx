import React from "react";
import * as SelectPrimitives from "@radix-ui/react-select";
import { styled } from "../stitches.config";
import {
  CheckIcon,
  ChevronDownIcon,
  //  ChevronUpIcon
} from "@radix-ui/react-icons";
import { menuCss } from "./DropdownMenu";
import { panelStyles } from "./Panel";

type SelectProps = SelectPrimitives.SelectProps & {
  align?: SelectPrimitives.PopperContentProps["align"];
  items: SelectItemProps[];
  placeholder?: SelectPrimitives.SelectValueProps["placeholder"];
  side?: SelectPrimitives.PopperContentProps["side"];
  size?: "1" | "2";
};

export const Select = ({ align, items = [], placeholder, side, size, ...props }: SelectProps) => (
  <SelectPrimitives.Root {...props}>
    <StyledSelectTrigger size={size}>
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
    backgroundColor: "$bgDisabled",
    boxShadow: "none",
    color: "$textDisabled",
    cursor: "not-allowed",
    pointerEvents: "none",
  },

  "&[data-placeholder]": {
    // color: "$textSecondary",
  },

  variants: {
    variant: {
      outline: {
        boxShadow: "inset 0 0 0 1px $colors$line",

        "@hover": {
          "&:hover": {
            backgroundColor: "$bgHover",
          },
        },
      },
      ghost: {
        backgroundColor: "transparent",

        "@hover": {
          "&:hover": {
            backgroundColor: "$bgHover",
          },
        },
      },
    },
    size: {
      "1": {
        borderRadius: "$1",
        height: "$5",
        fontSize: "$1",
        px: "$1",
      },
      "2": {
        borderRadius: "$2",
        height: "$6",
        fontSize: "$2",
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
  color: "$textPrimary",
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
  pr: "33px",
  position: "relative",
  userSelect: "none",

  "&:hover": {
    backgroundColor: "$bgHover",
    // cursor: "pointer",
  },

  "&[data-disabled]": {
    color: "$textDisabled",
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    backgroundColor: "$bgHover",
    outline: "none",
  },

  variants: {
    size: {
      "1": {
        borderRadius: "$1",
        height: "$5",
        fontSize: "$1",
        pl: "$1",
      },
      "2": {
        borderRadius: "$2",
        height: "$6",
        fontSize: "$2",
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
