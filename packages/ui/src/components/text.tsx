import { TextVariants, textRecipe } from "@/recipes/text.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "span";

type TextProps = ComponentProps<typeof defaultElement, TextVariants>;

export const Text = ({ asChild, ...props }: TextProps) => {
  const variants = pick(props, ...textRecipe.variants());
  const text = textRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(text, props.className)}>
      {props.children}
    </Comp>
  );
};
