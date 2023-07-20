import type { Meta, StoryObj } from "@storybook/react";
import PhotoCollage from ".";


const meta: Meta = {
    title: "Component/PhotoCollage",
    component: PhotoCollage
}

export default meta
type Story = StoryObj<typeof PhotoCollage>
export const Default: Story = {
    args: {

    }
}