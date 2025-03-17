import { ButtonVariants, buttonRecipe } from "@/theme/recipes/button.css";
import {
  menu,
  menuItem,
  menuLabel,
  menuSeparator,
} from "@/theme/styles/menu.css";
import { panel } from "@/theme/styles/panel.css";
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

type SelectContentProps = SelectPrimitive.SelectContentProps;

export const SelectContent = ({ ...props }: SelectContentProps) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        {...props}
        className={mergeClasses(menu, panel, props.className)}
      />
    </SelectPrimitive.Portal>
  );
};

type SelectItemProps = SelectPrimitive.SelectItemProps;

export const SelectItem = ({ ...props }: SelectItemProps) => {
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

type SelectLabelProps = SelectPrimitive.SelectLabelProps;

export const SelectLabel = ({ ...props }: SelectLabelProps) => {
  return (
    <SelectPrimitive.Label
      {...props}
      className={mergeClasses(menuLabel, props.className)}
    >
      {props.children}
    </SelectPrimitive.Label>
  );
};

type SelectSeparatorProps = SelectPrimitive.SelectSeparatorProps;

export const SelectSeparator = ({ ...props }: SelectSeparatorProps) => {
  return (
    <SelectPrimitive.Separator
      {...props}
      className={mergeClasses(menuSeparator, props.className)}
    >
      {props.children}
    </SelectPrimitive.Separator>
  );
};
