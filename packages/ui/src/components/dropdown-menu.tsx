import {
  menuContent,
  menuItem,
  MenuItemVariants,
  menuLabel,
  menuSeparator,
} from "@/theme/styles/menu.css";
import { overlay } from "@/theme/styles/overlay.css";
import { mergeClasses } from "@/utils/merge-classes";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React from "react";

interface UseDropdownMenuProps {
  size?: "1" | "2";
  /** if used in an element that has higher z-index importance (e.g. dialog, nav) */
  onOverlay?: boolean;
}

const defaultContext: UseDropdownMenuProps = {
  size: undefined,
  onOverlay: undefined,
};

const DropdownMenuContext = React.createContext<
  UseDropdownMenuProps | undefined
>(undefined);

const useDropdownMenu = () =>
  React.useContext(DropdownMenuContext) ?? defaultContext;

export type DropdownMenuProps = DropdownMenuPrimitive.DropdownMenuProps &
  UseDropdownMenuProps;

export const DropdownMenu = ({
  size,
  onOverlay,
  ...props
}: DropdownMenuProps) => {
  const providerValue = React.useMemo(
    () => ({
      size,
      onOverlay,
    }),
    [size, onOverlay],
  );

  return (
    <DropdownMenuContext.Provider value={providerValue}>
      <DropdownMenuPrimitive.Root {...props} />
    </DropdownMenuContext.Provider>
  );
};

export type DropdownMenuTriggerProps =
  DropdownMenuPrimitive.DropdownMenuTriggerProps;

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export type DropdownMenuContentProps =
  DropdownMenuPrimitive.DropdownMenuContentProps;

export const DropdownMenuContent = ({
  children,
  ...props
}: DropdownMenuContentProps) => {
  const { onOverlay } = useDropdownMenu();

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={4}
        {...props}
        className={mergeClasses(
          menuContent({ onOverlay }),
          overlay,
          props.className,
        )}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
};

export type DropdownMenuItemProps =
  DropdownMenuPrimitive.DropdownMenuItemProps & MenuItemVariants;

export const DropdownMenuItem = ({
  className,
  ...props
}: DropdownMenuItemProps) => {
  const { size } = useDropdownMenu();

  return (
    <DropdownMenuPrimitive.Item
      {...props}
      className={mergeClasses(menuItem({ size }), className)}
    />
  );
};

export type DropdownMenuGroupProps =
  DropdownMenuPrimitive.DropdownMenuGroupProps;

export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

export type DropdownMenuLabelProps =
  DropdownMenuPrimitive.DropdownMenuLabelProps;

export const DropdownMenuLabel = (props: DropdownMenuLabelProps) => {
  const { size } = useDropdownMenu();

  return (
    <DropdownMenuPrimitive.Label
      {...props}
      className={mergeClasses(menuLabel({ size }), props.className)}
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
