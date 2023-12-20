import type { Meta, StoryObj } from "@storybook/react";

import { Box, Button, ToastAction, useToast } from "@nayhoo/components";

import React from "react";

const meta: Meta<typeof Box> = {
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

const ToastWithHooks = () => {
  const [toast, holder] = useToast();

  return (
    <Box>
      <Button
        onClick={() => {
          const now = new Date();
          const inOneWeek = now.setDate(now.getDate() + 7);

          const description = new Intl.DateTimeFormat("en-US", {
            dateStyle: "full",
            timeStyle: "short",
          }).format(inOneWeek);

          toast({
            action: (
              <ToastAction altText="Goto schedule to undo" asChild>
                <Button size="1" variant="outline">
                  Undo
                </Button>
              </ToastAction>
            ),
            description,
            title: "Scheduled: Catch up",
          });
        }}
      >
        Add to calendar
      </Button>

      {holder}
    </Box>
  );
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => <ToastWithHooks />,
};
