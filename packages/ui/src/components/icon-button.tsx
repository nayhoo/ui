import { Spinner } from "@/components/spinner";
import {
  IconButtonVariants,
  iconButtonRecipe,
} from "@/recipes/icon-button.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "button";

type IconButtonProps = ComponentProps<
  typeof defaultElement,
  IconButtonVariants
>;

export const IconButton = ({ asChild, ...props }: IconButtonProps) => {
  const variants = pick(props, ...iconButtonRecipe.variants());
  const iconButton = iconButtonRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp
      {...props}
      className={mergeClasses(iconButton, props.className)}
      disabled={props.disabled || Boolean(variants.loading)}
    >
      {props.children}
      {variants.loading && <Spinner style={{ position: "absolute" }} />}
    </Comp>
  );
};
