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
} from "@/recipes/menu.css";
import { panelRecipe, PanelVariants } from "@/recipes/panel.css";
import { theme } from "@/theme-contracts/theme-contract.css";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import { CheckIcon } from "@radix-ui/react-icons";
import * as MenuPrimitive from "@radix-ui/react-menu";

export const Menu = ({
  ...props
}: MenuPrimitive.MenuProps & MenuVariants & { className?: string }) => {
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

export const MenuContent = ({
  ...props
}: MenuPrimitive.MenuContentProps & PanelVariants) => {
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

export const MenuSeparator = ({
  ...props
}: MenuPrimitive.MenuSeparatorProps & MenuSeparatorVariants) => {
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

export const MenuItem = ({
  ...props
}: MenuPrimitive.MenuItemProps & MenuItemVariants) => {
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

export const MenuRadioItem = ({
  ...props
}: MenuPrimitive.MenuRadioItemProps & MenuItemVariants) => {
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

export const MenuCheckboxItem = ({
  ...props
}: MenuPrimitive.MenuCheckboxItemProps & MenuItemVariants) => {
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

export const MenuLabel = ({
  ...props
}: MenuPrimitive.MenuLabelProps & MenuLabelVariants) => {
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
