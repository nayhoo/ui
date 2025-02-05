import { SeparatorVariants, separatorRecipe } from "@/recipes/separator.css";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

type SeparatorProps = SeparatorPrimitive.SeparatorProps & SeparatorVariants;

export const Separator = ({ ...props }: SeparatorProps) => {
  const variants = pick(props, ...separatorRecipe.variants());
  const separator = separatorRecipe(variants);

  return (
    <SeparatorPrimitive.Root
      {...props}
      className={mergeClasses(separator, props.className)}
    >
      {props.children}
    </SeparatorPrimitive.Root>
  );
};
