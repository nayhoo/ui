import { theme } from "@/theme";
import * as FormPrimitive from "@radix-ui/react-form";
import { Box } from "./box";
import { Text } from "./text";

export type FormProps = FormPrimitive.FormProps;

export const Form = FormPrimitive.Root;

export type FormControlProps = FormPrimitive.FormControlProps;

export const FormControl = FormPrimitive.Control;

export type FormFieldProps = Omit<FormPrimitive.FormFieldProps, "asChild">;

export const FormField = ({ children, ...props }: FormFieldProps) => {
  return (
    <FormPrimitive.Field {...props} asChild>
      <Box display="grid" style={{ marginBottom: theme.space[2] }}>
        {children}
      </Box>
    </FormPrimitive.Field>
  );
};

export type FormLabelProps = Omit<FormPrimitive.FormLabelProps, "asChild">;

export const FormLabel = ({ children, ...props }: FormLabelProps) => {
  return (
    <FormPrimitive.Label {...props} asChild>
      <Text asChild color="subtle" weight="medium">
        <label>{children}</label>
      </Text>
    </FormPrimitive.Label>
  );
};

export type FormMessageProps = Omit<
  FormPrimitive.FormMessageProps,
  "asChild"
> & {
  error?: boolean;
};

export const FormMessage = ({
  children,
  error,
  ...props
}: FormMessageProps) => {
  return (
    <FormPrimitive.Message {...props} asChild>
      <Text color={error ? "error" : "subtle"} size="1">
        {children}
      </Text>
    </FormPrimitive.Message>
  );
};

export type FormSubmitProps = FormPrimitive.FormSubmitProps;

export const FormSubmit = FormPrimitive.Submit;
