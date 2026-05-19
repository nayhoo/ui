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
} from "@/theme/styles/dialog.css";
import { extractVariantsFromProps, mergeClasses } from "@/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { IconButton } from "./icon-button";

export type DialogProps = DialogPrimitive.DialogProps;

/**
 * @see https://github.com/nayhoo/ui/blob/main/apps/react-cosmos/src/dialog.fixture.tsx
 */
export const Dialog = DialogPrimitive.Root;

export type DialogCloseProps = DialogPrimitive.DialogCloseProps;

export const DialogClose = DialogPrimitive.Close;

export type DialogContentProps = DialogPrimitive.DialogContentProps &
  DialogContentVariants & {
    disableOverlayBlur?: boolean;
    title?: string;
  };

export const DialogContent = ({
  children,
  disableOverlayBlur = false,
  title,
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
        <DialogHeader>
          {title && (
            <DialogPrimitive.Title style={{ marginLeft: theme.space[2] }}>
              {title}
            </DialogPrimitive.Title>
          )}

          <DialogClose asChild>
            <IconButton style={{ marginLeft: "auto" }}>
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

export type DialogBodyProps = { children: React.ReactNode };

export const DialogBody = ({ children }: DialogBodyProps) => {
  return <Box style={{ padding: theme.space[4] }}>{children}</Box>;
};

type DialogHeaderProps = { children: React.ReactNode };

const DialogHeader = ({ children }: DialogHeaderProps) => {
  return (
    <Flex className={dialogHeader} align="center">
      {" "}
      {children}
    </Flex>
  );
};

export type DialogTriggerProps = DialogPrimitive.DialogTriggerProps;

export const DialogTrigger = DialogPrimitive.Trigger;
