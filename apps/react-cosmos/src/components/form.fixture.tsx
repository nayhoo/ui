import { Box } from "@nayhoo/ui/box";
import { Button } from "@nayhoo/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormSubmit,
} from "@nayhoo/ui/form";
import { Link } from "@nayhoo/ui/link";
import { TextField } from "@nayhoo/ui/text-field";

export default {
  "form field": () => (
    <Form>
      <FormField name="Field">
        <FormLabel>Field</FormLabel>
        <FormControl asChild>
          <TextField placeholder="Placeholder" required type="text" />
        </FormControl>
      </FormField>
    </Form>
  ),
  "login form": () => (
    <Form>
      <FormField name="username">
        <Box align="baseline" display="flex" justify="between" gap="2">
          <FormLabel>Email or Username</FormLabel>
          <FormMessage match="valueMissing">This field is required</FormMessage>
        </Box>
        <FormControl asChild>
          <TextField required type="text" />
        </FormControl>
      </FormField>

      <FormField name="password">
        <Box align="baseline" display="flex" justify="between" gap="2">
          <FormLabel>Password</FormLabel>
          <FormMessage match="valueMissing">This field is required</FormMessage>
        </Box>
        <FormControl asChild>
          <TextField required type="password" />
        </FormControl>
      </FormField>

      <Link size="1">Forget password?</Link>

      <FormSubmit asChild>
        <Button fullWidth sentiment="brand" variant="solid">
          Log in
        </Button>
      </FormSubmit>
    </Form>
  ),
};
