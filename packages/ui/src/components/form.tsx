import {
  FormFieldVariants,
  FormLabelVariants,
  FormMessageVariants,
  formFieldRecipe,
  formLabelRecipe,
  formMessageRecipe,
} from "@/recipes/form.css";
import { mergeClasses } from "@/utils/merge-classes";
import { pick } from "@/utils/pick";
import * as FormPrimitive from "@radix-ui/react-form";

export const Form = FormPrimitive.Root;

export const FormControl = FormPrimitive.Control;

export const FormField = ({
  ...props
}: FormPrimitive.FormFieldProps & FormFieldVariants) => {
  const variants = pick(props, ...formFieldRecipe.variants());
  const formField = formFieldRecipe(variants);

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
  const variants = pick(props, ...formLabelRecipe.variants());
  const formLabel = formLabelRecipe(variants);

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
  ...props
}: FormPrimitive.FormMessageProps & FormMessageVariants) => {
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

export const FormSubmit = FormPrimitive.Submit;
