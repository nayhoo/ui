import { Spinner } from "@/components/spinner";
import {
  IconButtonVariants,
  iconButtonRecipe,
} from "@/theme/recipes/icon-button.css";
import { ComponentProps } from "@/types/component-props";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";

export type IconButtonProps = ComponentProps<"button", IconButtonVariants>;

export const IconButton = ({ asChild, ...props }: IconButtonProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...iconButtonRecipe.variants(),
  );
  const iconButton = iconButtonRecipe(variants);

  const disabled = rest.disabled || Boolean(variants.loading);

  return (
    <button
      {...rest}
      className={mergeClasses(iconButton, rest.className)}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {rest.children}

      {variants.loading && (
        <Spinner size={variants.size} style={{ position: "absolute" }} />
      )}
    </button>
  );
};
