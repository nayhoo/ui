import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "@nayhoo/components";

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {},
};

export const Avatar1: Story = {
  args: {
    variant: "avatar1",
  },
};

export const Avatar2: Story = {
  args: {
    variant: "avatar2",
  },
};

export const Avatar3: Story = {
  args: {
    variant: "avatar3",
  },
};

export const Avatar4: Story = {
  args: {
    variant: "avatar4",
  },
};

export const Avatar5: Story = {
  args: {
    variant: "avatar5",
  },
};

export const Avatar6: Story = {
  args: {
    variant: "avatar6",
  },
};

export const Heading: Story = {
  args: {
    variant: "heading",
  },
};

export const Button1: Story = {
  args: {
    variant: "button1",
  },
};

export const Button2: Story = {
  args: {
    variant: "button2",
  },
};

export const Button3: Story = {
  args: {
    variant: "button3",
  },
};
