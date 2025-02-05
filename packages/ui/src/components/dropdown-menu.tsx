import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
import {
  MenuItemVariants,
  MenuLabelVariants,
  MenuSeparatorVariants,
  MenuVariants,
  menuItemRecipe,
  menuLabelRecipe,
  menuRecipe,
  menuSeparatorRecipe,
} from "@/recipes/menu.css";
import { PanelVariants, panelRecipe } from "@/recipes/panel.css";
import { theme } from "@/theme-contracts/theme-contract.css";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon } from "@radix-ui/react-icons";

export const DropdownMenu = DropdownMenuPrimitive.Root;

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownMenuContent = ({
  ...props
}: DropdownMenuPrimitive.DropdownMenuContentProps &
  MenuVariants &
  PanelVariants) => {
  const menu = menuRecipe(pick(props, ...menuRecipe.variants()));
  const panel = panelRecipe(pick(props, ...panelRecipe.variants()));

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        {...props}
        className={mergeClasses(menu, panel, props.className)}
      />
    </DropdownMenuPrimitive.Portal>
  );
};

export const DropdownMenuItem = ({
  ...props
}: DropdownMenuPrimitive.DropdownMenuItemProps & MenuItemVariants) => {
  const variants = pick(props, ...menuItemRecipe.variants());
  const menuItem = menuItemRecipe(variants);

  return (
    <DropdownMenuPrimitive.Item
      {...props}
      className={mergeClasses(menuItem, props.className)}
    >
      {props.children}
    </DropdownMenuPrimitive.Item>
  );
};

export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

export const DropdownMenuLabel = ({
  ...props
}: DropdownMenuPrimitive.DropdownMenuLabelProps & MenuLabelVariants) => {
  const variants = pick(props, ...menuLabelRecipe.variants());
  const menuLabel = menuLabelRecipe(variants);

  return (
    <DropdownMenuPrimitive.Label
      {...props}
      className={mergeClasses(menuLabel, props.className)}
    >
      {props.children}
    </DropdownMenuPrimitive.Label>
  );
};

export const DropdownMenuSeparator = ({
  ...props
}: DropdownMenuPrimitive.DropdownMenuSeparatorProps &
  MenuSeparatorVariants) => {
  const variants = pick(props, ...menuSeparatorRecipe.variants());
  const menuSeparator = menuSeparatorRecipe(variants);

  return (
    <DropdownMenuPrimitive.Separator
      {...props}
      className={mergeClasses(menuSeparator, props.className)}
    >
      {props.children}
    </DropdownMenuPrimitive.Separator>
  );
};

export const DropdownMenuCheckboxItem = ({
  ...props
}: DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & MenuItemVariants) => {
  const variants = pick(props, ...menuItemRecipe.variants());
  const menuItem = menuItemRecipe(variants);

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

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export const DropdownMenuRadioItem = ({
  children,
  ...props
}: DropdownMenuPrimitive.DropdownMenuRadioItemProps & MenuItemVariants) => {
  const variants = pick(props, ...menuItemRecipe.variants());
  const menuItem = menuItemRecipe(variants);

  return (
    <DropdownMenuPrimitive.RadioItem
      {...props}
      className={mergeClasses(menuItem, props.className)}
    >
      <Box asChild style={{ position: "absolute", left: theme.space[1] }}>
        <span>
          <DropdownMenuPrimitive.ItemIndicator>
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
              />
            </Flex>
          </DropdownMenuPrimitive.ItemIndicator>
        </span>
      </Box>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
};
