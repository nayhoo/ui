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
} from "@/theme/recipes/menu.css";
import { PanelVariants, panelRecipe } from "@/theme/recipes/panel.css";
import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon } from "@radix-ui/react-icons";

export const DropdownMenu = DropdownMenuPrimitive.Root;

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

type DropdownMenuContentProps = DropdownMenuPrimitive.DropdownMenuContentProps &
  MenuVariants &
  PanelVariants;

export const DropdownMenuContent = ({ ...props }: DropdownMenuContentProps) => {
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

type DropdownMenuItemProps = DropdownMenuPrimitive.DropdownMenuItemProps &
  MenuItemVariants;

export const DropdownMenuItem = ({ ...props }: DropdownMenuItemProps) => {
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

type DropdownMenuLabelProps = DropdownMenuPrimitive.DropdownMenuLabelProps &
  MenuLabelVariants;

export const DropdownMenuLabel = ({ ...props }: DropdownMenuLabelProps) => {
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

type DropdownMenuSeparatorProps =
  DropdownMenuPrimitive.DropdownMenuSeparatorProps & MenuSeparatorVariants;

export const DropdownMenuSeparator = ({
  ...props
}: DropdownMenuSeparatorProps) => {
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

type DropdownMenuCheckboxItemProps =
  DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & MenuItemVariants;

export const DropdownMenuCheckboxItem = ({
  ...props
}: DropdownMenuCheckboxItemProps) => {
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

type DropdownMenuRadioItemProps =
  DropdownMenuPrimitive.DropdownMenuRadioItemProps & MenuItemVariants;

export const DropdownMenuRadioItem = ({
  children,
  ...props
}: DropdownMenuRadioItemProps) => {
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
