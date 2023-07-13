import type { Meta, StoryObj } from "@storybook/react";
import SelectRoomOption from "./SelectRoomOption";

const meta: Meta<typeof SelectRoomOption> = {
  title: "Component/SelectRoomOption",
  component: SelectRoomOption,
};

export default meta;

type Story = StoryObj<typeof SelectRoomOption>;

export const Default: Story = {
  args: {
    id: 1,
  title: 'Standard Room',
  guestCapacity: {
    minAdultAndChildren: 2,
    maxAdultAndChildren: 1,
    infant: 1,
    pet: 1,
  },
  basicPrice: 4000,
  petPrice: 2000,
  extraGuestsPrice: 2000
  },
};
