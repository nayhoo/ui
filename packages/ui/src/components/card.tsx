import { CardVariants, cardRecipe } from "@/recipes/card.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

type CardProps = ComponentProps<typeof defaultElement, CardVariants>;

export const Card = ({ asChild, ...props }: CardProps) => {
  const variants = pick(props, ...cardRecipe.variants());
  const card = cardRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(card, props.className)}>
      {props.children}
    </Comp>
  );
};
