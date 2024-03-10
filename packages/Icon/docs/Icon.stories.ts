import type { Meta, StoryObj } from "@storybook/react";
import Icon from "../src/Icon";
import settings from "../src/icons/icon-settings.svg";

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
    name: 'settings',
  },
};

export const AlertBlueIcon: Story = {
  args: {
    name: 'alert',
    color: "blue",
  },
};

export const MenuGreenIcon: Story = {
  args: {
    name: 'menu',
    size: 35,
    color: "green",
  },
};
