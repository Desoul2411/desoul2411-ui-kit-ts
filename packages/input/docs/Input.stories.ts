import type { Meta, StoryObj } from "@storybook/react";

import Input from "../src/Input";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    borderColor: "grey",
    placeholder: "Enter value",
  },
};

export const BigGreen: Story = {
  args: {
    borderColor: "green",
    big: true,
    placeholder: "Enter value",
  },
};
