import { Box } from "@/components/box";
import { IconButton } from "@/components/icon-button";
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
 *      <Button>Press me</Button>
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
 *        <Button sentiment="accented" variant="solid">
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

export const DialogContent = ({ children, ...props }: DialogContentProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...dialogContent.variants(),
  );

  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={dialogOverlay} />
      <DialogPrimitive.Content
        {...rest}
        className={mergeClasses(dialogContent(variants), rest.className)}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

export type DialogDescriptionProps = Omit<
  DialogPrimitive.DialogDescriptionProps,
  "asChild"
>;

export const DialogDescription = ({
  children,
  ...props
}: DialogDescriptionProps) => {
  return (
    <DialogPrimitive.Description {...props} asChild>
      <Text color="subtle">{children}</Text>
    </DialogPrimitive.Description>
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

export type DialogTitleProps = {
  children: string;
};

export const DialogTitle = ({ children }: DialogTitleProps) => {
  return (
    <DialogPrimitive.Title asChild>
      <Heading as="h5">{children}</Heading>
    </DialogPrimitive.Title>
  );
};

export type DialogTriggerProps = DialogPrimitive.DialogTriggerProps;

export const DialogTrigger = DialogPrimitive.Trigger;
