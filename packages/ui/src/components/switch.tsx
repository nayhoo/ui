import {
  _switch,
  switchThumb,
  SwitchThumbVariants,
  SwitchVariants,
} from "@/theme/styles/switch.css";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import * as SwitchPrimitive from "@radix-ui/react-switch";

export type SwitchThumbProps = SwitchPrimitive.SwitchThumbProps &
  SwitchThumbVariants;

export const SwitchThumb = ({ ...props }: SwitchThumbProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...switchThumb.variants(),
  );

  return (
    <SwitchPrimitive.Thumb
      {...rest}
      className={mergeClasses(switchThumb(variants), rest.className)}
    />
  );
};

export type SwitchProps = SwitchPrimitive.SwitchProps & SwitchVariants;

export const Switch = ({ ...props }: SwitchProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ..._switch.variants(),
  );

  return (
    <SwitchPrimitive.Root
      {...rest}
      className={mergeClasses(_switch(variants), rest.className)}
    >
      <SwitchThumb size={variants.size} />
    </SwitchPrimitive.Root>
  );
};
