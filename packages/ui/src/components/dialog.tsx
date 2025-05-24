import { Box } from "@/components/box";
import { Flex } from "@/components/flex";
import { theme } from "@/theme";
import {
  DialogContentVariants,
  dialogContentRecipe,
  dialogOverlayRecipe,
} from "@/theme/recipes/dialog.css";
import {
  dialogDescription,
  dialogFooter,
  dialogHeader,
  dialogTitle,
} from "@/theme/styles/dialog.css";
import { extractVariantsFromProps, mergeClasses } from "@/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export type DialogProps = DialogPrimitive.DialogProps;

/**
 * @see https://github.com/nayhoo/ui/blob/main/apps/react-cosmos/src/dialog.fixture.tsx
 */
export const Dialog = DialogPrimitive.Root;

export type DialogCloseProps = DialogPrimitive.DialogCloseProps;

export const DialogClose = DialogPrimitive.Close;

export type DialogContentProps = DialogPrimitive.DialogContentProps &
  DialogContentVariants & {
    components?: { Footer?: React.ReactNode; Header?: React.ReactNode };
    disableOverlayBlur?: boolean;
  };

export const DialogContent = ({
  children,
  components,
  disableOverlayBlur = false,
  ...props
}: DialogContentProps) => {
  const dialogOverlay = dialogOverlayRecipe({ disableOverlayBlur });
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...dialogContentRecipe.variants(),
  );
  const dialogContent = dialogContentRecipe(variants);

  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={dialogOverlay} />
      <DialogPrimitive.Content
        {...rest}
        className={mergeClasses(dialogContent, rest.className)}
      >
        {components?.Header}

        <Box style={{ padding: theme.space[5] }}>{children}</Box>

        {components?.Footer}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

export type DialogDescriptionProps = DialogPrimitive.DialogDescriptionProps;

export const DialogDescription = ({ ...props }: DialogDescriptionProps) => {
  return (
    <DialogPrimitive.Description
      {...props}
      className={mergeClasses(dialogDescription, props.className)}
    />
  );
};

export type DialogFooterProps = { children: React.ReactNode };

export const DialogFooter = ({ children }: DialogFooterProps) => {
  return (
    <Flex
      className={dialogFooter}
      direction={{ initial: "column", sm: "row" }}
      gap="2"
      justify="end"
    >
      {children}
    </Flex>
  );
};

export type DialogHeaderProps = { children: React.ReactNode };

export const DialogHeader = ({ children }: DialogHeaderProps) => {
  return <Flex className={dialogHeader}>{children}</Flex>;
};

export type DialogTitleProps = DialogPrimitive.DialogTitleProps;

export const DialogTitle = ({ ...props }: DialogTitleProps) => {
  return (
    <DialogPrimitive.Title
      {...props}
      className={mergeClasses(dialogTitle, props.className)}
    />
  );
};

export type DialogTriggerProps = DialogPrimitive.DialogTriggerProps;

export const DialogTrigger = DialogPrimitive.Trigger;
