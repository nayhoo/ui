import { GridVariants, gridRecipe } from "@/theme/recipes/grid.css";
import { ComponentProps } from "@/types/component-props";
import { extractVariantsFromProps } from "@/utils/get-variants";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

export type GridProps = ComponentProps<typeof defaultElement, GridVariants>;

export const Grid = ({ asChild, ...props }: GridProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...gridRecipe.variants(),
  );
  const grid = gridRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...rest} className={mergeClasses(grid, rest.className)}>
      {rest.children}
    </Comp>
  );
};
