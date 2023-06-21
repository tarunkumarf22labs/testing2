import type { Meta, StoryObj } from "@storybook/react";
import { CuratedExpModal } from "./CuratedExpModal";

const meta: Meta<typeof CuratedExpModal> = {
  title: "Component/CuratedExpModal",
  component: CuratedExpModal,
};

export default meta;

type Story = StoryObj<typeof CuratedExpModal>;

export const Default: Story = {
  args: {},
};
