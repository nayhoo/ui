import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "@nayhoo/components";

import React, { useState } from "react";

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

const items = [
  { label: "Mary Shepherd-Sunderland", value: "maryShepherdSunderland" },
  { label: "Angela Orosco", value: "angelaOrosco" },
  { label: "James Sunderland", value: "jamesSunderland", disabled: true },
  { label: "Eddie Dombrowski", value: "eddieDombrowski" },
  { label: "Maria", value: "maria" },
  { label: "Laura", value: "laura" },
];

const SelectWithHooks = () => {
  const [value, setValue] = useState<string>();

  return (
    <Select
      items={items}
      onValueChange={setValue}
      placeholder="Select a character ..."
      value={value}
    />
  );
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    items,
    placeholder: "Select a character ...",
  },
};

export const Controlled: Story = {
  render: () => <SelectWithHooks />,
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    placeholder: "Disabled",
  },
};
