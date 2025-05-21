import { StatusVariants, statusRecipe } from "@/theme/recipes/status.css";
import { ComponentProps } from "@/types/component-props";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

export type StatusProps = ComponentProps<typeof defaultElement, StatusVariants>;

export const Status = ({ asChild, ...props }: StatusProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...statusRecipe.variants(),
  );
  const status = statusRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...rest} className={mergeClasses(status, rest.className)}>
      {rest.children}
    </Comp>
  );
};
