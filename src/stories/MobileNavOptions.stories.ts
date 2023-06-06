import type { Meta, StoryObj } from "@storybook/react";
import MobileNavOptions from "./MobileNavOptions";

const meta: Meta<typeof MobileNavOptions> = {
  title: "MobileNavOptions",
  component: MobileNavOptions,
};

export default meta;
type Story = StoryObj<typeof MobileNavOptions>;

export const Primary: Story = {};
