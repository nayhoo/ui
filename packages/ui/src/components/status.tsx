import { StatusVariants, statusRecipe } from "@/theme/recipes/status.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

type StatusProps = ComponentProps<typeof defaultElement, StatusVariants>;

export const Status = ({ asChild, ...props }: StatusProps) => {
  const variants = pick(props, ...statusRecipe.variants());
  const status = statusRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(status, props.className)}>
      {props.children}
    </Comp>
  );
};
