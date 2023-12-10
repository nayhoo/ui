import type { Meta, StoryObj } from "@storybook/react";

import { Paragraph } from "@nayhoo/components";

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    children: "Paragraph 1",
  },
};

export const Paragraph2: Story = {
  args: {
    children: "Paragraph 2",
    size: "2",
  },
};
