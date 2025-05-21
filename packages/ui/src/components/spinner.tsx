import { SpinnerVariants, spinnerRecipe } from "@/theme/recipes/spinner.css";
import { ComponentProps } from "@/types/component-props";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

export type SpinnerProps = ComponentProps<
  typeof defaultElement,
  SpinnerVariants
>;

export const Spinner = ({ asChild, ...props }: SpinnerProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...spinnerRecipe.variants(),
  );
  const spinner = spinnerRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...rest} className={mergeClasses(spinner, rest.className)}>
      {rest.children}
    </Comp>
  );
};
