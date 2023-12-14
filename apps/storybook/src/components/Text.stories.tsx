import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "@nayhoo/components";

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog",
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

export const Size4: Story = {
  args: {
    ...Default.args,
    size: "4",
  },
};

export const Size5: Story = {
  args: {
    ...Default.args,
    size: "5",
  },
};

export const Size6: Story = {
  args: {
    ...Default.args,
    size: "6",
  },
};

export const Size7: Story = {
  args: {
    ...Default.args,
    size: "7",
  },
};

export const Size8: Story = {
  args: {
    ...Default.args,
    size: "8",
  },
};

export const Size9: Story = {
  args: {
    ...Default.args,
    size: "9",
  },
};

export const Normal: Story = {
  args: {
    ...Default.args,
    weight: "normal",
  },
};

export const Medium: Story = {
  args: {
    ...Default.args,
    weight: "medium",
  },
};

export const Bold: Story = {
  args: {
    ...Default.args,
    weight: "bold",
  },
};

export const Black: Story = {
  args: {
    ...Default.args,
    weight: "black",
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    color: "primary",
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
