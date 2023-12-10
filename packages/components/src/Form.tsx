import * as FormPrimitive from "@radix-ui/react-form";
import { styled } from "../stitches.config";

export const Form = FormPrimitive.Root;

export const FormField = styled(FormPrimitive.Field, {
  display: "grid",
  marginBottom: 10,
});

export const FormLabel = styled(FormPrimitive.Label, {
  fontSize: "$3",
  fontWeight: 500,
  lineHeight: "$sizes$$6",
  color: "$label",
});

export const FormMessage = styled(FormPrimitive.Message, {
  fontSize: "$2",
  opacity: 0.8,

  state: {
    invalid: {
      color: "red",
    },
    valid: {
      color: "green",
    },
  },
});

export const FormControl = FormPrimitive.Control;

export const FormSubmit = FormPrimitive.Submit;
