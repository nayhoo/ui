import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
import {
  menu,
  menuItem,
  menuLabel,
  menuSeparator,
} from "@/theme/styles/menu.css";
import { panel } from "@/theme/styles/panel.css";
import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { mergeClasses } from "@/utils/merge-classes";
import { CheckIcon } from "@radix-ui/react-icons";
import * as MenuPrimitive from "@radix-ui/react-menu";

export type MenuProps = MenuPrimitive.MenuProps & {
  className?: string;
};

export const Menu = ({ ...props }: MenuProps) => {
  return (
    <MenuPrimitive.Root {...props}>
      <div className={mergeClasses(menu, props.className)}>
        {props.children}
      </div>
    </MenuPrimitive.Root>
  );
};

export type MenuContentProps = MenuPrimitive.MenuContentProps;

export const MenuContent = ({ ...props }: MenuContentProps) => {
  return (
    <MenuPrimitive.Content
      {...props}
      className={mergeClasses(panel, props.className)}
    >
      {props.children}
    </MenuPrimitive.Content>
  );
};

export type MenuSeparatorProps = MenuPrimitive.MenuSeparatorProps;

export const MenuSeparator = ({ ...props }: MenuSeparatorProps) => {
  return (
    <MenuPrimitive.Separator
      {...props}
      className={mergeClasses(menuSeparator, props.className)}
    >
      {props.children}
    </MenuPrimitive.Separator>
  );
};

export type MenuItemProps = MenuPrimitive.MenuItemProps;

export const MenuItem = ({ ...props }: MenuItemProps) => {
  return (
    <MenuPrimitive.MenuItem
      {...props}
      className={mergeClasses(menuItem, props.className)}
    >
      {props.children}
    </MenuPrimitive.MenuItem>
  );
};

export type MenuRadioItemProps = MenuPrimitive.MenuRadioItemProps;

export const MenuRadioItem = ({ ...props }: MenuRadioItemProps) => {
  return (
    <MenuPrimitive.RadioItem
      {...props}
      className={mergeClasses(menuItem, props.className)}
    >
      <Box asChild style={{ position: "absolute", left: theme.space[1] }}>
        <span>
          <MenuPrimitive.ItemIndicator>
            <Flex
              style={{
                width: theme.sizes[3],
                height: theme.sizes[3],
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                style={{
                  width: theme.sizes[1],
                  height: theme.sizes[1],
                  backgroundColor: "currentColor",
                  borderRadius: theme.radii.round,
                }}
              ></Box>
            </Flex>
          </MenuPrimitive.ItemIndicator>
        </span>
      </Box>
      {props.children}
    </MenuPrimitive.RadioItem>
  );
};

export type MenuCheckboxItemProps = MenuPrimitive.MenuCheckboxItemProps;

export const MenuCheckboxItem = ({ ...props }: MenuCheckboxItemProps) => {
  return (
    <MenuPrimitive.MenuCheckboxItem
      {...props}
      className={mergeClasses(menuItem, props.className)}
    >
      <Box asChild style={{ position: "absolute", left: theme.space[1] }}>
        <span>
          <MenuPrimitive.ItemIndicator>
            <CheckIcon />
          </MenuPrimitive.ItemIndicator>
        </span>
      </Box>
      {props.children}
    </MenuPrimitive.MenuCheckboxItem>
  );
};

export type MenuLabelProps = MenuPrimitive.MenuLabelProps;

export const MenuLabel = ({ ...props }: MenuLabelProps) => {
  return (
    <MenuPrimitive.MenuLabel
      {...props}
      className={mergeClasses(menuLabel, props.className)}
    >
      {props.children}
    </MenuPrimitive.MenuLabel>
  );
};

export type MenuRadioGroupProps = MenuPrimitive.MenuRadioGroupProps;

export const MenuRadioGroup = MenuPrimitive.RadioGroup;

export type MenuGroupProps = MenuPrimitive.MenuGroupProps;

export const MenuGroup = MenuPrimitive.Group;
