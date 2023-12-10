import type { Meta, StoryObj } from "@storybook/react";

import { AspectRatio, Box, Image } from "@nayhoo/components";

import React from "react";

const meta: Meta<typeof AspectRatio> = {
  component: AspectRatio,
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

const AspectRatioWithWrapper = ({ ...props }) => (
  <Box css={{ borderRadius: "$2", overflow: "hidden", width: 300 }}>
    <AspectRatio {...props} />
  </Box>
);

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    children: (
      <Image
        alt="A very tall building in the middle of a foggy day by Nick Night"
        src="https://images.unsplash.com/photo-1643552841160-a8b51beb92c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    ),
  },
};

export const Ratio: Story = {
  render: () => (
    <AspectRatioWithWrapper ratio={16 / 9}>
      <Image
        alt="A very tall building in the middle of a foggy day by Nick Night"
        css={{ height: "100%", objectFit: "cover", width: "100%" }}
        src="https://images.unsplash.com/photo-1643552841160-a8b51beb92c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </AspectRatioWithWrapper>
  ),
};
