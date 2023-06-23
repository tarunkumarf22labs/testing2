import type { Meta, StoryObj } from "@storybook/react";
import Guests from "./Guests";

const meta: Meta<typeof Guests> = {
  title: "Component/Guests",
  component: Guests,
};

export default meta;

type Story = StoryObj<typeof Guests>;

export const Default: Story = {
  args: {
    infant: 0,
    maxAdultAndChildren: 6,
    minAdultAndChildren: 8,
    pet: 1,
  },
};
