import type { Meta, StoryObj } from "@storybook/react";

import { Button, Popover, PopoverContent, PopoverTrigger, Text } from "@nayhoo/components";

import React from "react";

const meta: Meta<typeof Popover> = {
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    children: (
      <>
        <PopoverTrigger asChild>
          <span>
            <Button>Click me</Button>
          </span>
        </PopoverTrigger>

        <PopoverContent css={{ padding: "$2" }}>
          <Text>Hi</Text>
        </PopoverContent>
      </>
    ),
  },
};
