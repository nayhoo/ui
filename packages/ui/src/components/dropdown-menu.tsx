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
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon } from "@radix-ui/react-icons";

export const DropdownMenu = DropdownMenuPrimitive.Root;

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownMenuContent = ({
  ...props
}: DropdownMenuPrimitive.DropdownMenuContentProps) => {
  const menu = menuRecipe({});
  const panel = panelRecipe({});

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
}: DropdownMenuPrimitive.DropdownMenuItemProps) => {
  const menuItem = menuItemRecipe({});

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
}: DropdownMenuPrimitive.DropdownMenuLabelProps) => {
  const menuLabel = menuLabelRecipe({});

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
}: DropdownMenuPrimitive.DropdownMenuSeparatorProps) => {
  const menuSeparator = menuSeparatorRecipe({});

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
}: DropdownMenuPrimitive.DropdownMenuCheckboxItemProps) => {
  const menuItem = menuItemRecipe({});

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
}: DropdownMenuPrimitive.DropdownMenuRadioItemProps) => {
  const menuItem = menuItemRecipe({});

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
