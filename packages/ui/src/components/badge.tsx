import { badge, BadgeVariants } from "@/theme/styles/badge.css";
import { ComponentProps } from "@/types/component-props";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "span";

export type BadgeProps = ComponentProps<
  typeof defaultElement,
  BadgeVariants & {
    /** @deprecated use `children` instead */
    label?: string;
  }
>;

export const Badge = ({
  asChild,
  children,
  className,
  label,
  ...props
}: BadgeProps) => {
  const [variants, rest] = extractVariantsFromProps(props, ...badge.variants());
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...rest} className={mergeClasses(badge(variants), className)}>
      {label ?? children}
    </Comp>
  );
};
