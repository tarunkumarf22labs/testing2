import type { Meta, StoryObj } from "@storybook/react";
import { ReviewsCollection } from "./ReviewsCollection";

const meta: Meta<typeof ReviewsCollection> = {
  title: "Component/ReviewsCollection",
  component: ReviewsCollection,
};

export default meta;

type Story = StoryObj<typeof ReviewsCollection>;

export const Default: Story = {
  args: {},
};
