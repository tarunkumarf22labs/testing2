import type { Meta, StoryObj } from "@storybook/react";
import { HomeTruthsSection } from "./HomeTruthsSection";

const meta: Meta<typeof HomeTruthsSection> = {
  title: "Component/HomeTruthsSection",
  component: HomeTruthsSection,
};

export default meta;

type Story = StoryObj<typeof HomeTruthsSection>;

export const Default: Story = {
  args: {},
};
