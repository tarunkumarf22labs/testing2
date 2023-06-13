import type { Meta, StoryObj } from "@storybook/react";
import SelectRooms from "./SelectRooms";

const meta: Meta<typeof SelectRooms> = {
  title: "Component/SelectRooms",
  component: SelectRooms,
};

export default meta;

type Story = StoryObj<typeof SelectRooms>;

export const Default: Story = {
  args: {},
};
