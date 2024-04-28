import * as FormPrimitive from "@radix-ui/react-form";
import { styled } from "./stitches.config";

/**
 * Nayhoo form component.
 * @see https://github.com/nayhoo/ui/blob/main/apps/storybook/src/components/Form.stories.tsx
 */
export const Form = FormPrimitive.Root;

export const FormControl = FormPrimitive.Control;

export const FormField = styled(FormPrimitive.Field, {
  display: "grid",
  marginBottom: "$2",
});

export const FormLabel = styled(FormPrimitive.Label, {
  color: "$textLabel",
  fontSize: "$base",
  fontWeight: "$medium",
  lineHeight: "$sizes$6",

  // "&[data-invalid]": {
  //   color: "$error",
  // },
  // "&[data-valid]": {
  //   color: "$success",
  // },
});

export const FormMessage = styled(FormPrimitive.Message, {
  fontSize: "$sm",
  opacity: 0.8,

  variants: {
    error: {
      true: {
        color: "$error",
      },
    },
  },
});

export const FormSubmit = FormPrimitive.Submit;
