import { Box } from "@/components/box";
import {
  menuContent,
  MenuContentVariants,
  menuItem,
  menuLabel,
  menuSeparator,
} from "@/theme/styles/menu.css";
import { panel } from "@/theme/styles/panel.css";
import { theme } from "@/theme/themes/theme-contract.css";
import { mergeClasses } from "@/utils/merge-classes";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon } from "@radix-ui/react-icons";

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

export const DropdownMenuItem = ({ ...props }: DropdownMenuItemProps) => {
  return (
    <DropdownMenuPrimitive.Item
      {...props}
      className={mergeClasses(menuItem, props.className)}
    >
      {props.children}
    </DropdownMenuPrimitive.Item>
  );
};

export type DropdownMenuGroupProps =
  DropdownMenuPrimitive.DropdownMenuGroupProps;

export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

export type DropdownMenuLabelProps =
  DropdownMenuPrimitive.DropdownMenuLabelProps;

export const DropdownMenuLabel = ({ ...props }: DropdownMenuLabelProps) => {
  return (
    <DropdownMenuPrimitive.Label
      {...props}
      className={mergeClasses(menuLabel, props.className)}
    >
      {props.children}
    </DropdownMenuPrimitive.Label>
  );
};

export type DropdownMenuSeparatorProps =
  DropdownMenuPrimitive.DropdownMenuSeparatorProps;

export const DropdownMenuSeparator = ({
  ...props
}: DropdownMenuSeparatorProps) => {
  return (
    <DropdownMenuPrimitive.Separator
      {...props}
      data-orientation="horizontal"
      className={mergeClasses(menuSeparator, props.className)}
    >
      {props.children}
    </DropdownMenuPrimitive.Separator>
  );
};

export type DropdownMenuCheckboxItemProps =
  DropdownMenuPrimitive.DropdownMenuCheckboxItemProps;

export const DropdownMenuCheckboxItem = ({
  ...props
}: DropdownMenuCheckboxItemProps) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      {...props}
      className={mergeClasses(menuItem, props.className)}
    >
      <Box asChild style={{ position: "absolute", left: theme.space[1] }}>
        <span>
          <DropdownMenuPrimitive.ItemIndicator>
            <CheckIcon />
          </DropdownMenuPrimitive.ItemIndicator>
        </span>
      </Box>
      {props.children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
};

export type DropdownMenuRadioGroupProps =
  DropdownMenuPrimitive.DropdownMenuRadioGroupProps;

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export type DropdownMenuRadioItemProps =
  DropdownMenuPrimitive.DropdownMenuRadioItemProps;

export const DropdownMenuRadioItem = ({
  children,
  ...props
}: DropdownMenuRadioItemProps) => {
  return (
    <DropdownMenuPrimitive.RadioItem
      {...props}
      className={mergeClasses(menuItem, props.className)}
    >
      <Box asChild style={{ position: "absolute", left: theme.space[1] }}>
        <span>
          <DropdownMenuPrimitive.ItemIndicator>
            <Box
              display="flex"
              align="center"
              justify="center"
              style={{
                width: theme.space[3],
                height: theme.space[3],
              }}
            >
              <Box
                style={{
                  width: theme.space[1],
                  height: theme.space[1],
                  backgroundColor: "currentColor",
                  borderRadius: theme.radii.round,
                }}
              />
            </Box>
          </DropdownMenuPrimitive.ItemIndicator>
        </span>
      </Box>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
};
