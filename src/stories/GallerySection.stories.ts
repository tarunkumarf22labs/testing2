import type { Meta, StoryObj } from "@storybook/react";
import { GallerySection, ImagesBig, ImagesSmall } from "./GallerySection";

const meta: Meta<typeof GallerySection> = {
  title: "Component/GallerySection",
  component: GallerySection,
};

export default meta;

type Story = StoryObj<typeof GallerySection>;

export const Default: Story = {
  args: {
    heading: { heading: "Gallery", subHeading: "Deja View's" },
    bigImages: ImagesBig,
    smallImages: ImagesSmall,
  },
};
