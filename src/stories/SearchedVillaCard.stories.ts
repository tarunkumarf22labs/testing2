import type { Meta, StoryObj } from "@storybook/react";
import SearchedVillaCard from "./SearchedVillaCard";

const meta: Meta<typeof SearchedVillaCard> = {
  title: "Component/SearchedVillaCard",
  component: SearchedVillaCard,
};

export default meta;

type Story = StoryObj<typeof SearchedVillaCard>;

export const Default: Story = {
  args: {
        amenities : [
          "6 Guest",
          "3 Bedrooms",
          "2 Bathrooms",
          "English-Style Cottage",
        ],
        city: 'Coonoor',
        state: 'Tamil Nadu',
        title:'Chole Cottage',
        description: " In a village overlooking the backwaters of the Vembanad Lake near Cochin, experience an unimaginably perfect abode under the stars and reflected in water. Here is a beautiful and soulful luxury home in Kerala that invites you to live in the moment. Built by one of India's best-known ad-film makers as a passion project, with incredible attention to detail.",
        available: false,
        availableDates: '28 Jun - 31 MAY',
        villaPrice: '₹12,589',
        roomPrice: "₹5,589"
  }
};
