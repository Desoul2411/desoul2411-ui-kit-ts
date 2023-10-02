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
    children: "Primary button",
  },
};

export const Big: Story = {
  args: {
    children: "Big button",
    big: true,
  },
};

export const WithGreenFontColor: Story = {
  args: {
    children: "Green font color button",
    color: "green",
  },
};

export const WithRedBorder: Story = {
  args: {
    children: "Red border button",
    borderColor: "red",
  },
};
