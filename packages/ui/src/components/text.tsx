import { TextVariants, textRecipe } from "@/recipes/text.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "span";

type TextProps = ComponentProps<typeof defaultElement, TextVariants>;

export const Text = ({ asChild, color, size, weight, ...props }: TextProps) => {
  const text = textRecipe({ color, size, weight });
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(text, props.className)}>
      {props.children}
    </Comp>
  );
};
