import * as FormPrimitive from "@radix-ui/react-form";
import { Box } from "./box";
import { Text } from "./text";

export type FormProps = FormPrimitive.FormProps;

export const Form = (props: FormProps) => (
  <Box asChild display="grid" gap="2">
    <FormPrimitive.Root {...props} />
  </Box>
);

export type FormControlProps = FormPrimitive.FormControlProps;

export const FormControl = FormPrimitive.Control;

export type FormFieldProps = FormPrimitive.FormFieldProps;

export const FormField = (props: FormFieldProps) => {
  return (
    <Box asChild display="grid" gap="1">
      <FormPrimitive.Field {...props} />
    </Box>
  );
};

export type FormLabelProps = FormPrimitive.FormLabelProps;

export const FormLabel = (props: FormLabelProps) => {
  return (
    <Text asChild color="subtle" weight="medium">
      <FormPrimitive.Label {...props} />
    </Text>
  );
};

export type FormMessageProps = FormPrimitive.FormMessageProps;

export const FormMessage = (props: FormMessageProps) => {
  return (
    <Text asChild color="negative" size="1">
      <FormPrimitive.Message {...props} />
    </Text>
  );
};

export type FormSubmitProps = FormPrimitive.FormSubmitProps;

export const FormSubmit = FormPrimitive.Submit;
