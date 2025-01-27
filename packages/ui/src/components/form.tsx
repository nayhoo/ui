import {
  FormFieldVariants,
  FormLabelVariants,
  FormMessageVariants,
  formFieldRecipe,
  formLabelRecipe,
  formMessageRecipe,
} from "@/recipes/form.css";
import { mergeClasses } from "@/utils/merge-classes";
import * as FormPrimitive from "@radix-ui/react-form";

export const Form = FormPrimitive.Root;

export const FormControl = FormPrimitive.Control;

export const FormField = ({
  ...props
}: FormPrimitive.FormFieldProps & FormFieldVariants) => {
  const formField = formFieldRecipe({});

  return (
    <FormPrimitive.Field
      {...props}
      className={mergeClasses(formField, props.className)}
    >
      {props.children}
    </FormPrimitive.Field>
  );
};

export const FormLabel = ({
  ...props
}: FormPrimitive.FormLabelProps & FormLabelVariants) => {
  const formLabel = formLabelRecipe({});

  return (
    <FormPrimitive.Label
      {...props}
      className={mergeClasses(formLabel, props.className)}
    >
      {props.children}
    </FormPrimitive.Label>
  );
};

export const FormMessage = ({
  error,
  ...props
}: FormPrimitive.FormMessageProps & FormMessageVariants) => {
  const formMessage = formMessageRecipe({ error });

  return (
    <FormPrimitive.Message
      {...props}
      className={mergeClasses(formMessage, props.className)}
    >
      {props.children}
    </FormPrimitive.Message>
  );
};

export const FormSubmit = FormPrimitive.Submit;
