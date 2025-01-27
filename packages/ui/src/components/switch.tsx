import {
  SwitchVariants,
  switchRecipe,
  switchThumbRecipe,
} from "@/recipes/switch.css";
import { mergeClasses } from "@/utils/merge-classes";
import * as SwitchPrimitive from "@radix-ui/react-switch";

export const Switch = ({
  size,
  ...props
}: SwitchPrimitive.SwitchProps & SwitchVariants) => {
  const switchThumb = switchThumbRecipe({});

  return (
    <SwitchPrimitive.Root
      {...props}
      className={mergeClasses(switchRecipe({ size }), props.className)}
    >
      <SwitchPrimitive.Thumb className={switchThumb} />
    </SwitchPrimitive.Root>
  );
};
