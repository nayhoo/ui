import { badgeRecipe, BadgeVariants } from "@/theme/recipes/badge.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "span";

export type BadgeProps = ComponentProps<
  typeof defaultElement,
  BadgeVariants & { label: string }
>;

export const Badge = ({ asChild, label, ...props }: BadgeProps) => {
  const variants = pick(props, ...badgeRecipe.variants());
  const badge = badgeRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(badge, props.className)}>
      {label}
    </Comp>
  );
};
