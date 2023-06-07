import type { Meta, StoryObj } from "@storybook/react";
import { DetailedDescriptionSection } from "./DetailedDescriptionSection";

const meta: Meta<typeof DetailedDescriptionSection> = {
  title: "Component/DetailedDescriptionSection",
  component: DetailedDescriptionSection,
};

export default meta;

type Story = StoryObj<typeof DetailedDescriptionSection>;

export const Default: Story = {
  args: {},
};
