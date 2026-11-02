import { Spinner } from "@/components/spinner";
import {
  ButtonVariants,
  buttonIconRecipe,
  buttonRecipe,
} from "@/theme/recipes/button.css";
import { ComponentProps } from "@/types/component-props";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";
import { Text } from "./text";

export type ButtonProps = ComponentProps<"button", ButtonVariants> &
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

export const Button = ({
  asChild,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...buttonRecipe.variants(),
  );
  const button = buttonRecipe(variants);

  const icon = buttonIconRecipe({
    size: variants.size,
  });

  const isLoading = Boolean(variants.loading);

  const disabled = rest.disabled || isLoading;

  return (
    <button
      {...rest}
      className={mergeClasses(button, rest.className)}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {isLoading && !rightIcon && <Spinner size={variants.size} />}
      {!isLoading && leftIcon && <Slot className={icon}>{leftIcon}</Slot>}

      <Text asChild size={variants.size}>
        <span>{rest.children}</span>
      </Text>

      {isLoading && rightIcon && <Spinner size={variants.size} />}
      {!isLoading && rightIcon && <Slot className={icon}>{rightIcon}</Slot>}
    </button>
  );
};
