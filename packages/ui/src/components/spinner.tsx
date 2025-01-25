import { SpinnerVariants, spinnerRecipe } from "@/recipes/spinner.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

type SpinnerProps = ComponentProps<typeof defaultElement, SpinnerVariants>;

export const Spinner = ({ asChild, size, ...props }: SpinnerProps) => {
  const spinner = spinnerRecipe({ size });
  const Comp = asChild ? Slot : defaultElement;
  return (
    <Comp {...props} className={mergeClasses(spinner, props.className)}>
      {props.children}
    </Comp>
  );
};
