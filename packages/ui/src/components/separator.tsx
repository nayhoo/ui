import { separator, SeparatorVariants } from "@/theme/styles/separator.css";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

export type SeparatorProps = SeparatorPrimitive.SeparatorProps &
  SeparatorVariants;

export const Separator = (props: SeparatorProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...separator.variants(),
  );

  return (
    <SeparatorPrimitive.Root
      {...rest}
      className={mergeClasses(separator(variants), rest.className)}
    >
      {rest.children}
    </SeparatorPrimitive.Root>
  );
};
