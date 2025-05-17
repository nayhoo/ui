import { Box } from "@/components/box";
import {
  AvatarFallbackVariants,
  AvatarVariants,
  avatarFallbackRecipe,
  avatarRecipe,
} from "@/theme/recipes/avatar.css";
import { StatusVariants } from "@/theme/recipes/status.css";
import { avatarImage } from "@/theme/styles/avatar.css";
import { theme } from "@/theme/theme-contracts/theme-contract.css";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import React from "react";
import { Status } from "./status";

type AvatarImageProps = AvatarPrimitive.AvatarImageProps;

const AvatarImage = ({ ...props }: AvatarImageProps) => {
  return (
    <AvatarPrimitive.Image
      {...props}
      className={mergeClasses(avatarImage, props.className)}
    >
      {props.children}
    </AvatarPrimitive.Image>
  );
};

type AvatarFallbackProps = AvatarPrimitive.AvatarFallbackProps &
  AvatarFallbackVariants;

const AvatarFallback = ({ ...props }: AvatarFallbackProps) => {
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

export type AvatarProps = AvatarPrimitive.AvatarProps &
  AvatarVariants & {
    alt?: string;
    fallback?: React.ReactNode;
    src?: string;
    status?: StatusVariants["variant"];
  };

export const Avatar = ({
  alt,
  fallback,
  src,
  status,
  style,
  ...props
}: AvatarProps) => {
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
