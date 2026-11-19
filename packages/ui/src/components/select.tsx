import {
  menuContent,
  menuItem,
  menuLabel,
  menuSeparator,
} from "@/theme/styles/menu.css";
import { overlay } from "@/theme/styles/overlay.css";
import {
  itemIndicator,
  scrollButton,
  selectTrigger,
} from "@/theme/styles/select.css";
import { mergeClasses } from "@/utils/merge-classes";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as SelectPrimitive from "@radix-ui/react-select";
import React from "react";

interface UseSelectProps {
  size?: "1" | "2";
  variant?: "bordered" | "ghost";
  /** if used in an overlay element (dialog/nav) */
  onOverlay?: boolean;
}

const defaultContext: UseSelectProps = {
  size: undefined,
  variant: undefined,
  onOverlay: undefined,
};

const SelectContext = React.createContext<UseSelectProps | undefined>(
  undefined,
);

const useSelect = () => React.useContext(SelectContext) ?? defaultContext;

export type SelectProps = SelectPrimitive.SelectProps & UseSelectProps;

export const Select = ({ size, variant, onOverlay, ...props }: SelectProps) => {
  const providerValue = React.useMemo(
    () => ({
      size,
      variant,
      onOverlay,
    }),
    [size, variant, onOverlay],
  );

  return (
    <SelectContext.Provider value={providerValue}>
      <SelectPrimitive.Root {...props} />
    </SelectContext.Provider>
  );
};

export type SelectTriggerProps = SelectPrimitive.SelectTriggerProps;

export const SelectTrigger = ({
  children,
  className,
  ...props
}: SelectTriggerProps) => {
  const { size, variant } = useSelect();

  console.log(props.value);

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

export type SelectContentProps = SelectPrimitive.SelectContentProps;

export const SelectContent = ({
  children,
  className,
  ...props
}: SelectContentProps) => {
  const { onOverlay } = useSelect();

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        {...props}
        className={mergeClasses(menuContent({ onOverlay }), overlay, className)}
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
  const { size } = useSelect();

  return (
    <SelectPrimitive.Item
      {...props}
      className={mergeClasses(menuItem({ size }), className)}
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
  const { size } = useSelect();

  return (
    <SelectPrimitive.Label
      {...props}
      className={mergeClasses(menuLabel({ size }), className)}
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
