import {
  _switch,
  switchThumb,
  SwitchThumbVariants,
  SwitchVariants,
} from "@/theme/styles/switch.css";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import * as SwitchPrimitive from "@radix-ui/react-switch";

type SwitchThumbProps = SwitchPrimitive.SwitchThumbProps & SwitchThumbVariants;

const SwitchThumb = ({ className, ...props }: SwitchThumbProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...switchThumb.variants(),
  );

  return (
    <SwitchPrimitive.Thumb
      {...rest}
      className={mergeClasses(switchThumb(variants), className)}
    />
  );
};

export type SwitchProps = SwitchPrimitive.SwitchProps & SwitchVariants;

export const Switch = ({ className, ...props }: SwitchProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ..._switch.variants(),
  );

  return (
    <SwitchPrimitive.Root
      {...rest}
      className={mergeClasses(_switch(variants), className)}
    >
      <SwitchThumb size={variants.size} />
    </SwitchPrimitive.Root>
  );
};
