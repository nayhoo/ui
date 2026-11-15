import { separator } from "@/theme/styles/separator.css";
import { mergeClasses } from "@/utils/merge-classes";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

export type SeparatorProps = SeparatorPrimitive.SeparatorProps;

export const Separator = ({
  children,
  className,
  ...props
}: SeparatorProps) => {
  return (
    <SeparatorPrimitive.Root
      {...props}
      className={mergeClasses(separator, className)}
    >
      {children}
    </SeparatorPrimitive.Root>
  );
};
