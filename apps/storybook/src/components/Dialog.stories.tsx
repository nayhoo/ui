import type { Meta, StoryObj } from "@storybook/react";
import { Cross2Icon } from "@radix-ui/react-icons";

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  IconButton,
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

export const Header: Story = {
  args: {
    children: (
      <>
        <DialogTrigger asChild>
          <Button>Click me!</Button>
        </DialogTrigger>

        <DialogContent
          components={{
            Header: (
              <DialogHeader>
                <DialogClose asChild>
                  <IconButton css={{ ml: "auto" }}>
                    <Cross2Icon />
                  </IconButton>
                </DialogClose>
              </DialogHeader>
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

export const Footer: Story = {
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
