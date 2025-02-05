import { TextFieldVariants, textFieldRecipe } from "@/recipes/text-field.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "input";

type TextFieldProps = ComponentProps<typeof defaultElement, TextFieldVariants>;

export const TextField = ({ asChild, ...props }: TextFieldProps) => {
  const variants = pick(props, ...textFieldRecipe.variants());
  const textField = textFieldRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(textField, props.className)}>
      {props.children}
    </Comp>
  );
};
