import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
import {
  menuItemRecipe,
  MenuItemVariants,
  menuLabelRecipe,
  MenuLabelVariants,
  menuRecipe,
  menuSeparatorRecipe,
  MenuSeparatorVariants,
  MenuVariants,
} from "@/theme/recipes/menu.css";
import { panelRecipe, PanelVariants } from "@/theme/recipes/panel.css";
import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import { CheckIcon } from "@radix-ui/react-icons";
import * as MenuPrimitive from "@radix-ui/react-menu";

type MenuProps = MenuPrimitive.MenuProps &
  MenuVariants & {
    className?: string;
  };

export const Menu = ({ ...props }: MenuProps) => {
  const variants = pick(props, ...menuRecipe.variants());
  const menu = menuRecipe(variants);

  return (
    <MenuPrimitive.Root {...props}>
      <div className={mergeClasses(menu, props.className)}>
        {props.children}
      </div>
    </MenuPrimitive.Root>
  );
};

type MenuContentProps = MenuPrimitive.MenuContentProps & PanelVariants;

export const MenuContent = ({ ...props }: MenuContentProps) => {
  const variants = pick(props, ...panelRecipe.variants());
  const panel = panelRecipe(variants);

  return (
    <MenuPrimitive.Content
      {...props}
      className={mergeClasses(panel, props.className)}
    >
      {props.children}
    </MenuPrimitive.Content>
  );
};

type MenuSeparatorProps = MenuPrimitive.MenuSeparatorProps &
  MenuSeparatorVariants;

export const MenuSeparator = ({ ...props }: MenuSeparatorProps) => {
  const variants = pick(props, ...menuSeparatorRecipe.variants());
  const menuSeparator = menuSeparatorRecipe(variants);

  return (
    <MenuPrimitive.Separator
      {...props}
      className={mergeClasses(menuSeparator, props.className)}
    >
      {props.children}
    </MenuPrimitive.Separator>
  );
};

type MenuItemProps = MenuPrimitive.MenuItemProps & MenuItemVariants;

export const MenuItem = ({ ...props }: MenuItemProps) => {
  const variants = pick(props, ...menuItemRecipe.variants());
  const menuItem = menuItemRecipe(variants);

  return (
    <MenuPrimitive.MenuItem
      {...props}
      className={mergeClasses(menuItem, props.className)}
    >
      {props.children}
    </MenuPrimitive.MenuItem>
  );
};

type MenuRadioItemProps = MenuPrimitive.MenuRadioItemProps & MenuItemVariants;

export const MenuRadioItem = ({ ...props }: MenuRadioItemProps) => {
  const variants = pick(props, ...menuItemRecipe.variants());
  const menuItem = menuItemRecipe(variants);

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

type MenuCheckboxItemProps = MenuPrimitive.MenuCheckboxItemProps &
  MenuItemVariants;

export const MenuCheckboxItem = ({ ...props }: MenuCheckboxItemProps) => {
  const variants = pick(props, ...menuItemRecipe.variants());
  const menuItem = menuItemRecipe(variants);

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

type MenuLabelProps = MenuPrimitive.MenuLabelProps & MenuLabelVariants;

export const MenuLabel = ({ ...props }: MenuLabelProps) => {
  const variants = pick(props, ...menuLabelRecipe.variants());
  const menuLabel = menuLabelRecipe(variants);

  return (
    <MenuPrimitive.MenuLabel
      {...props}
      className={mergeClasses(menuLabel, props.className)}
    >
      {props.children}
    </MenuPrimitive.MenuLabel>
  );
};

export const MenuRadioGroup = MenuPrimitive.RadioGroup;

export const MenuGroup = MenuPrimitive.Group;
