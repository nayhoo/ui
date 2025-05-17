import { TextVariants, textRecipe } from "@/theme/recipes/text.css";
import { label } from "@/theme/styles/label.css";
import { mergeClasses } from "@/utils/merge-classes";
import * as LabelPrimitive from "@radix-ui/react-label";

type LabelSizeVariants = "1" | "2";

export type LabelProps = LabelPrimitive.LabelProps &
  Omit<TextVariants, "size"> & {
    size?: LabelSizeVariants;
  };

const textSize: Record<LabelSizeVariants, TextVariants["size"]> = {
  1: "3",
  2: "4",
};

export const Label = ({ color, size = "1", weight, ...props }: LabelProps) => {
  const text = textRecipe({ color, size: textSize[size], weight });

  return (
    <LabelPrimitive.Root
      {...props}
      className={mergeClasses(text, label, props.className)}
    >
      {props.children}
    </LabelPrimitive.Root>
  );
};
