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

function handleClick() {
  alert("You clicked the button!");
}

export const Primary: Story = {
  args: {
    children: "Primary button",
    onClick: handleClick,
  },
};

export const Big: Story = {
  args: {
    children: "Big button",
    big: true,
    onClick: handleClick,
  },
};

export const WithWhiteBackroundColorAndGreenFontColor: Story = {
  args: {
    children: "Green font color button",
    color: "green",
    borderColor: "green",
    backgroundColor: "white",
    onClick: handleClick,
  },
};

export const WithRedBorder: Story = {
  args: {
    children: "Red border button",
    borderColor: "red",
    onClick: handleClick,
  },
};
