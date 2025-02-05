import { boxRecipe, BoxVariants } from "@/recipes/box.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

type BoxProps = ComponentProps<typeof defaultElement, BoxVariants>;

export const Box = ({ asChild, ...props }: BoxProps) => {
  const variants = pick(props, ...boxRecipe.variants());
  const box = boxRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(box, props.className)}>
      {props.children}
    </Comp>
  );
};
