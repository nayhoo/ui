import { Spinner } from "@/components/spinner";
import {
  ButtonVariants,
  buttonIconRecipe,
  buttonRecipe,
  buttonSpanRecipe,
  buttonSpinner,
} from "@/theme/recipes/button.css";
import { ComponentProps } from "@/types/component-props";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

export type ButtonProps = ComponentProps<"button", ButtonVariants> & {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

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

  const buttonIcon = buttonIconRecipe({
    size: variants.size,
  });

  const buttonSpan = buttonSpanRecipe({ loading: variants.loading });

  const disabled = rest.disabled || Boolean(variants.loading);

  return (
    <button
      {...rest}
      className={mergeClasses(button, rest.className)}
      disabled={disabled}
      aria-disabled={disabled}
      {...(leftIcon && { "data-left-icon": "" })}
      {...(rightIcon && { "data-right-icon": "" })}
    >
      {leftIcon && <Slot className={buttonIcon}>{leftIcon}</Slot>}

      <span className={buttonSpan}>{rest.children}</span>

      {rightIcon && <Slot className={buttonIcon}>{rightIcon}</Slot>}

      {variants.loading && (
        <Spinner className={buttonSpinner} size={variants.size} />
      )}
    </button>
  );
};
