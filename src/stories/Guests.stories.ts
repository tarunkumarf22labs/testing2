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
    numberOfGuests: {
      adults: 1,
      children: 0,
      infants: 0,
      pets: 0,
      additional_guests: 0,
    },
    setNumberOfGuests: () => {},
  },
};
