import {
  menuContent,
  MenuContentVariants,
  menuLabel,
  menuSeparator,
} from "@/theme/styles/menu.css";
import { panel } from "@/theme/styles/panel.css";
import { mergeClasses } from "@/utils/merge-classes";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Button } from "./button";

export type DropdownMenuProps = DropdownMenuPrimitive.DropdownMenuProps;

export const DropdownMenu = DropdownMenuPrimitive.Root;

export type DropdownMenuTriggerProps =
  DropdownMenuPrimitive.DropdownMenuTriggerProps;

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export type DropdownMenuContentProps =
  DropdownMenuPrimitive.DropdownMenuContentProps & MenuContentVariants;

export const DropdownMenuContent = ({
  children,
  onTop,
  ...props
}: DropdownMenuContentProps) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={4}
        {...props}
        className={mergeClasses(menuContent({ onTop }), panel, props.className)}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
};

export type DropdownMenuItemProps = DropdownMenuPrimitive.DropdownMenuItemProps;

export const DropdownMenuItem = (
  props: Omit<DropdownMenuItemProps, "asChild">,
) => {
  return (
    <DropdownMenuPrimitive.Item {...props} asChild>
      <Button fullWidth sentiment="accented" variant="ghost">
        {props.children}
      </Button>
    </DropdownMenuPrimitive.Item>
  );
};

export type DropdownMenuGroupProps =
  DropdownMenuPrimitive.DropdownMenuGroupProps;

export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

export type DropdownMenuLabelProps =
  DropdownMenuPrimitive.DropdownMenuLabelProps;

export const DropdownMenuLabel = (props: DropdownMenuLabelProps) => {
  return (
    <DropdownMenuPrimitive.Label
      {...props}
      className={mergeClasses(menuLabel, props.className)}
    />
  );
};

export type DropdownMenuSeparatorProps =
  DropdownMenuPrimitive.DropdownMenuSeparatorProps;

export const DropdownMenuSeparator = (props: DropdownMenuSeparatorProps) => {
  return (
    <DropdownMenuPrimitive.Separator
      {...props}
      className={mergeClasses(menuSeparator, props.className)}
    />
  );
};
