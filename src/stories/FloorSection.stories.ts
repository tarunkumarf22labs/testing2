import type { Meta, StoryObj } from "@storybook/react";
import { FloorSection } from "./FloorSection";

const meta: Meta<typeof FloorSection> = {
  title: "Component/FloorSection",
  component: FloorSection,
};

export default meta;

type Story = StoryObj<typeof FloorSection>;

export const Default: Story = {
  args: {},
};
