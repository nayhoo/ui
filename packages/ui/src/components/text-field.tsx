import { textField, TextFieldVariants } from "@/theme/styles/text-field.css";
import { ComponentProps } from "@/types/component-props";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "input";

export type TextFieldProps = Omit<
  ComponentProps<typeof defaultElement>,
  "size"
> &
  TextFieldVariants;

export const TextField = ({
  asChild,
  children,
  className,
  ...props
}: TextFieldProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...textField.variants(),
  );
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...rest} className={mergeClasses(textField(variants), className)}>
      {children}
    </Comp>
  );
};
