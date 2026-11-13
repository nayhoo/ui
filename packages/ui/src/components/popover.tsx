import { menuContent, MenuContentVariants } from "@/theme/styles/menu.css";
import { panel } from "@/theme/styles/panel.css";
import { mergeClasses } from "@/utils/merge-classes";
import * as PopoverPrimitive from "@radix-ui/react-popover";

export type PopoverProps = PopoverPrimitive.PopoverProps;

export const Popover = PopoverPrimitive.Root;

export type PopoverTriggerProps = PopoverPrimitive.PopoverTriggerProps;

export const PopoverTrigger = PopoverPrimitive.Trigger;

export type PopoverContentPrimitiveProps =
  PopoverPrimitive.PopoverContentProps & MenuContentVariants;

export const PopoverContent = ({
  children,
  onTop,
  ...props
}: PopoverContentPrimitiveProps) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      sideOffset={4}
      {...props}
      className={mergeClasses(menuContent({ onTop }), panel, props.className)}
    >
      {children}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
);

export type PopoverCloseProps = PopoverPrimitive.PopoverCloseProps;

export const PopoverClose = PopoverPrimitive.Close;
