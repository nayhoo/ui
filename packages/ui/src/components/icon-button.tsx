import { Spinner } from "@/components/spinner";
import { iconButton, IconButtonVariants } from "@/theme/styles/icon-button.css";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";

export type IconButtonProps = React.ComponentProps<"button"> &
  IconButtonVariants;

export const IconButton = (props: IconButtonProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...iconButton.variants(),
  );

  const disabled = rest.disabled || Boolean(variants.loading);

  return (
    <button
      {...rest}
      className={mergeClasses(iconButton(variants), rest.className)}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {variants.loading ? (
        <Spinner size={variants.size} />
      ) : (
        // TODO: make this iconName, determine size/color in here?
        rest.children
      )}
    </button>
  );
};
