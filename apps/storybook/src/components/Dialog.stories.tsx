import type { Meta, StoryObj } from "@storybook/react";

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@nayhoo/components";

import React from "react";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    children: (
      <>
        <DialogTrigger asChild>
          <Button>Click me!</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogContent>
      </>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    children: (
      <>
        <DialogTrigger asChild>
          <Button>Click me!</Button>
        </DialogTrigger>

        <DialogContent
          components={{
            Footer: (
              <DialogFooter justify="between">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>

                <Button>Submit</Button>
              </DialogFooter>
            ),
          }}
        >
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogContent>
      </>
    ),
  },
};

export const Size1: Story = {
  args: {
    children: (
      <>
        <DialogTrigger asChild>
          <Button>Click me!</Button>
        </DialogTrigger>

        <DialogContent
          components={{
            Footer: (
              <DialogFooter justify="between">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>

                <Button>Submit</Button>
              </DialogFooter>
            ),
          }}
          fullWidth
          size="1"
        >
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogContent>
      </>
    ),
  },
};

export const Size2: Story = {
  args: {
    children: (
      <>
        <DialogTrigger asChild>
          <Button>Click me!</Button>
        </DialogTrigger>

        <DialogContent
          components={{
            Footer: (
              <DialogFooter justify="between">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>

                <Button>Submit</Button>
              </DialogFooter>
            ),
          }}
          fullWidth
          size="2"
        >
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogContent>
      </>
    ),
  },
};

export const Size3: Story = {
  args: {
    children: (
      <>
        <DialogTrigger asChild>
          <Button>Click me!</Button>
        </DialogTrigger>

        <DialogContent
          components={{
            Footer: (
              <DialogFooter justify="between">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>

                <Button>Submit</Button>
              </DialogFooter>
            ),
          }}
          fullWidth
          size="3"
        >
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogContent>
      </>
    ),
  },
};
