import {
  switchRecipe,
  switchThumbRecipe,
  SwitchThumbVariants,
  SwitchVariants,
} from "@/theme/recipes/switch.css";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import * as SwitchPrimitive from "@radix-ui/react-switch";

export type SwitchThumbProps = SwitchPrimitive.SwitchThumbProps &
  SwitchThumbVariants;

export const SwitchThumb = ({ ...props }: SwitchThumbProps) => {
  const variants = pick(props, ...switchThumbRecipe.variants());
  const switchThumb = switchThumbRecipe(variants);

  return (
    <SwitchPrimitive.Thumb
      {...props}
      className={mergeClasses(switchThumb, props.className)}
    />
  );
};

export type SwitchProps = SwitchPrimitive.SwitchProps & SwitchVariants;

export const Switch = ({ ...props }: SwitchProps) => {
  const variants = pick(props, ...switchRecipe.variants());
  const _switch = switchRecipe(variants); // 'switch' is not allowed as a variable declaration name.ts(1389)

  return (
    <SwitchPrimitive.Root
      {...props}
      className={mergeClasses(_switch, props.className)}
    >
      <SwitchThumb size={variants.size} />
    </SwitchPrimitive.Root>
  );
};
