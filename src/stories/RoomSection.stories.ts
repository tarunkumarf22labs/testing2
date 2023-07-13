import type { Meta, StoryObj } from "@storybook/react";
import { RoomSection } from "./RoomSection";

const meta: Meta<typeof RoomSection> = {
  title: "Component/RoomSection",
  component: RoomSection,
};

export default meta;

type Story = StoryObj<typeof RoomSection>;

export const Default: Story = {
  args: {
    villaTitle: "Sky fall",
    heading: "Sky fall",
    roomData: [
      {
        id: 1,
        title: "Room",
        description: "Staff Accommodation available only as part of the regular guest list and using one of three bed-rooms, external staff accommodation available near property at your own cost",
        guestCapacity: {
          minAdultAndChildren: 2,
          maxAdultAndChildren: 1,
          infant: 0,
          pet: 0
        },
        bathRoomType: 'shares',
        roomCount: 2,
        pricing: {
          basic: 2000,
          pet: 500,
          extraGuest: 1000,
        },
        amenities: [{
          icon: "https://luxunlockdev.s3.ap-south-1.amazonaws.com/wifi_high_824f7b47f3.svg",
          text: "High-Speed Internet Access, Wi-Fi Connectivity"
        }],
        images: [{
          image: "https://luxunlockdev.s3.ap-south-1.amazonaws.com/Upper_Bedroom_Bathroom_32632b0221.jpg",
          thumbnail: "https://luxunlockdev.s3.ap-south-1.amazonaws.com/thumbnail_Upper_Bedroom_Bathroom_32632b0221.jpg",
          type: "main"
        }]
      }
    ]
  },
};
