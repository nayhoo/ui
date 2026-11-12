import { spinner, SpinnerVariants } from "@/theme/styles/spinner.css";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";

export type SpinnerProps = React.ComponentProps<"div"> & SpinnerVariants;

export const Spinner = (props: SpinnerProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...spinner.variants(),
  );

  return (
    <div
      aria-label="Loading"
      role="status"
      {...rest}
      className={mergeClasses(spinner(variants), rest.className)}
    >
      {rest.children}
    </div>
  );
};
