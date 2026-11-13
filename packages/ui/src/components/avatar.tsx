import { AvatarVariants, avatar, avatarImage } from "@/theme/styles/avatar.css";
import { extractVariantsFromProps } from "@/utils/extract-variants";
import { mergeClasses } from "@/utils/merge-classes";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import React from "react";
import { Text } from "./text";

export type AvatarProps = AvatarPrimitive.AvatarProps &
  AvatarVariants & {
    alt?: string;
    /**
     * fallback text if there is no image
     * @example "TK"
     */
    fallback?: React.ReactNode;
    src?: string;
  };

export const Avatar = ({ alt, fallback, src, ...props }: AvatarProps) => {
  const [variants, rest] = extractVariantsFromProps(
    props,
    ...avatar.variants(),
  );

  return (
    <AvatarPrimitive.Avatar
      {...rest}
      className={mergeClasses(avatar(variants), rest.className)}
    >
      <AvatarPrimitive.AvatarImage
        alt={alt}
        className={mergeClasses(avatarImage)}
        src={src}
      />

      <AvatarPrimitive.AvatarFallback asChild delayMs={600}>
        <Text size={variants.size}>{fallback}</Text>
      </AvatarPrimitive.AvatarFallback>
    </AvatarPrimitive.Avatar>
  );
};
