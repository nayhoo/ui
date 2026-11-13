import {
  checkbox,
  checkboxIndicator,
  CheckboxVariants,
} from "@/theme/styles/checkbox.css";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export type CheckboxProps = CheckboxPrimitive.CheckboxProps & CheckboxVariants;

export const Checkbox = ({ ...props }: CheckboxProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...checkbox.variants(),
  );

  return (
    <CheckboxPrimitive.Root
      {...rest}
      className={mergeClasses(checkbox(variants), rest.className)}
    >
      <CheckboxPrimitive.CheckboxIndicator>
        <CheckIcon className={checkboxIndicator({ size: variants.size })} />
      </CheckboxPrimitive.CheckboxIndicator>
    </CheckboxPrimitive.Root>
  );
};
