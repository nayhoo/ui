import {
  switchRecipe,
  switchThumbRecipe,
  SwitchThumbVariants,
  SwitchVariants,
} from "@/theme/recipes/switch.css";
import { extractVariantsFromProps } from "@/utils/get-variants";
import { mergeClasses } from "@/utils/merge-classes";
import * as SwitchPrimitive from "@radix-ui/react-switch";

export type SwitchThumbProps = SwitchPrimitive.SwitchThumbProps &
  SwitchThumbVariants;

export const SwitchThumb = ({ ...props }: SwitchThumbProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...switchThumbRecipe.variants(),
  );
  const switchThumb = switchThumbRecipe(variants);

  return (
    <SwitchPrimitive.Thumb
      {...rest}
      className={mergeClasses(switchThumb, rest.className)}
    />
  );
};

export type SwitchProps = SwitchPrimitive.SwitchProps & SwitchVariants;

export const Switch = ({ ...props }: SwitchProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...switchRecipe.variants(),
  );
  const _switch = switchRecipe(variants); // 'switch' is not allowed as a variable declaration name.ts(1389)

  return (
    <SwitchPrimitive.Root
      {...rest}
      className={mergeClasses(_switch, rest.className)}
    >
      <SwitchThumb size={variants.size} />
    </SwitchPrimitive.Root>
  );
};
