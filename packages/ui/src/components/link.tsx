import { LinkVariants, linkRecipe } from "@/recipes/link.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "a";

type LinkProps = ComponentProps<typeof defaultElement, LinkVariants>;

export const Link = ({ asChild, color, ...props }: LinkProps) => {
  const link = linkRecipe({ color });
  const Comp = asChild ? Slot : defaultElement;
  return (
    <Comp {...props} className={mergeClasses(link, props.className)}>
      {props.children}
    </Comp>
  );
};
