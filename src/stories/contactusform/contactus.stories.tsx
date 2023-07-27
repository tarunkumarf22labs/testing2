import type { Meta, StoryObj } from "@storybook/react";
import Contactform from ".";

const meta: Meta<typeof Contactform> = {
    title: "Component/Contactform",
    component: Contactform
}

export default meta

type Story = StoryObj<typeof Contactform>;


export const BasicForm: Story = {
    args: {
        onSubmit: () => { }
    }
};
