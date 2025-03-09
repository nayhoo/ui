import { ButtonVariants, buttonRecipe } from "@/recipes/button.css";
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
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import * as SelectPrimitive from "@radix-ui/react-Select";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export const Select = SelectPrimitive.Root;

type SelectTriggerProps = SelectPrimitive.SelectTriggerProps &
  ButtonVariants & {
    placeholder?: React.ReactNode;
  };

export const SelectTrigger = ({
  placeholder,
  variant = "outline",
  ...props
}: SelectTriggerProps) => {
  const button = buttonRecipe(
    pick({ variant, ...props }, ...buttonRecipe.variants()),
  );

  return (
    <SelectPrimitive.Trigger
      {...props}
      className={mergeClasses(button, props.className)}
    >
      <SelectPrimitive.Value placeholder={placeholder} />

      <SelectPrimitive.Icon style={{ marginLeft: 5 }}>
        <ChevronDownIcon />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};

type SelectContentProps = SelectPrimitive.SelectContentProps &
  MenuVariants &
  PanelVariants;

export const SelectContent = ({ ...props }: SelectContentProps) => {
  const menu = menuRecipe(pick(props, ...menuRecipe.variants()));
  const panel = panelRecipe(pick(props, ...panelRecipe.variants()));

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        {...props}
        className={mergeClasses(menu, panel, props.className)}
      />
    </SelectPrimitive.Portal>
  );
};

type SelectItemProps = SelectPrimitive.SelectItemProps & MenuItemVariants;

export const SelectItem = ({ ...props }: SelectItemProps) => {
  const variants = pick(props, ...menuItemRecipe.variants());
  const menuItem = menuItemRecipe(variants);

  return (
    <SelectPrimitive.Item
      {...props}
      className={mergeClasses(menuItem, props.className)}
    >
      <SelectPrimitive.ItemText>{props.children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
};

export const SelectViewport = SelectPrimitive.Viewport;

export const SelectGroup = SelectPrimitive.Group;

type SelectLabelProps = SelectPrimitive.SelectLabelProps & MenuLabelVariants;

export const SelectLabel = ({ ...props }: SelectLabelProps) => {
  const variants = pick(props, ...menuLabelRecipe.variants());
  const menuLabel = menuLabelRecipe(variants);

  return (
    <SelectPrimitive.Label
      {...props}
      className={mergeClasses(menuLabel, props.className)}
    >
      {props.children}
    </SelectPrimitive.Label>
  );
};

type SelectSeparatorProps = SelectPrimitive.SelectSeparatorProps &
  MenuSeparatorVariants;

export const SelectSeparator = ({ ...props }: SelectSeparatorProps) => {
  const variants = pick(props, ...menuSeparatorRecipe.variants());
  const menuSeparator = menuSeparatorRecipe(variants);

  return (
    <SelectPrimitive.Separator
      {...props}
      className={mergeClasses(menuSeparator, props.className)}
    >
      {props.children}
    </SelectPrimitive.Separator>
  );
};
