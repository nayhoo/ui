import React from "react";
import { styled, VariantProps, CSS } from "./stitches.config";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { Box } from "./Box";
import { Status } from "./Status";

type StatusVariants = React.ComponentProps<typeof Status>;
type StatusColors = Pick<StatusVariants, "color">;

type AvatarPrimitiveProps = React.ComponentProps<typeof AvatarPrimitive.Root>;
type AvatarVariants = VariantProps<typeof StyledAvatar>;
type AvatarProps = AvatarPrimitiveProps &
  AvatarVariants & {
    alt?: string;
    css?: CSS;
    fallback?: React.ReactNode;
    src?: string;
    status?: StatusColors["color"];
  };

/**
 * Nayhoo avatar component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/Avatar.stories.tsx
 */
export const Avatar = React.forwardRef<React.ElementRef<typeof StyledAvatar>, AvatarProps>(
  ({ alt, css, fallback, shape, size, src, status, ...props }, forwardedRef) => (
    <Box
      css={{
        ...css,
        height: "$fit",
        position: "relative",
        width: "$fit",
      }}
    >
      <StyledAvatar {...props} ref={forwardedRef} shape={shape} size={size}>
        <StyledAvatarImage alt={alt} src={src} />
        <StyledAvatarFallback delayMs={300} size={size}>
          {fallback}
        </StyledAvatarFallback>
      </StyledAvatar>
      {status && (
        <Box
          css={{
            borderRadius: "$round",
            bottom: "0",
            boxShadow: "0 0 0 3px $colors$shadow",
            mb: "-3px",
            mr: "-3px",
            position: "absolute",
            right: "0",
          }}
        >
          <Status size={size && Number(size) > 2 ? "2" : "1"} color={status} />
        </Box>
      )}
    </Box>
  )
);

const StyledAvatar = styled(AvatarPrimitive.Root, {
  alignItems: "center",
  backgroundColor: "$surface",
  border: "none",
  boxSizing: "border-box",
  color: "$surfaceTextContrast",
  display: "flex",
  flexShrink: 0,
  fontFamily: "inherit",
  fontWeight: "$medium",
  justifyContent: "center",
  lineHeight: "1",
  margin: "0",
  outline: "none",
  overflow: "hidden",
  padding: "0",
  position: "relative",
  userSelect: "none",
  verticalAlign: "middle",

  "&::before": {
    borderRadius: "inherit",
    bottom: 0,
    boxShadow: "inset 0px 0px 1px $colors$divider",
    content: '""',
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },

  variants: {
    size: {
      "1": {
        size: "$4",
      },
      "2": {
        size: "$6",
      },
      "3": {
        size: "$8",
      },
      "4": {
        size: "3rem",
      },
      "5": {
        size: "4rem",
      },
      "6": {
        size: "5rem",
      },
    },
    shape: {
      circle: {
        borderRadius: "$round",
      },
      square: {
        borderRadius: "$lg",
      },
    },
    inactive: {
      true: {
        opacity: ".3",
      },
    },
    interactive: {
      true: {
        "&::after": {
          backgroundColor: "rgba(0, 0, 0, 0.08)",
          bottom: "0",
          content: '""',
          left: "0",
          opacity: "0",
          pointerEvents: "none",
          position: "absolute",
          right: "0",
          top: "0",
          transition: "opacity 100ms linear",
        },
        "@hover": {
          "&:hover": {
            "&::after": {
              opacity: "1",
            },
          },
        },
        '&[data-state="open"]': {
          "&::after": {
            backgroundColor: "rgba(0, 0, 0, 0.12)",
            opacity: "1",
          },
        },
      },
    },
  },
  defaultVariants: {
    shape: "circle",
    size: "3",
  },
});

const StyledAvatarImage = styled(AvatarPrimitive.Image, {
  boxSizing: "border-box",
  display: "flex",
  height: "100%",
  objectFit: "cover",
  verticalAlign: "middle",
  width: "100%",
});

const StyledAvatarFallback = styled(AvatarPrimitive.Fallback, {
  textTransform: "uppercase",

  variants: {
    size: {
      "1": {
        fontSize: "$xs",
        lineHeight: "15px",
      },
      "2": {
        fontSize: "$base",
      },
      "3": {
        fontSize: "$2xl",
      },
      "4": {
        fontSize: "$3xl",
      },
      "5": {
        fontSize: "$4xl",
      },
      "6": {
        fontSize: "$6xl",
      },
    },
  },
  defaultVariants: {
    size: "3",
  },
});
