import { TextVariants, textRecipe } from "@/theme/recipes/text.css";
import { ComponentProps } from "@/types/component-props";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "span";

export type TextProps = ComponentProps<typeof defaultElement, TextVariants>;

export const Text = ({ asChild, ...props }: TextProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...textRecipe.variants(),
  );
  const text = textRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...rest} className={mergeClasses(text, rest.className)}>
      {rest.children}
    </Comp>
  );
};
