import { separator } from "@/theme/styles/separator.css";
import { mergeClasses } from "@/utils/merge-classes";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

type SeparatorProps = SeparatorPrimitive.SeparatorProps;

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
