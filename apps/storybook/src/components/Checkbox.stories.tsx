import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@nayhoo/components";

import React, { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const CheckboxWithHooks = () => {
  const [checked, setChecked] = useState(false);

  const onCheckedChange = (checked: boolean) => {
    setChecked(checked);
  };

  return <Checkbox checked={checked} onCheckedChange={onCheckedChange} />;
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {},
};

export const Controlled: Story = {
  render: () => <CheckboxWithHooks />,
};

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

// export const Label: Story = {
//   args: {
//     label: "Airplane mode",
//   },
// };
