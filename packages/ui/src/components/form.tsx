import {
  FormMessageVariants,
  formMessageRecipe,
} from "@/theme/recipes/form.css";
import { formField, formLabel } from "@/theme/styles/form.css";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import * as FormPrimitive from "@radix-ui/react-form";

export type FormProps = FormPrimitive.FormProps;

export const Form = FormPrimitive.Root;

export type FormControlProps = FormPrimitive.FormControlProps;

export const FormControl = FormPrimitive.Control;

export type FormFieldProps = FormPrimitive.FormFieldProps;

export const FormField = ({ ...props }: FormFieldProps) => {
  return (
    <FormPrimitive.Field
      {...props}
      className={mergeClasses(formField, props.className)}
    >
      {props.children}
    </FormPrimitive.Field>
  );
};

export type FormLabelProps = FormPrimitive.FormLabelProps;

export const FormLabel = ({ ...props }: FormLabelProps) => {
  return (
    <FormPrimitive.Label
      {...props}
      className={mergeClasses(formLabel, props.className)}
    >
      {props.children}
    </FormPrimitive.Label>
  );
};

export type FormMessageProps = FormPrimitive.FormMessageProps &
  FormMessageVariants;

export const FormMessage = ({ ...props }: FormMessageProps) => {
  const variants = pick(props, ...formMessageRecipe.variants());
  const formMessage = formMessageRecipe(variants);

  return (
    <FormPrimitive.Message
      {...props}
      className={mergeClasses(formMessage, props.className)}
    >
      {props.children}
    </FormPrimitive.Message>
  );
};

export type FormSubmitProps = FormPrimitive.FormSubmitProps;

export const FormSubmit = FormPrimitive.Submit;
