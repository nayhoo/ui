import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "@nayhoo/components";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {},
};

export const Image: Story = {
  args: {
    alt: "Face decoration on green grass by Alesia Kaz",
    fallback: "A",
    src: "https://images.unsplash.com/photo-1571249104671-f5537fb3e137?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

export const Size1: Story = {
  args: {
    ...Image.args,
    size: "1",
  },
};

export const Size2: Story = {
  args: {
    ...Image.args,
    size: "2",
  },
};

export const Size3: Story = {
  args: {
    ...Image.args,
    size: "3",
  },
};

export const Size4: Story = {
  args: {
    ...Image.args,
    size: "4",
  },
};

export const Size5: Story = {
  args: {
    ...Image.args,
    size: "5",
  },
};

export const Size6: Story = {
  args: {
    ...Image.args,
    size: "6",
  },
};

export const Square: Story = {
  args: {
    ...Image.args,
    shape: "square",
  },
};

export const Circle: Story = {
  args: {
    ...Image.args,
    shape: "circle",
  },
};

export const Inactive: Story = {
  args: {
    ...Image.args,
    inactive: true,
  },
};

export const Interactive: Story = {
  args: {
    ...Image.args,
    interactive: true,
  },
};

export const Fallback: Story = {
  args: {
    alt: "Face decoration on green grass by Alesia Kaz",
    fallback: "A",
    // src: "https://images.unsplash.com/photo-1571249104671-f5537fb3e137?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};
