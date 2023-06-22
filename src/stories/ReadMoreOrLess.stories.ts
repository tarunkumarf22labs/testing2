import type { Meta, StoryObj } from "@storybook/react";
import ReadMoreOrLess from "./ReadMoreOrLess";

const meta: Meta<typeof ReadMoreOrLess> = {
  title: "Component/ReadMoreOrLess",
  component: ReadMoreOrLess,
};

export default meta;

type Story = StoryObj<typeof ReadMoreOrLess>;

export const Default: Story = {
  args: {
    readMore: false,
    setReadMore: function(){}
  },
};
