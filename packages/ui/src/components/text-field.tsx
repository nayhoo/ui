import { TextFieldVariants, textFieldRecipe } from "@/recipes/text-field.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "input";

type TextFieldProps = ComponentProps<typeof defaultElement, TextFieldVariants>;

export const TextField = ({
  asChild,
  cursor,
  error,
  size,
  variant,
  ...props
}: TextFieldProps) => {
  const textField = textFieldRecipe({ cursor, error, size, variant });
  const Comp = asChild ? Slot : defaultElement;
  return (
    <Comp {...props} className={mergeClasses(textField, props.className)}>
      {props.children}
    </Comp>
  );
};
