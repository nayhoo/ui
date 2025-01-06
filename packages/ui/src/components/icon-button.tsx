import { Spinner } from "@/components/spinner";
import {
  IconButtonVariants,
  iconButtonRecipe,
} from "@/recipes/icon-button.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "button";

type IconButtonProps = ComponentProps<
  typeof defaultElement,
  IconButtonVariants
>;

export const IconButton = ({
  asChild,
  loading,
  size,
  variant,
  ...props
}: IconButtonProps) => {
  const iconButton = iconButtonRecipe({ loading, size, variant });
  const Comp = asChild ? Slot : defaultElement;
  return (
    <Comp
      {...props}
      className={mergeClasses(iconButton, props.className)}
      disabled={props.disabled || Boolean(loading)}
    >
      {props.children}
      {loading && <Spinner style={{ position: "absolute" }} />}
    </Comp>
  );
};
