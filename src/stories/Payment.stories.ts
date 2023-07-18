import type { Meta, StoryObj } from "@storybook/react";
import Payment from "./Payment";

const meta: Meta<typeof Payment> = {
  title: "Component/Payment",
  component: Payment,
};

export default meta;

type Story = StoryObj<typeof Payment>;

export const Default: Story = {
  args: {
  },
};
