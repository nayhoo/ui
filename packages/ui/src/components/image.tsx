import { image } from "@/theme/styles/image.css";
import { mergeClasses } from "@/utils/merge-classes";

export type ImageProps = Omit<
  React.ComponentProps<"img">,
  "alt" | "src" | "loading"
> & {
  alt: string;
  src: string;
};

/**
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/Image.stories.tsx
 */
export const Image = ({ alt, src, ...props }: ImageProps) => {
  return (
    <img
      alt={alt}
      src={src}
      loading="lazy"
      {...props}
      className={mergeClasses(image, props.className)}
    >
      {props.children}
    </img>
  );
};
