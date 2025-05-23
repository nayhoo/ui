import { image } from "@/theme/styles/image.css";
import { ComponentProps } from "@/types/component-props";
import { mergeClasses } from "@/utils/merge-classes";
import { Slot } from "@radix-ui/react-slot";

const defaultElement = "img";

export type ImageProps = ComponentProps<typeof defaultElement>;

/**
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/Image.stories.tsx
 */
export const Image = ({ asChild, ...props }: ImageProps) => {
  const Comp = asChild ? Slot : defaultElement;

  return (
    <Comp {...props} className={mergeClasses(image, props.className)}>
      {props.children}
    </Comp>
  );
};
