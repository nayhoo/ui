import type { Meta, StoryObj } from "@storybook/react";

import { Status } from "@nayhoo/components";

const meta: Meta<typeof Status> = {
  component: Status,
};

export default meta;
type Story = StoryObj<typeof Status>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {},
};

export const Blue: Story = {
  args: {
    variant: "blue",
  },
};

export const Red: Story = {
  args: {
    variant: "red",
  },
};

export const Green: Story = {
  args: {
    variant: "green",
  },
};
