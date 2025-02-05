import { LinkVariants, linkRecipe } from "@/recipes/link.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "a";

type LinkProps = ComponentProps<typeof defaultElement, LinkVariants>;

export const Link = ({ asChild, ...props }: LinkProps) => {
  const variants = pick(props, ...linkRecipe.variants());
  const link = linkRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(link, props.className)}>
      {props.children}
    </Comp>
  );
};
