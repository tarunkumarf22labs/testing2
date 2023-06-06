import type { Meta, StoryObj } from "@storybook/react";
import MobileNavbar from "./MobileNavbar";

const meta: Meta<typeof MobileNavbar> = {
  title: "MobileNavbar",
  component: MobileNavbar,
};

export default meta;
type Story = StoryObj<typeof MobileNavbar>;

export const Primary: Story = {};
