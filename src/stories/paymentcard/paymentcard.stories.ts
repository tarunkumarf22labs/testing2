import type { Meta, StoryObj } from "@storybook/react";
import Paymentcard from ".";

const meta: Meta<typeof Paymentcard> = {
    title: "Component/Paymentcard",
    component: Paymentcard
}

export default meta

type Story = StoryObj<typeof Paymentcard>
export const Block: Story = {
    args: {
        datas: [
            {
                title: "₹27,500 X 13 Nights",
                price: "₹3,57,500"
            }, {
                title: "Additional Guest Charges",
                price: "₹00"
            }, {
                title: "Pet Charges",
                price: "₹3,57,500"
            }, {
                title: "Refundable Security Deposit",
                price: "₹3,57,500"
            } , {
                title: "VAT / GST",
                price: "₹64,350"
            }
        ]
    }
}