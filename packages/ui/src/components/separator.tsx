import { SeparatorVariants, separatorRecipe } from "@/recipes/separator.css";
import { mergeClasses } from "@/utils/merge-classes";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

export const Separator = ({
  ...props
}: SeparatorPrimitive.SeparatorProps & SeparatorVariants) => {
  const separator = separatorRecipe({});
  return (
    <SeparatorPrimitive.Root
      {...props}
      className={mergeClasses(separator, props.className)}
    >
      {props.children}
    </SeparatorPrimitive.Root>
  );
};
