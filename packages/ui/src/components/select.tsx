import {
  menuContent,
  MenuContentVariants,
  menuItem,
  menuLabel,
  menuSeparator,
  menuTrigger,
} from "@/theme/styles/menu.css";
import { panel } from "@/theme/styles/panel.css";
import { mergeClasses } from "@/utils/merge-classes";
import { CheckIcon } from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";

export type SelectProps = SelectPrimitive.SelectProps;

export const Select = SelectPrimitive.Root;

export type SelectTriggerProps = SelectPrimitive.SelectTriggerProps & {
  placeholder?: React.ReactNode;
};

export const SelectTrigger = ({
  placeholder,
  ...props
}: SelectTriggerProps) => {
  return (
    <SelectPrimitive.Trigger
      {...props}
      className={mergeClasses(menuTrigger, props.className)}
    >
      <SelectPrimitive.Value placeholder={placeholder} />

      <SelectPrimitive.Icon />
    </SelectPrimitive.Trigger>
  );
};

export type SelectContentProps = SelectPrimitive.SelectContentProps &
  MenuContentVariants;

export const SelectContent = ({ onTop, ...props }: SelectContentProps) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        position="popper"
        sideOffset={4}
        {...props}
        className={mergeClasses(menuContent({ onTop }), panel, props.className)}
      >
        <SelectPrimitive.Viewport>{props.children}</SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};

export type SelectItemProps = SelectPrimitive.SelectItemProps;

export const SelectItem = (props: SelectItemProps) => {
  return (
    <SelectPrimitive.Item
      {...props}
      className={mergeClasses(menuItem, props.className)}
    >
      <SelectPrimitive.ItemText>{props.children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <CheckIcon />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
};

export type SelectGroupProps = SelectPrimitive.SelectGroupProps;

export const SelectGroup = SelectPrimitive.Group;

export type SelectLabelProps = SelectPrimitive.SelectLabelProps;

export const SelectLabel = (props: SelectLabelProps) => {
  return (
    <SelectPrimitive.Label
      {...props}
      className={mergeClasses(menuLabel, props.className)}
    >
      {props.children}
    </SelectPrimitive.Label>
  );
};

export type SelectSeparatorProps = SelectPrimitive.SelectSeparatorProps;

export const SelectSeparator = (props: SelectSeparatorProps) => {
  return (
    <SelectPrimitive.Separator
      {...props}
      data-orientation="horizontal"
      className={mergeClasses(menuSeparator, props.className)}
    >
      {props.children}
    </SelectPrimitive.Separator>
  );
};
