import { image } from "@/theme/styles/image.css";
import { mergeClasses } from "@/utils/merge-classes";

export type ImageProps = Omit<React.ComponentProps<"img">, "alt" | "src"> & {
  alt: string;
  src: string;
};

export const Image = ({
  alt,
  className,
  loading = "lazy",
  src,
  ...props
}: ImageProps) => {
  return (
    <img
      alt={alt}
      loading={loading}
      src={src}
      {...props}
      className={mergeClasses(image, className)}
    />
  );
};
