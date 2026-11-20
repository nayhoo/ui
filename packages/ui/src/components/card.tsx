import { card } from "@/theme/styles/card.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

export type CardProps = ComponentProps<typeof defaultElement>;

export const Card = ({ asChild, children, className, ...props }: CardProps) => {
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(card, className)}>
      {children}
    </Comp>
  );
};
