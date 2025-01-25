import { GridVariants, gridRecipe } from "@/recipes/grid.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

type GridProps = ComponentProps<typeof defaultElement, GridVariants>;

export const Grid = ({
  asChild,
  align,
  columns,
  flow,
  gap,
  gapX,
  gapY,
  justify,
  rows,
  ...props
}: GridProps) => {
  const grid = gridRecipe({
    align,
    columns,
    flow,
    gap,
    gapX,
    gapY,
    justify,
    rows,
  });
  const Comp = asChild ? Slot : defaultElement;
  return (
    <Comp {...props} className={mergeClasses(grid, props.className)}>
      {props.children}
    </Comp>
  );
};
