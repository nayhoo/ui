import { heading, HeadingVariants } from "@/theme/styles/heading.css";
import { ComponentProps } from "@/types/component-props";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

export type HeadingProps = ComponentProps<
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
> &
  HeadingVariants & { styleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" };

const extractElement = (as: HeadingVariants["as"]): React.ElementType => {
  if (!as) {
    return "h1";
  }

  return as;
};

export const Heading = ({ asChild, ...props }: HeadingProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...heading.variants(),
  );

  const Comp = asChild ? Slot : extractElement(variants.as);

  return (
    <Comp
      {...rest}
      className={mergeClasses(
        heading({
          ...variants,
          as: rest.styleAs || variants.as,
        }),
        rest.className,
      )}
    >
      {rest.children}
    </Comp>
  );
};
