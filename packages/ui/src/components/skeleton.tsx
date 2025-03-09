import { SkeletonVariants, skeletonRecipe } from "@/theme/recipes/skeleton.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

type SkeletonProps = ComponentProps<typeof defaultElement, SkeletonVariants>;

export const Skeleton = ({ asChild, ...props }: SkeletonProps) => {
  const variants = pick(props, ...skeletonRecipe.variants());
  const skeleton = skeletonRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(skeleton, props.className)}>
      {props.children}
    </Comp>
  );
};
