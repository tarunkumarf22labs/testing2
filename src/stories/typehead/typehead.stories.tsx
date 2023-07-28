import type { Meta, StoryObj } from "@storybook/react"
import Typehead from "."

const meta: Meta<typeof Typehead> = {
    title: "Component/Typehead",
    component: Typehead
}

export default meta;

type Story = StoryObj<typeof Typehead>

export const Default: Story = {
    args: {

    }
}
