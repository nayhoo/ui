import { ContainerVariants, containerRecipe } from "@/recipes/container.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

type ContainerProps = ComponentProps<typeof defaultElement, ContainerVariants>;

export const Container = ({ asChild, size, ...props }: ContainerProps) => {
  const container = containerRecipe({ size });
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(container, props.className)}>
      {props.children}
    </Comp>
  );
};
