import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@nayhoo/components";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: "ghost",
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Size1: Story = {
  args: {
    ...Default.args,
    size: "1",
  },
};

export const Size2: Story = {
  args: {
    ...Default.args,
    size: "2",
  },
};

export const Size3: Story = {
  args: {
    ...Default.args,
    size: "3",
  },
};

export const Pill: Story = {
  args: {
    ...Default.args,
    shape: "pill",
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    color: "secondary",
  },
};

export const Accent: Story = {
  args: {
    ...Default.args,
    color: "accent",
  },
};

export const Info: Story = {
  args: {
    ...Default.args,
    color: "info",
  },
};

export const Success: Story = {
  args: {
    ...Default.args,
    color: "success",
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    color: "warning",
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    color: "error",
  },
};
