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

export const SettingsIcon: Story = {
  args: {
    icon: 'settings',
  },
};

export const BlueAlertIcon: Story = {
  args: {
    icon: 'alert',
    color: "blue",
  },
};

export const BigGreenMenuIcon: Story = {
  args: {
    icon: 'menu',
    size: 35,
    color: "green",
  },
};
