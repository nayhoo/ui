import { Box } from "@/components/box";
import { IconButton } from "@/components/icon-button";
import {
  dialogBody,
  dialogContent,
  DialogContentVariants,
  dialogDescription,
  dialogFooter,
  dialogHeader,
  dialogOverlay,
  dialogTitle,
} from "@/theme/styles/dialog.css";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
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
    title?: string;
  };

export const DialogContent = ({
  children,
  title,
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
        className={mergeClasses(dialogContent(variants), rest.className)}
      >
        <DialogHeader>
          {title && (
            <DialogPrimitive.Title className={dialogTitle}>
              {title}
            </DialogPrimitive.Title>
          )}

          <DialogClose asChild>
            <IconButton style={{ marginLeft: "auto" }} variant="ghost">
              <svg
                clipRule="evenodd"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                height={20}
                width={20}
                fill="currentColor"
              >
                <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
              </svg>
            </IconButton>
          </DialogClose>
        </DialogHeader>

        {children}
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
    <Box className={dialogFooter} display="flex" gap="2" justify="end">
      {children}
    </Box>
  );
};

export type DialogBodyProps = { children: React.ReactNode };

export const DialogBody = ({ children }: DialogBodyProps) => {
  return (
    <Box className={dialogBody} direction="column" display="flex" gap="4">
      {children}
    </Box>
  );
};

type DialogHeaderProps = { children: React.ReactNode };

const DialogHeader = ({ children }: DialogHeaderProps) => {
  return (
    <Box align="center" className={dialogHeader} display="flex">
      {children}
    </Box>
  );
};

export type DialogTriggerProps = DialogPrimitive.DialogTriggerProps;

export const DialogTrigger = DialogPrimitive.Trigger;
