"use client";

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
import { theme } from "@nayhoo/ui/theme";
import { useState } from "react";

// eslint-disable-next-line react/display-name
export default () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (username: string, password: string) => {
    setLoading(true);

    console.log("username ->", username);
    console.log("password ->", password);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <Form
      onSubmit={(event) => {
        const data = Object.fromEntries(new FormData(event.currentTarget)) as {
          username: string;
          password: string;
        };
        const { username, password } = data;

        // Submit form data and catch errors in the response
        handleSubmit(username, password);

        // prevent default form submission
        event.preventDefault();
      }}
    >
      <FormField name="username">
        <Box
          display="flex"
          align="baseline"
          justify="between"
          style={{ marginBottom: theme.space[1] }}
        >
          <FormLabel>Email or Username</FormLabel>
          <FormMessage error match="valueMissing">
            This field is required
          </FormMessage>
        </Box>
        <FormControl asChild>
          <TextField required type="text" />
        </FormControl>
      </FormField>

      <FormField name="password">
        <Box
          display="flex"
          align="baseline"
          justify="between"
          style={{ marginBottom: theme.space[1] }}
        >
          <FormLabel>Password</FormLabel>
          <FormMessage error match="valueMissing">
            This field is required
          </FormMessage>
        </Box>
        <FormControl asChild>
          <TextField required type="password" />
        </FormControl>
        <Box style={{ marginTop: theme.space[2] }}>
          <Link size="1">Forget password?</Link>
        </Box>
      </FormField>

      <FormSubmit asChild>
        <Button
          fullWidth
          loading={loading}
          sentiment="accented"
          style={{ marginTop: 10 }}
          variant="solid"
        >
          Log in
        </Button>
      </FormSubmit>
    </Form>
  );
};
