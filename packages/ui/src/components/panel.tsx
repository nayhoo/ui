import { panelRecipe, PanelVariants } from "@/theme/recipes/panel.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

type PanelProps = ComponentProps<typeof defaultElement, PanelVariants>;

export const Panel = ({ asChild, ...props }: PanelProps) => {
  const variants = pick(props, ...panelRecipe.variants());
  const panel = panelRecipe(variants);
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(panel, props.className)}>
      {props.children}
    </Comp>
  );
};
