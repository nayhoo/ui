import type { Meta, StoryObj } from "@storybook/react";

import { Button, Grid } from "@nayhoo/components";

import React from "react";

const meta: Meta<typeof Grid> = {
  component: Grid,
};

export default meta;
type Story = StoryObj<typeof Grid>;

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

export const Columns: Story = {
  args: {
    ...Default.args,
    gap: "2",
    columns: 3,
  },
};

export const Rows: Story = {
  args: {
    ...Default.args,
    gap: "2",
    rows: 3,
  },
};
