import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "@nayhoo/components";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    css: { size: 300 },
  },
};

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: "outline",
  },
};
