import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "@nayhoo/components";

const meta: Meta<typeof Box> = {
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    css: { backgroundColor: "$hover", borderRadius: "$2", size: 300 },
  },
};
