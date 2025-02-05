import { StatusVariants, statusRecipe } from "@/recipes/status.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

type statusProps = ComponentProps<typeof defaultElement, StatusVariants>;

export const Status = ({ asChild, size, variant, ...props }: statusProps) => {
  const status = statusRecipe({ size, variant });
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(status, props.className)}>
      {props.children}
    </Comp>
  );
};
