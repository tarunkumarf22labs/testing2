import type { Meta, StoryObj } from "@storybook/react";
import { RoomCard } from "./RoomCard";

interface RoomCardProps {}

const meta: Meta<typeof RoomCard> = {
  title: "Component/RoomCard",
  component: RoomCard,
};

export default meta;

type Story = StoryObj<typeof RoomCard>;

export const Default: Story = {
  args: {
    image: "/images/Room1.png",
    roomName: "Second Bedrom",
    icons: [
      "wifi",
      "broom",
      "fork",
      "bed",
      "bathtub",
      "thermometer",
      "flash",
      "drop",
    ],
  },
};
