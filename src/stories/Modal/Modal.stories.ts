import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Component/Modal",
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Block: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    // children: `Hello`,
    title: "Title",
  },
};
