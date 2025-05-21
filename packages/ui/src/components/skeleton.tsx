import { SkeletonVariants, skeletonRecipe } from "@/theme/recipes/skeleton.css";
import { ComponentProps } from "@/types/component-props";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

export type SkeletonProps = ComponentProps<
  typeof defaultElement,
  SkeletonVariants
>;

export const Skeleton = ({ asChild, ...props }: SkeletonProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...skeletonRecipe.variants(),
  );
  const skeleton = skeletonRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...rest} className={mergeClasses(skeleton, rest.className)}>
      {rest.children}
    </Comp>
  );
};
