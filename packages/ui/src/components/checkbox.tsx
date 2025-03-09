import {
  CheckboxIndicatorVariants,
  CheckboxVariants,
  checkboxIndicatorRecipe,
  checkboxRecipe,
} from "@/theme/recipes/checkbox.css";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

type CheckboxProps = CheckboxPrimitive.CheckboxProps &
  CheckboxVariants &
  CheckboxIndicatorVariants;

export const Checkbox = ({ ...props }: CheckboxProps) => {
  const checkbox = checkboxRecipe(pick(props, ...checkboxRecipe.variants()));
  const checkboxIndicator = checkboxIndicatorRecipe(
    pick(props, ...checkboxIndicatorRecipe.variants()),
  );

  return (
    <CheckboxPrimitive.Root
      {...props}
      className={mergeClasses(checkbox, props.className)}
    >
      <CheckboxPrimitive.CheckboxIndicator className={checkboxIndicator}>
        <CheckIcon />
      </CheckboxPrimitive.CheckboxIndicator>
    </CheckboxPrimitive.Root>
  );
};
