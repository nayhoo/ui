import React from "react";
import { badgeRecipe, BadgeVariants } from "@/recipes/badge.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "span";

type BadgeProps = ComponentProps<typeof defaultElement, BadgeVariants & { label: string }>;

export const Badge = ({ asChild, color, size, label, ...props }: BadgeProps) => {
  const badge = badgeRecipe({ color, size });
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(badge, props.className)}>
      {label}
    </Comp>
  );
};
