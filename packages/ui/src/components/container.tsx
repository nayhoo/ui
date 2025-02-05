import { ContainerVariants, containerRecipe } from "@/recipes/container.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

type ContainerProps = ComponentProps<typeof defaultElement, ContainerVariants>;

export const Container = ({ asChild, ...props }: ContainerProps) => {
  const variants = pick(props, ...containerRecipe.variants());
  const container = containerRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(container, props.className)}>
      {props.children}
    </Comp>
  );
};
