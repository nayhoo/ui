import React from "react";
import { Spinner } from "@/components/spinner";
import { ButtonVariants, buttonRecipe } from "@/recipes/button.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "button";

type ButtonProps = ComponentProps<typeof defaultElement, ButtonVariants>;

export const Button = ({
  asChild,
  color,
  fullWidth,
  loading,
  shape,
  size,
  variant,
  ...props
}: ButtonProps) => {
  // button.variants();
  // -> ['color', 'size']
  // interesting, can i use this to pick out props?
  const button = buttonRecipe({
    color,
    fullWidth,
    loading,
    shape,
    size,
    variant,
  });
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp
      {...props}
      className={mergeClasses(button, props.className)}
      disabled={props.disabled || Boolean(loading)}
    >
      {props.children}
      {loading && <Spinner style={{ position: "absolute" }} />}
    </Comp>
  );
};
