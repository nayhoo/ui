import { Spinner } from "@/components/spinner";
import {
  IconButtonVariants,
  iconButtonRecipe,
} from "@/theme/recipes/icon-button.css";
import { ComponentProps } from "@/types/component-props";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "button";

export type IconButtonProps = ComponentProps<
  typeof defaultElement,
  IconButtonVariants
>;

export const IconButton = ({ asChild, ...props }: IconButtonProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...iconButtonRecipe.variants(),
  );
  const iconButton = iconButtonRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp
      role="button"
      {...rest}
      className={mergeClasses(iconButton, rest.className)}
      disabled={rest.disabled || Boolean(variants.loading)}
    >
      {rest.children}

      {variants.loading && (
        <Spinner size={variants.size} style={{ position: "absolute" }} />
      )}
    </Comp>
  );
};
