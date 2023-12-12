import type { Meta, StoryObj } from "@storybook/react";

import { Box, Container } from "@nayhoo/components";

import React from "react";

const meta: Meta<typeof Container> = {
  component: Container,
};

export default meta;
type Story = StoryObj<typeof Container>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    children: <Box css={{ backgroundColor: "$bgHover", height: 300 }} />,
  },
};

export const Size1: Story = {
  args: {
    size: "1",
    ...Default.args,
  },
};

export const Size2: Story = {
  args: {
    size: "2",
    ...Default.args,
  },
};

export const Size3: Story = {
  args: {
    size: "3",
    ...Default.args,
  },
};

export const Size4: Story = {
  args: {
    size: "4",
    ...Default.args,
  },
};
