import type { Meta, StoryObj } from "@storybook/react";
import GalleryView from "./GalleryView";

const meta: Meta<typeof GalleryView> = {
  title: "Component/GalleryView",
  component: GalleryView,
};

export default meta;

type Story = StoryObj<typeof GalleryView>;

export const Block: Story = {
  args: {
    
  },
};

