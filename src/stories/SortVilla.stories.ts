import type { Meta, StoryObj } from "@storybook/react";
import SortVilla from "./SortVilla";

const meta: Meta<typeof SortVilla> = {
  title: "Component/SortVilla",
  component: SortVilla,
};

export default meta;

type Story = StoryObj<typeof SortVilla>;

export const Default: Story = {
  args: {},
};
