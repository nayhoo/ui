import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { styled, keyframes } from "./stitches.config";

export const Accordion = styled(AccordionPrimitive.Root, {
  borderRadius: "$2",
  width: 300,
});

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  AccordionPrimitive.AccordionContentProps
>(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    <StyledContentText>{children}</StyledContentText>
  </StyledContent>
));

export const AccordionItem = styled(AccordionPrimitive.Item, {
  marginTop: 1,
  overflow: "hidden",

  "&:first-child": {
    borderTopLeftRadius: "$1",
    borderTopRightRadius: "$1",
    marginTop: 0,
  },

  "&:last-child": {
    borderBottomLeftRadius: "$1",
    borderBottomRightRadius: "$1",
  },

  "&:focus-within": {
    position: "relative",
    zIndex: 1,
  },
});

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof StyledTrigger>,
  AccordionPrimitive.AccordionTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledChevron aria-hidden />
    </StyledTrigger>
  </StyledHeader>
));

const slideDown = keyframes({
  from: {
    height: 0,
  },
  to: {
    height: "var(--radix-accordion-content-height)",
  },
});

const slideUp = keyframes({
  from: {
    height: "var(--radix-accordion-content-height)",
  },
  to: {
    height: 0,
  },
});

const StyledChevron = styled(ChevronDownIcon, {
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",

  "[data-state=open] &": {
    transform: "rotate(180deg)",
  },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  fontSize: "$3",
  overflow: "hidden",

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledContentText = styled("div", {
  padding: "15px 20px",
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: "unset",

  display: "flex",
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: "unset",

  alignItems: "center",
  backgroundColor: "transparent",
  boxShadow: `0 1px 0 $colors$divider`,
  display: "flex",
  flex: 1,
  fontFamily: "inherit",
  fontSize: "$3",
  height: 45,
  justifyContent: "space-between",
  lineHeight: 1,
  padding: "0 20px",

  "&:hover": {
    backgroundColor: "$transparentHover",
  },
});
