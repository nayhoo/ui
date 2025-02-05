import { Box } from "@/components/box";
import {
  AvatarFallbackVariants,
  AvatarImageVariants,
  AvatarVariants,
  avatarFallbackRecipe,
  avatarImageRecipe,
  avatarRecipe,
} from "@/recipes/avatar.css";
import { StatusVariants } from "@/recipes/status.css";
import { theme } from "@/theme-contracts/theme-contract.css";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import React from "react";
import { Status } from "./status";

const AvatarImage = ({
  ...props
}: AvatarPrimitive.AvatarImageProps & AvatarImageVariants) => {
  const variants = pick(props, ...avatarImageRecipe.variants());
  const avatarImage = avatarImageRecipe(variants);

  return (
    <AvatarPrimitive.Image
      {...props}
      className={mergeClasses(avatarImage, props.className)}
    >
      {props.children}
    </AvatarPrimitive.Image>
  );
};

const AvatarFallback = ({
  ...props
}: AvatarPrimitive.AvatarFallbackProps & AvatarFallbackVariants) => {
  const variants = pick(props, ...avatarFallbackRecipe.variants());
  const avatarFallback = avatarFallbackRecipe(variants);

  return (
    <AvatarPrimitive.Fallback
      {...props}
      className={mergeClasses(avatarFallback, props.className)}
    >
      {props.children}
    </AvatarPrimitive.Fallback>
  );
};

export const Avatar = ({
  alt,
  fallback,
  src,
  status,
  style,
  ...props
}: AvatarPrimitive.AvatarProps &
  AvatarVariants & {
    alt?: string;
    fallback?: React.ReactNode;
    src?: string;
    status?: StatusVariants["variant"];
  }) => {
  const variants = pick(props, ...avatarRecipe.variants());
  const avatar = avatarRecipe(variants);

  return (
    <Box
      style={{
        height: "fit-content",
        position: "relative",
        width: "fit-content",
        ...style,
      }}
    >
      <AvatarPrimitive.Avatar
        {...props}
        className={mergeClasses(avatar, props.className)}
      >
        <AvatarImage alt={alt} src={src} />

        {/* TODO: fallback wont render - https://github.com/radix-ui/primitives/issues/1767 */}
        <AvatarFallback size={variants.size} delayMs={600}>
          {fallback}
        </AvatarFallback>
      </AvatarPrimitive.Avatar>

      {status && (
        <Box
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.12)",
            borderRadius: theme.radii.round,
            marginRight: "-3px",
            marginBottom: "-3px",
          }}
        >
          <Status
            size={variants.size && Number(variants.size) > 2 ? "2" : "1"}
            variant={status}
          />
        </Box>
      )}
    </Box>
  );
};
