import { TextVariants, textRecipe } from "@/recipes/text.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

type HeadingLevelVariants = "1" | "2" | "3" | "4" | "5" | "6";

export type HeadingProps = ComponentProps<
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  Omit<TextVariants, "size">
> & {
  level?: HeadingLevelVariants;
};

const textAs: Record<HeadingLevelVariants, React.ElementType> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

const textSize: Record<HeadingLevelVariants, TextVariants["size"]> = {
  1: "8",
  2: "7",
  3: "6",
  4: "5",
  5: "4",
  6: "3",
};

export const Heading = ({
  asChild,
  color,
  level = "1",
  weight = "medium", // overrides defaultVariant
  ...props
}: HeadingProps) => {
  const text = textRecipe({ color, size: textSize[level], weight });
  const Comp = asChild ? Slot : textAs[level];
  return (
    <Comp {...props} className={mergeClasses(text, props.className)}>
      {props.children}
    </Comp>
  );
};
