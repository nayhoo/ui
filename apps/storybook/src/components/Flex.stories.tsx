import type { Meta, StoryObj } from "@storybook/react";

import { Button, Flex } from "@nayhoo/components";

import React from "react";

const meta: Meta<typeof Flex> = {
  component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    children: (
      <>
        <Button size="1">Button</Button>
        <Button size="2">Button</Button>
        <Button size="3">Button</Button>
      </>
    ),
  },
};

export const AlignCenter: Story = {
  args: {
    ...Default.args,
    align: "center",
    gap: "2",
  },
};

export const DirectionColumn: Story = {
  args: {
    ...Default.args,
    direction: "column",
    gap: "2",
  },
};
