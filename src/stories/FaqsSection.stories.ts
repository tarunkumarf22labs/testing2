import type { Meta, StoryObj } from "@storybook/react";
import { FaqsSection } from "./FaqsSection";

const meta: Meta<typeof FaqsSection> = {
  title: "Component/FaqsSection",
  component: FaqsSection,
};

export default meta;

type Story = StoryObj<typeof FaqsSection>;

export const Default: Story = {
  args: {},
};
