import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "@nayhoo/components";

import React, { useState } from "react";

const meta: Meta<typeof Switch> = {
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

const SwitchWithHooks = () => {
  const [checked, setChecked] = useState(false);

  const onCheckedChange = (checked: boolean) => {
    setChecked(checked);
  };

  return <Switch checked={checked} onCheckedChange={onCheckedChange} />;
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {},
};

export const Size1: Story = {
  args: {
    size: "1",
  },
};

export const Controlled: Story = {
  render: () => <SwitchWithHooks />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

// export const Label: Story = {
//   args: {
//     // label: "Airplane mode",
//   },
// };
