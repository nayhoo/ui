import { SpinnerVariants, spinnerRecipe } from "@/theme/recipes/spinner.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

type SpinnerProps = ComponentProps<typeof defaultElement, SpinnerVariants>;

export const Spinner = ({ asChild, ...props }: SpinnerProps) => {
  const variants = pick(props, ...spinnerRecipe.variants());
  const spinner = spinnerRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(spinner, props.className)}>
      {props.children}
    </Comp>
  );
};
