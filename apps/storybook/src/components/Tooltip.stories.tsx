import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "@nayhoo/components";

import React from "react";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    children: <span>Hover over me!</span>,
    content: "Hello!",
  },
};
