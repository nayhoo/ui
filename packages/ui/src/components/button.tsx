import { Spinner } from "@/components/spinner";
import {
  ButtonVariants,
  button,
  buttonIconRecipe,
} from "@/theme/styles/button.css";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";
import { Text } from "./text";

export type ButtonProps = React.ComponentProps<"button"> &
  ButtonVariants &
  (
    | {
        leftIcon?: React.ReactNode;
        rightIcon?: never;
      }
    | {
        leftIcon?: never;
        rightIcon?: React.ReactNode;
      }
  );

export const Button = ({ leftIcon, rightIcon, ...props }: ButtonProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...button.variants(),
  );

  const icon = buttonIconRecipe({
    size: variants.size,
  });

  const isLoading = Boolean(variants.loading);

  const disabled = rest.disabled || isLoading;

  return (
    <button
      {...rest}
      className={mergeClasses(button(variants), rest.className)}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {isLoading && !rightIcon && <Spinner size={variants.size} />}
      {!isLoading && leftIcon && <Slot className={icon}>{leftIcon}</Slot>}

      <Text asChild color="inherit" size={variants.size}>
        <span>{rest.children}</span>
      </Text>

      {isLoading && rightIcon && <Spinner size={variants.size} />}
      {!isLoading && rightIcon && <Slot className={icon}>{rightIcon}</Slot>}
    </button>
  );
};
