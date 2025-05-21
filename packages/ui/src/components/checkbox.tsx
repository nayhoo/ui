import { CheckboxVariants, checkboxRecipe } from "@/theme/recipes/checkbox.css";
import { checkboxIndicator } from "@/theme/styles/checkbox.css";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export type CheckboxProps = CheckboxPrimitive.CheckboxProps & CheckboxVariants;

export const Checkbox = ({ ...props }: CheckboxProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...checkboxRecipe.variants(),
  );

  const checkbox = checkboxRecipe(variants);

  return (
    <CheckboxPrimitive.Root
      {...rest}
      className={mergeClasses(checkbox, rest.className)}
    >
      <CheckboxPrimitive.CheckboxIndicator className={checkboxIndicator}>
        <CheckIcon />
      </CheckboxPrimitive.CheckboxIndicator>
    </CheckboxPrimitive.Root>
  );
};
