import type { Meta, StoryObj } from "@storybook/react";
import { ListYourPropertySection } from "./ListYourPropertySection";

const meta: Meta<typeof ListYourPropertySection> = {
  title: "Component/ListYourPropertySection",
  component: ListYourPropertySection,
};

export default meta;

type Story = StoryObj<typeof ListYourPropertySection>;

export const Default: Story = {
  args: {},
};
