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
    heading: {
      heading: "rooms",
      subHeading: "deja view’s",
    },
  },
};
