import { card } from "@/theme/styles/card.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

type CardProps = ComponentProps<typeof defaultElement>;

export const Card = ({ asChild, ...props }: CardProps) => {
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(card, props.className)}>
      {props.children}
    </Comp>
  );
};
