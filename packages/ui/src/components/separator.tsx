import { separator } from "@/theme/styles/separator.css";
import { mergeClasses } from "@/utils/merge-classes";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

export type SeparatorProps = SeparatorPrimitive.SeparatorProps;

/**
 * @see https://www.radix-ui.com/primitives/docs/components/separator
 */
export const Separator = ({ ...props }: SeparatorProps) => {
  return (
    <SeparatorPrimitive.Root
      {...props}
      className={mergeClasses(separator, props.className)}
    >
      {props.children}
    </SeparatorPrimitive.Root>
  );
};
