import { headingRecipe, HeadingVariants } from "@/theme/recipes/heading.css";
import { extractVariantsFromProps } from "@/utils";
import { mergeClasses } from "@/utils/merge-classes";

type HeadingLevelVariants = "1" | "2" | "3" | "4" | "5" | "6";

export type HeadingProps = React.ComponentProps<
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
> &
  HeadingVariants;

const headingAs: Record<HeadingLevelVariants, React.ElementType> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

const extractElementFromLevel = (
  level: HeadingVariants["level"],
): React.ElementType => {
  if (!level) {
    return "h1";
  }

  return headingAs[level];
};

export const Heading = ({ ...props }: HeadingProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...headingRecipe.variants(),
  );

  const heading = headingRecipe(variants);

  const Comp = extractElementFromLevel(variants.level);

  return (
    <Comp {...rest} className={mergeClasses(heading, rest.className)}>
      {rest.children}
    </Comp>
  );
};
