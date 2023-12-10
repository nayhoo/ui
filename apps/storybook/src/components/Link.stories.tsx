import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "@nayhoo/components";

const meta: Meta<typeof Link> = {
  component: Link,
};

export default meta;
type Story = StoryObj<typeof Link>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    children: "Click me!",
    href: "https://eatclub.com.au",
    target: "_blank",
  },
};
