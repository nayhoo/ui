import { FlexVariants, flexRecipe } from "@/recipes/flex.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

type FlexProps = ComponentProps<typeof defaultElement, FlexVariants>;

export const Flex = ({
  asChild,
  align,
  direction,
  gap,
  justify,
  wrap,
  ...props
}: FlexProps) => {
  const flex = flexRecipe({ align, direction, gap, justify, wrap });
  const Comp = asChild ? Slot : defaultElement;
  return (
    <Comp {...props} className={mergeClasses(flex, props.className)}>
      {props.children}
    </Comp>
  );
};
