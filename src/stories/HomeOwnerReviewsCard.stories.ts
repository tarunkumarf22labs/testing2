import type { Meta, StoryObj } from "@storybook/react";
import HomeOwnerReviewsCard from "./HomeOwnerReviewsCard";

const meta: Meta<typeof HomeOwnerReviewsCard> = {
  title: "Component/HomeOwnerReviewsCard",
  component: HomeOwnerReviewsCard,
};

export default meta;

type Story = StoryObj<typeof HomeOwnerReviewsCard>;

export const Default: Story = {
  args: {
    description:
      "Trust and Credibility: Being listed on a reputable hotel site can enhance the trust and credibility of home owners' properties. Guests often feel more confident booking accommodations through established platforms that have strict quality standards",
    date: "2023-07-19",
    id: 1,
    name: "raju",
    image:
      "https://luxunlockdev.s3.ap-south-1.amazonaws.com/132e08c603bcd528609ed2d1b733cade_c0a038efcd.jpg",
    link: "https://onecompiler.com/",
  },
};
