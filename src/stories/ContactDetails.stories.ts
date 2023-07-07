import type { Meta, StoryObj } from "@storybook/react";
import ContactDetails from "./ContactDetails"; 

const meta: Meta<typeof ContactDetails> = {
  title: "Component/ContactDetails",
  component: ContactDetails,
};

export default meta;

type Story = StoryObj<typeof ContactDetails>;

export const Default: Story = {
  args: {},
};
