import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
import {
  menu,
  menuItem,
  menuLabel,
  menuSeparator,
} from "@/theme/styles/menu.css";
import { panel } from "@/theme/styles/panel.css";
import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { mergeClasses } from "@/utils/merge-classes";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon } from "@radix-ui/react-icons";

export const DropdownMenu = DropdownMenuPrimitive.Root;

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

type DropdownMenuContentProps = DropdownMenuPrimitive.DropdownMenuContentProps;

export const DropdownMenuContent = ({ ...props }: DropdownMenuContentProps) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        {...props}
        className={mergeClasses(menu, panel, props.className)}
      />
    </DropdownMenuPrimitive.Portal>
  );
};

type DropdownMenuItemProps = DropdownMenuPrimitive.DropdownMenuItemProps;

export const DropdownMenuItem = ({ ...props }: DropdownMenuItemProps) => {
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

type DropdownMenuLabelProps = DropdownMenuPrimitive.DropdownMenuLabelProps;

export const DropdownMenuLabel = ({ ...props }: DropdownMenuLabelProps) => {
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
  DropdownMenuPrimitive.DropdownMenuSeparatorProps;

export const DropdownMenuSeparator = ({
  ...props
}: DropdownMenuSeparatorProps) => {
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
  DropdownMenuPrimitive.DropdownMenuCheckboxItemProps;

export const DropdownMenuCheckboxItem = ({
  ...props
}: DropdownMenuCheckboxItemProps) => {
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
  DropdownMenuPrimitive.DropdownMenuRadioItemProps;

export const DropdownMenuRadioItem = ({
  children,
  ...props
}: DropdownMenuRadioItemProps) => {
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
