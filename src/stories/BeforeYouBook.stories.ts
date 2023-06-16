import type { Meta, StoryObj } from "@storybook/react";
import { BeforeYouBook } from "./BeforeYouBook";

const meta: Meta<typeof BeforeYouBook> = {
  title: "Component/Before You Book",
  component: BeforeYouBook,
};

export default meta;

type Story = StoryObj<typeof BeforeYouBook>;

export const Default: Story = {
  args: {},
};
