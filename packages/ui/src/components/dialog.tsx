import { Box } from "@/components/box";
import { IconButton } from "@/components/icon-button";
import { theme } from "@/theme";
import {
  dialogBody,
  dialogContent,
  DialogContentVariants,
  dialogFooter,
  dialogHeader,
  dialogOverlay,
} from "@/theme/styles/dialog.css";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Heading } from "./heading";
import { Text } from "./text";

export type DialogProps = DialogPrimitive.DialogProps;

/**
 * @example
 *  <Dialog>
 *    <DialogTrigger asChild>
 *      <Button>Open dialog</Button>
 *    </DialogTrigger>
 *
 *    <DialogContent>
 *      <DialogHeader>
 *        <DialogTitle>Title</DialogTitle>
 *      </DialogHeader>
 *
 *      <DialogBody>
 *        <DialogDescription>Description</DialogDescription>
 *      </DialogBody>
 *
 *      <DialogFooter>
 *        <DialogClose asChild>
 *          <Button>Cancel</Button>
 *        </DialogClose>
 *
 *        <Button sentiment="brand" variant="solid">
 *          Submit
 *        </Button>
 *      </DialogFooter>
 *    </DialogContent>
 *  </Dialog>
 */
export const Dialog = DialogPrimitive.Root;

export type DialogCloseProps = DialogPrimitive.DialogCloseProps;

export const DialogClose = DialogPrimitive.Close;

export type DialogContentProps = DialogPrimitive.DialogContentProps &
  DialogContentVariants;

export const DialogContent = ({
  children,
  className,
  ...props
}: DialogContentProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...dialogContent.variants(),
  );

  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={dialogOverlay} />
      <DialogPrimitive.Content
        {...rest}
        className={mergeClasses(dialogContent(variants), className)}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

export type DialogDescriptionProps = DialogPrimitive.DialogDescriptionProps;

export const DialogDescription = (props: DialogDescriptionProps) => {
  return (
    <Text asChild color="subtle">
      <DialogPrimitive.Description {...props} />
    </Text>
  );
};

export type DialogFooterProps = {
  children: React.ReactNode;
};

export const DialogFooter = ({ children }: DialogFooterProps) => {
  return (
    <Box className={dialogFooter} display="flex" gap="2" justify="end">
      {children}
    </Box>
  );
};

export type DialogBodyProps = {
  children: React.ReactNode;
};

export const DialogBody = ({ children }: DialogBodyProps) => {
  return (
    <Box className={dialogBody} direction="column" display="flex" gap="4">
      {children}
    </Box>
  );
};

export type DialogHeaderProps = {
  children: React.ReactNode;
};

export const DialogHeader = ({ children }: DialogHeaderProps) => {
  return (
    <Box align="center" className={dialogHeader} display="flex">
      {children}

      <DialogClose asChild>
        <IconButton style={{ marginLeft: "auto" }} variant="ghost">
          <Cross2Icon />
        </IconButton>
      </DialogClose>
    </Box>
  );
};

export type DialogTitleProps = DialogPrimitive.DialogTitleProps;

export const DialogTitle = (props: DialogTitleProps) => {
  return (
    <Box style={{ marginLeft: theme.space[2] }}>
      <Heading as="h5" asChild>
        <DialogPrimitive.Title {...props} />
      </Heading>
    </Box>
  );
};

export type DialogTriggerProps = DialogPrimitive.DialogTriggerProps;

export const DialogTrigger = DialogPrimitive.Trigger;
