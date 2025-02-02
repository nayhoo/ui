import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
import {
  menuItemRecipe,
  menuLabelRecipe,
  menuRecipe,
  menuSeparatorRecipe,
} from "@/recipes/menu.css";
import { panelRecipe } from "@/recipes/panel.css";
import { theme } from "@/theme-contracts/theme-contract.css";
import { mergeClasses } from "@/utils/merge-classes";
import { CheckIcon } from "@radix-ui/react-icons";
import * as MenuPrimitive from "@radix-ui/react-menu";

export const Menu = ({
  ...props
}: MenuPrimitive.MenuProps & { className?: string }) => {
  const menu = menuRecipe({});

  return (
    <MenuPrimitive.Root {...props}>
      <div className={mergeClasses(menu, props.className)}>
        {props.children}
      </div>
    </MenuPrimitive.Root>
  );
};

export const MenuContent = ({ ...props }: MenuPrimitive.MenuContentProps) => {
  const panel = panelRecipe({});

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
}: MenuPrimitive.MenuSeparatorProps) => {
  const menuSeparator = menuSeparatorRecipe({});

  return (
    <MenuPrimitive.Separator
      {...props}
      className={mergeClasses(menuSeparator, props.className)}
    >
      {props.children}
    </MenuPrimitive.Separator>
  );
};

export const MenuItem = ({ ...props }: MenuPrimitive.MenuItemProps) => {
  const menuItem = menuItemRecipe({});

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
}: MenuPrimitive.MenuRadioItemProps) => {
  const menuItem = menuItemRecipe({});

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
}: MenuPrimitive.MenuCheckboxItemProps) => {
  const menuItem = menuItemRecipe({});

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

export const MenuLabel = ({ ...props }: MenuPrimitive.MenuLabelProps) => {
  const menuLabel = menuLabelRecipe({});

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
