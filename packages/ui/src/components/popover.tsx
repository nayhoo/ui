import { menuContent, MenuContentVariants } from "@/theme/styles/menu.css";
import { overlay } from "@/theme/styles/overlay.css";
import { mergeClasses } from "@/utils/merge-classes";
import * as PopoverPrimitive from "@radix-ui/react-popover";

export type PopoverProps = PopoverPrimitive.PopoverProps;

/**
 * @example
 * <Popover>
 *  <PopoverTrigger asChild>
 *   <Button>Open popover</Button>
 *  </PopoverTrigger>
 *
 *  <PopoverContent>
 *   <Text>I want to be with Ninten</Text>
 *  </PopoverContent>
 * </Popover>
 */
export const Popover = PopoverPrimitive.Root;

export type PopoverTriggerProps = PopoverPrimitive.PopoverTriggerProps;

export const PopoverTrigger = PopoverPrimitive.Trigger;

export type PopoverContentPrimitiveProps =
  PopoverPrimitive.PopoverContentProps & MenuContentVariants;

export const PopoverContent = ({
  children,
  className,
  onOverlay,
  ...props
}: PopoverContentPrimitiveProps) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      sideOffset={4}
      {...props}
      className={mergeClasses(menuContent({ onOverlay }), overlay, className)}
    >
      {children}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
);

export type PopoverCloseProps = PopoverPrimitive.PopoverCloseProps;

export const PopoverClose = PopoverPrimitive.Close;
