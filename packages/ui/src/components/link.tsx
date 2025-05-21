import { LinkVariants, linkRecipe } from "@/theme/recipes/link.css";
import { ComponentProps } from "@/types/component-props";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "a";

export type LinkProps = ComponentProps<typeof defaultElement, LinkVariants>;

export const Link = ({ asChild, ...props }: LinkProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...linkRecipe.variants(),
  );
  const link = linkRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...rest} className={mergeClasses(link, rest.className)}>
      {rest.children}
    </Comp>
  );
};
