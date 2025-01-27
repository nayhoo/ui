import { SkeletonVariants, skeletonRecipe } from "@/recipes/skeleton.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

type SkeletonProps = ComponentProps<typeof defaultElement, SkeletonVariants>;

export const Skeleton = ({ asChild, variant, ...props }: SkeletonProps) => {
  const skeleton = skeletonRecipe({ variant });
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(skeleton, props.className)}>
      {props.children}
    </Comp>
  );
};
