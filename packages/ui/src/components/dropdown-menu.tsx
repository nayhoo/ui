import {
  menuContent,
  MenuContentVariants,
  menuItem,
  menuLabel,
  menuSeparator,
} from "@/theme/styles/menu.css";
import { overlay } from "@/theme/styles/overlay.css";
import { mergeClasses } from "@/utils/merge-classes";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export type DropdownMenuProps = DropdownMenuPrimitive.DropdownMenuProps;

export const DropdownMenu = DropdownMenuPrimitive.Root;

export type DropdownMenuTriggerProps =
  DropdownMenuPrimitive.DropdownMenuTriggerProps;

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export type DropdownMenuContentProps =
  DropdownMenuPrimitive.DropdownMenuContentProps &
    MenuContentVariants & {
      size?: "1" | "2";
    };

export const DropdownMenuContent = ({
  children,
  className,
  onOverlay,
  size = "2",
  ...props
}: DropdownMenuContentProps) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={4}
        {...props}
        className={mergeClasses(menuContent({ onOverlay }), overlay, className)}
        data-size={size}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
};

export type DropdownMenuItemProps = DropdownMenuPrimitive.DropdownMenuItemProps;

export const DropdownMenuItem = ({
  className,
  ...props
}: DropdownMenuItemProps) => {
  return (
    <DropdownMenuPrimitive.Item
      {...props}
      className={mergeClasses(menuItem, className)}
    />
  );
};

export type DropdownMenuGroupProps =
  DropdownMenuPrimitive.DropdownMenuGroupProps;

export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

export type DropdownMenuLabelProps =
  DropdownMenuPrimitive.DropdownMenuLabelProps;

export const DropdownMenuLabel = ({
  className,
  ...props
}: DropdownMenuLabelProps) => {
  return (
    <DropdownMenuPrimitive.Label
      {...props}
      className={mergeClasses(menuLabel, className)}
    />
  );
};

export type DropdownMenuSeparatorProps =
  DropdownMenuPrimitive.DropdownMenuSeparatorProps;

export const DropdownMenuSeparator = ({
  className,
  ...props
}: DropdownMenuSeparatorProps) => {
  return (
    <DropdownMenuPrimitive.Separator
      {...props}
      className={mergeClasses(menuSeparator, className)}
    />
  );
};
