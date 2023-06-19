import type { Meta, StoryObj } from "@storybook/react";
import Filter from "./Filter";

const meta: Meta<typeof Filter> = {
  title: "Component/Filter",
  component: Filter,
};

export default meta;

type Story = StoryObj<typeof Filter>;

export const Primary: Story = {
  args: {
    options: [
      "all",
      "exterior",
      "living",
      "bedrooms",
      "bathrooms",
      "common areas",
    ]
  },
};

