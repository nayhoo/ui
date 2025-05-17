import { box } from "@/theme/styles/box.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "div";

export type BoxProps = ComponentProps<typeof defaultElement>;

export const Box = ({ asChild, ...props }: BoxProps) => {
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(box, props.className)}>
      {props.children}
    </Comp>
  );
};
