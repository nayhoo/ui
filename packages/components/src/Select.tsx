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
};

export const Select = ({ align, items = [], placeholder, side, ...props }: SelectProps) => (
  <SelectPrimitives.Root {...props}>
    <StyledSelectTrigger>
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
            <SelectItem disabled={disabled} label={label} value={value} />
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
  boxSizing: "border-box",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  lineHeight: 1,
  gap: 5,
  backgroundColor: "transparent",

  transition: "all 100ms",

  // overflow: "hidden",
  // textOverflow: "ellipsis",
  // whiteSpace: "nowrap",

  "@hover": {
    "&:hover": {
      backgroundColor: "$cloud",
      // cursor: "pointer",
    },
  },

  "&:focus": {
    //  outline: "1px solid $activeOutline",
    zIndex: "1",
  },

  "&[data-state=open]": { outline: "1px solid $activeOutline" },
  "&[data-disabled]": { backgroundColor: "$cloud", cursor: "not-allowed" },
  "&[data-placeholder]": { color: "$nimbus" },

  // variants: {
  //   size: {
  //     "1": {
  // borderRadius: 4,
  //       height: "$5",
  //       fontSize: "$1",
  //       px: "$1",
  //     },
  //     "2": {
  //       borderRadius: "$2",
  //       height: "$6",
  //       fontSize: "$2",
  //       px: "$2",
  //     },
  //   },
  // },

  borderRadius: "$2",
  height: "$6",
  fontSize: "$3",
  px: "$2",
});

const StyledSelectIcon = styled(SelectPrimitives.SelectIcon, {
  // color: "$text",
});

const StyledContent = styled(SelectPrimitives.Content, menuCss, panelStyles);

const StyledViewport = styled(SelectPrimitives.Viewport, {
  maxHeight: 300,
});

type SelectItemProps = {
  disabled?: SelectPrimitives.SelectItemProps["disabled"];
  label: React.ReactNode;
  value: SelectPrimitives.SelectItemProps["value"];
};

const SelectItem = React.forwardRef<React.ElementRef<typeof StyledItem>, SelectItemProps>(
  ({ ...props }, forwardedRef) => (
    <StyledItem disabled={props.disabled} ref={forwardedRef} value={props.value}>
      <SelectPrimitives.ItemText>{props.label}</SelectPrimitives.ItemText>
      <StyledItemIndicator>
        <CheckIcon />
      </StyledItemIndicator>
    </StyledItem>
  )
);

const StyledItem = styled(SelectPrimitives.Item, {
  lineHeight: 1,
  // borderRadius: 1,
  display: "flex",
  alignItems: "center",
  pr: "33px",
  position: "relative",
  userSelect: "none",

  "&:hover": {
    backgroundColor: "$cloud",
    // cursor: "pointer",
  },

  "&[data-disabled]": {
    color: "$nimbus",
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    backgroundColor: "$cloud",
    outline: "none",
  },

  // variants: {
  //   size: {
  //     "1": {
  //  borderRadius: 1,
  //       height: "$5",
  //       fontSize: "$1",
  //       pl: "$1",
  //     },
  //     "2": {
  //       borderRadius: "$2",
  //       height: "$6",
  //       fontSize: "$3",
  //       pl: "$2",
  //     },
  //   },
  // },

  borderRadius: "$2",
  height: "$6",
  fontSize: "$2",
  pl: "$2",
});

const StyledItemIndicator = styled(SelectPrimitives.ItemIndicator, {
  position: "absolute",
  right: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
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
