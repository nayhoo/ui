import {
  ContainerVariants,
  containerRecipe,
} from "@/theme/recipes/container.css";
import { ComponentProps } from "@/types/component-props";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

export type ContainerProps = ComponentProps<
  typeof defaultElement,
  ContainerVariants
>;

export const Container = ({ asChild, ...props }: ContainerProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...containerRecipe.variants(),
  );
  const container = containerRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...rest} className={mergeClasses(container, rest.className)}>
      {rest.children}
    </Comp>
  );
};
