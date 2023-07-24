import type { Meta, StoryObj } from "@storybook/react";
import CelebrationForm from ".";

const meta: Meta<typeof CelebrationForm> = {
    title: "Component/CelebrationForm",
    component: CelebrationForm
}

export default meta

type Story = StoryObj<typeof CelebrationForm>;


export const BasicForm: Story = {
    args: {
        onSubmit: () => { }
    }
};
