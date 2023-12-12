import * as FormPrimitive from "@radix-ui/react-form";
import { styled } from "../stitches.config";

export const Form = FormPrimitive.Root;

export const FormControl = FormPrimitive.Control;

export const FormField = styled(FormPrimitive.Field, {
  display: "grid",
  marginBottom: "$2",
});

export const FormLabel = styled(FormPrimitive.Label, {
  color: "$textSecondary",
  fontSize: "$3",
  fontWeight: "$medium",
  lineHeight: "$sizes$$6",

  // "&[data-invalid]": {
  //   color: "$error",
  // },
  // "&[data-valid]": {
  //   color: "$success",
  // },
});

export const FormMessage = styled(FormPrimitive.Message, {
  fontSize: "$2",
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
