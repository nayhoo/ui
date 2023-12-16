import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "@nayhoo/components";

const meta: Meta<typeof Heading> = {
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    children: "Heading 1",
  },
};

export const Heading2: Story = {
  args: {
    children: "Heading 2",
    size: "2",
  },
};

export const Heading3: Story = {
  args: {
    children: "Heading 3",
    size: "3",
  },
};

export const Heading4: Story = {
  args: {
    children: "Heading 4",
    size: "4",
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

export const Error: Story = {
  args: {
    ...Default.args,
    color: "error",
  },
};
