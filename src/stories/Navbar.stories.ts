import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Navbar",
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
  args: {
    options: [
      {
        title: "DESTINATIONS",
        options: [
          { id: 2, value: "Villas in Conoor", path: "coonoor" },
          { id: 3, value: "Villas in Chettinad", path: "chettinad" },
          { id: 4, value: "Villas in Gulf Of Mannar", path: "gulf-of-mannar" },
          { id: 5, value: "Villas in Goa", path: "goa" },
          { id: 6, value: "Villas in Kerala", path: "kerala" },
          { id: 7, value: "Villas in Kodaikanal", path: "kodaikanal" },
          { id: 8, value: "Villas in Mamallapuram", path: "mamallapuram" },
          { id: 9, value: "Villas in Ooty", path: "ooty" },
          { id: 10, value: "Villas in Pondicherry", path: "pondicherry" },
          { id: 11, value: "Villas in Sri Lanka", path: "sri-lanka" },
          { id: 12, value: "Villas in Alampara Coast", path: "alampara-coast" },
          { id: 13, value: "Villas in The Nilgiris", path: "the-nilgiris" },
          { id: 14, value: "Villas in Thirupugalpur", path: "thirupugalpur" },
          { id: 15, value: "Wayanand", path: "wayanand" },
        ],
      },
      {
        title: "LUX LOYALITY",
        options: [],
      },
      {
        title: "JOURNAL",
        options: [],
      },
      {
        title: "HOME OWNER",
        options: [],
      },
      {
        title: "CONTACT US",
        options: [],
      },
    ],
  },
};
