import {
  TextAreaVariants,
  textAreaRecipe,
} from "@/theme/recipes/text-area.css";
import { ComponentProps } from "@/types/component-props";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "textarea";

export type TextAreaProps = ComponentProps<
  typeof defaultElement,
  TextAreaVariants
>;

export const TextArea = ({ asChild, ...props }: TextAreaProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...textAreaRecipe.variants(),
  );
  const textArea = textAreaRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...rest} className={mergeClasses(textArea, rest.className)}>
      {rest.children}
    </Comp>
  );
};
