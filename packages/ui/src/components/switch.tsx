import {
  SwitchVariants,
  switchRecipe,
  switchThumbRecipe,
} from "@/recipes/switch.css";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import * as SwitchPrimitive from "@radix-ui/react-switch";

export const SwitchThumb = ({ ...props }: SwitchPrimitive.SwitchThumbProps) => {
  const variants = pick(props, ...switchThumbRecipe.variants());
  const switchThumb = switchThumbRecipe(variants);

  return (
    <SwitchPrimitive.Thumb
      {...props}
      className={mergeClasses(switchThumb, props.className)}
    />
  );
};

export const Switch = ({
  ...props
}: SwitchPrimitive.SwitchProps & SwitchVariants) => {
  const variants = pick(props, ...switchRecipe.variants());
  const _switch = switchRecipe(variants); // 'switch' is not allowed as a variable declaration name.ts(1389)

  return (
    <SwitchPrimitive.Root
      {...props}
      className={mergeClasses(_switch, props.className)}
    >
      <SwitchThumb />
    </SwitchPrimitive.Root>
  );
};
