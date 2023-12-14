import type { Meta, StoryObj } from "@storybook/react";

import {
  Button,
  Flex,
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormSubmit,
  TextArea,
  TextField,
} from "@nayhoo/components";

import React from "react";

const meta: Meta<typeof Form> = {
  component: Form,
};

export default meta;
type Story = StoryObj<typeof Form>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    children: (
      <>
        <FormField name="email">
          <Flex align="baseline" justify="between" css={{ mb: "$1" }}>
            <FormLabel>Email</FormLabel>
            <FormMessage error match="valueMissing">
              Please enter your email
            </FormMessage>
            <FormMessage error match="typeMismatch">
              Please provide a valid email
            </FormMessage>
          </Flex>
          <FormControl asChild>
            <TextField type="email" required />
          </FormControl>
        </FormField>
        <FormField name="question">
          <Flex align="baseline" justify="between" css={{ mb: "$1" }}>
            <FormLabel>Question</FormLabel>
            <FormMessage error match="valueMissing">
              Please enter a question
            </FormMessage>
          </Flex>
          <FormControl asChild>
            <TextArea required />
          </FormControl>
        </FormField>
        <FormSubmit asChild>
          <Button style={{ marginTop: 10 }}>Post question</Button>
        </FormSubmit>
      </>
    ),
  },
};
