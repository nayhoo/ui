import {
  TextFieldVariants,
  textFieldRecipe,
} from "@/theme/recipes/text-field.css";
import { ComponentProps } from "@/types/component-props";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "input";

export type TextFieldProps = ComponentProps<
  typeof defaultElement,
  TextFieldVariants
>;

export const TextField = ({ asChild, ...props }: TextFieldProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...textFieldRecipe.variants(),
  );
  const textField = textFieldRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...rest} className={mergeClasses(textField, rest.className)}>
      {rest.children}
    </Comp>
  );
};
