import type { Meta, StoryObj } from "@storybook/react";
import { FloorSection, IFloorPlanImages } from "./FloorSection";
import { floorPlanImages } from "../data/constants";

const meta: Meta<typeof FloorSection> = {
  title: "Component/FloorSection",
  component: FloorSection,
};

export default meta;

type Story = StoryObj<typeof FloorSection>;

export const Default: Story = {
  args: {
    floorPlanImages,
  },
};
