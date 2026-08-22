import { Spinner } from "@/components/spinner";
import {
  ButtonVariants,
  buttonIconRecipe,
  buttonRecipe,
  buttonSpinner,
} from "@/theme/recipes/button.css";
import { ComponentProps } from "@/types/component-props";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "button";

export type ButtonProps = ComponentProps<
  typeof defaultElement,
  ButtonVariants
> & {
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
  const Comp = asChild ? Slot : defaultElement;

  const buttonIcon = buttonIconRecipe({
    size: variants.size,
  });

  return (
    <Comp
      {...rest}
      className={mergeClasses(button, rest.className)}
      disabled={rest.disabled || Boolean(variants.loading)}
      {...(leftIcon && { "data-left-icon": "" })}
      {...(rightIcon && { "data-right-icon": "" })}
    >
      {leftIcon && <Slot className={buttonIcon}>{leftIcon}</Slot>}

      {rest.children}

      {rightIcon && <Slot className={buttonIcon}>{rightIcon}</Slot>}

      {variants.loading && <Spinner className={buttonSpinner} />}
    </Comp>
  );
};
