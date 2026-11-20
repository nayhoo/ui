import { Spinner } from "@/components/spinner";
import { iconButton, IconButtonVariants } from "@/theme/styles/icon-button.css";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";

export type IconButtonProps = React.ComponentProps<"button"> &
  IconButtonVariants;

export const IconButton = ({
  children,
  className,
  disabled,
  ...props
}: IconButtonProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...iconButton.variants(),
  );

  const isDisabled = disabled || Boolean(variants.loading);

  return (
    <button
      {...rest}
      aria-disabled={isDisabled}
      className={mergeClasses(iconButton(variants), className)}
      disabled={isDisabled}
    >
      {variants.loading ? (
        <Spinner size={variants.size} />
      ) : (
        // TODO: make this iconName, determine size/color in here?
        children
      )}
    </button>
  );
};
