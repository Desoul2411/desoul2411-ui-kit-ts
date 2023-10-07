import type { Meta, StoryObj } from "@storybook/react";
import Icon from "../src/Icon";
import settings from "../src/icons/settings.svg";

const meta = {
  title: "Example/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    path: settings,
  },
};

export const BlueIcon: Story = {
  args: {
    path: settings,
    color: "blue",
  },
};

export const BigGreenIcon: Story = {
  args: {
    path: settings,
    size: 35,
    color: "green",
  },
};
