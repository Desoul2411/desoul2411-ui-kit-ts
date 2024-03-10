import type { Meta, StoryObj } from "@storybook/react";

import LabeledInput from "../src/LabeledInput";

const meta = {
  title: "Example/LabeledInput",
  component: LabeledInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LabeledInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary labeled Input",
    placeholder: "Enter value",
  },
};

export const Big: Story = {
  args: {
    label: "Big labeled Input",
    big: true,
    placeholder: "Enter value",
    borderColor: "black",
  },
};

export const WithCapitalizedLabel: Story = {
  args: {
    label: "Input with capitalized label",
    capitalizedLabel: true,
    placeholder: "Enter value",
  },
};
