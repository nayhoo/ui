import { labelRecipe } from "@/theme/recipes/label.css";
import { TextVariants, textRecipe } from "@/theme/recipes/text.css";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import * as LabelPrimitive from "@radix-ui/react-label";

type LabelSizeVariants = "1" | "2";

type LabelProps = LabelPrimitive.LabelProps &
  Omit<TextVariants, "size"> & {
    size?: LabelSizeVariants;
  };

const textSize: Record<LabelSizeVariants, TextVariants["size"]> = {
  1: "3",
  2: "4",
};

export const Label = ({ color, size = "1", weight, ...props }: LabelProps) => {
  console.log(textSize, textSize[size], size);
  const text = textRecipe({ color, size: textSize[size], weight });
  const label = labelRecipe(pick(props, ...labelRecipe.variants()));

  return (
    <LabelPrimitive.Root
      {...props}
      className={mergeClasses(text, label, props.className)}
    >
      {props.children}
    </LabelPrimitive.Root>
  );
};
