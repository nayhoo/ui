import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "@nayhoo/components";

import React, { useState } from "react";

const meta: Meta<typeof TextField> = {
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

const TextFieldWithHooks = () => {
  const [value, setValue] = useState<string>();

  const onCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <TextField value={value} onChange={onCheckedChange} />;
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {},
};

export const Placeholder: Story = {
  args: {
    placeholder: "This is some text",
  },
};

export const Size1: Story = {
  args: {
    ...Placeholder.args,
    size: "1",
  },
};

export const Size2: Story = {
  args: {
    ...Placeholder.args,
    size: "2",
  },
};

export const Size3: Story = {
  args: {
    ...Placeholder.args,
    size: "3",
  },
};

export const Error: Story = {
  args: {
    ...Placeholder.args,
    error: true,
  },
};

export const Ghost: Story = {
  args: {
    ...Placeholder.args,
    variant: "ghost",
  },
};

export const Controlled: Story = {
  render: () => <TextFieldWithHooks />,
};
