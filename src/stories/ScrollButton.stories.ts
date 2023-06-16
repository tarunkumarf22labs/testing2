import type { Meta, StoryObj } from "@storybook/react";
import { ScrollButton } from "./ScrollButton";

interface ScrollButtonProps {}

const meta: Meta<typeof ScrollButton> = {
  title: "Component/ScrollButtton",
  component: ScrollButton,
};

export default meta;

type Story = StoryObj<typeof ScrollButton>;

export const Default: Story = {
  args: {},
};
