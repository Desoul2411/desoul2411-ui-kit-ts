import type { Meta, StoryObj } from "@storybook/react";

import Button from "../src/Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    color: "red",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    big: true,
    color: "Yellow",
  },
};
