import { SpinnerVariants, spinnerRecipe } from "@/theme/recipes/spinner.css";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";

export type SpinnerProps = React.ComponentProps<"div"> & SpinnerVariants;

export const Spinner = (props: SpinnerProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...spinnerRecipe.variants(),
  );
  const spinner = spinnerRecipe(variants);

  return (
    <div
      role="status"
      aria-label="Loading"
      {...rest}
      className={mergeClasses(spinner, rest.className)}
    >
      {rest.children}
    </div>
  );
};
