import { menu } from "@/theme/styles/menu.css";
import { panel } from "@/theme/styles/panel.css";
import { mergeClasses } from "@/utils";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import React from "react";

export type PopoverProps = PopoverPrimitive.PopoverProps;

export const Popover = PopoverPrimitive.Root;

export type PopoverTriggerProps = PopoverPrimitive.PopoverTriggerProps;

export const PopoverTrigger = PopoverPrimitive.Trigger;

export type PopoverContentPrimitiveProps = React.ComponentProps<
  typeof PopoverPrimitive.Content
>;

export const PopoverContent = ({
  children,
  ...props
}: PopoverContentPrimitiveProps) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      sideOffset={0}
      {...props}
      className={mergeClasses(menu, panel, props.className)}
    >
      {children}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
);

export type PopoverCloseProps = PopoverPrimitive.PopoverCloseProps;

export const PopoverClose = PopoverPrimitive.Close;
