import {
  menuContent,
  MenuContentVariants,
  menuItem,
  menuLabel,
  menuSeparator,
} from "@/theme/styles/menu.css";
import { overlay } from "@/theme/styles/overlay.css";
import {
  itemIndicator,
  scrollButton,
  selectTrigger,
  SelectTriggerVariants,
} from "@/theme/styles/select.css";
import { mergeClasses } from "@/utils/merge-classes";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";

export type SelectProps = SelectPrimitive.SelectProps;

export const Select = SelectPrimitive.Root;

export type SelectTriggerProps = SelectPrimitive.SelectTriggerProps &
  SelectTriggerVariants;

export const SelectTrigger = ({
  children,
  className,
  size,
  variant,
  ...props
}: SelectTriggerProps) => {
  return (
    <SelectPrimitive.Trigger
      {...props}
      asChild
      className={mergeClasses(selectTrigger({ size, variant }), className)}
    >
      <SelectPrimitive.Icon>
        {children}

        <ChevronDownIcon />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};

export type SelectValueProps = SelectPrimitive.SelectValueProps;

export const SelectValue = SelectPrimitive.Value;

export type SelectContentProps = SelectPrimitive.SelectContentProps &
  MenuContentVariants & { size?: "1" | "2" };

export const SelectContent = ({
  children,
  className,
  onOverlay,
  size = "2",
  ...props
}: SelectContentProps) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        sideOffset={4}
        {...props}
        className={mergeClasses(menuContent({ onOverlay }), overlay, className)}
        data-size={size}
      >
        <SelectPrimitive.ScrollUpButton className={scrollButton}>
          <ChevronUpIcon />
        </SelectPrimitive.ScrollUpButton>

        <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>

        <SelectPrimitive.ScrollDownButton className={scrollButton}>
          <ChevronDownIcon />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};

export type SelectItemProps = SelectPrimitive.SelectItemProps;

export const SelectItem = ({
  children,
  className,
  ...props
}: SelectItemProps) => {
  return (
    <SelectPrimitive.Item
      {...props}
      className={mergeClasses(menuItem, className)}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

      <SelectPrimitive.ItemIndicator className={itemIndicator}>
        <CheckIcon />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
};

export type SelectGroupProps = SelectPrimitive.SelectGroupProps;

export const SelectGroup = SelectPrimitive.Group;

export type SelectLabelProps = SelectPrimitive.SelectLabelProps;

export const SelectLabel = ({ className, ...props }: SelectLabelProps) => {
  return (
    <SelectPrimitive.Label
      {...props}
      className={mergeClasses(menuLabel, className)}
    />
  );
};

export type SelectSeparatorProps = SelectPrimitive.SelectSeparatorProps;

export const SelectSeparator = ({
  className,
  ...props
}: SelectSeparatorProps) => {
  return (
    <SelectPrimitive.Separator
      {...props}
      className={mergeClasses(menuSeparator, className)}
    />
  );
};
