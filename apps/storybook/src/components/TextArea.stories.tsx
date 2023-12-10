import type { Meta, StoryObj } from "@storybook/react";

import { TextArea } from "@nayhoo/components";

import React, { useState } from "react";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
};

export default meta;
type Story = StoryObj<typeof TextArea>;

const TextAreaWithHooks = () => {
  const [value, setValue] = useState<string>();

  const onCheckedChange = (e: React.ChangeEventHandler<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return <TextArea value={value} onChange={onCheckedChange} />;
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => <TextAreaWithHooks />,
};
