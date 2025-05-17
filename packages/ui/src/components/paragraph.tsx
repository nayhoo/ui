import { TextVariants, textRecipe } from "@/theme/recipes/text.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "p";

type ParagraphSizeVariants = "1" | "2";

export type ParagraphProps = ComponentProps<
  typeof defaultElement,
  Omit<TextVariants, "size">
> & {
  size?: ParagraphSizeVariants;
};

const textSize: Record<ParagraphSizeVariants, TextVariants["size"]> = {
  1: "3",
  2: "4",
};

export const Paragraph = ({
  asChild,
  color,
  size = "1",
  weight,
  ...props
}: ParagraphProps) => {
  const text = textRecipe({ color, size: textSize[size], weight });
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(text, props.className)}>
      {props.children}
    </Comp>
  );
};
