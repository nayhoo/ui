import React from "react";
import { panelRecipe, PanelVariants } from "@/recipes/panel.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

type BoxProps = ComponentProps<typeof defaultElement, PanelVariants>;

export const Panel = ({ asChild, ...props }: BoxProps) => {
  const panel = panelRecipe({});
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(panel, props.className)}>
      {props.children}
    </Comp>
  );
};
