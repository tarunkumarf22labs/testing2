import type { Meta ,StoryObj } from "@storybook/react"
import BookingForm from "."




const meta: Meta<typeof BookingForm> = {
    title: "Component/BookingForm",
    component: BookingForm,
  };
  
export default meta;

type Story = StoryObj<typeof BookingForm>;

export const Block: Story = {
    args: {
    },
  };