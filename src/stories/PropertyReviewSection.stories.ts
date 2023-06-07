import type { Meta, StoryObj } from "@storybook/react";
import { PropertyReviewSection } from "./PropertyReviewSection";

const meta: Meta<typeof PropertyReviewSection> = {
  title: "Component/PropertyReviewSection",
  component: PropertyReviewSection,
};

export default meta;

type Story = StoryObj<typeof PropertyReviewSection>;

export const Default: Story = {
  args: {},
};
