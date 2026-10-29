import { boxRecipe, BoxVariants } from "@/theme/recipes/box.css";
import { ComponentProps } from "@/types/component-props";
import { extractVariantsFromProps } from "@/utils";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

export type BoxProps = ComponentProps<typeof defaultElement, BoxVariants>;

export const Box = ({ asChild, ...props }: BoxProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...boxRecipe.variants(),
  );
  const box = boxRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...rest} className={mergeClasses(box, props.className)}>
      {props.children}
    </Comp>
  );
};
