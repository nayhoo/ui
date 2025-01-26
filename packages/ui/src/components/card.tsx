import React from "react";
import { CardVariants, cardRecipe } from "@/recipes/card.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

type CardProps = ComponentProps<typeof defaultElement, CardVariants>;

export const Card = ({ asChild, disableElevation, variant, ...props }: CardProps) => {
  const card = cardRecipe({ disableElevation, variant });
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(card, props.className)}>
      {props.children}
    </Comp>
  );
};
