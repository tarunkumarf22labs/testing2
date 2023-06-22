import type { Meta, StoryObj } from "@storybook/react";
import ReadMoreOrLess from "./ReadMoreOrLess";

const meta: Meta<typeof ReadMoreOrLess> = {
  title: "Component/ReadMoreOrLess",
  component: ReadMoreOrLess,
};

export default meta;

type Story = StoryObj<typeof ReadMoreOrLess>;

export const Default: Story = {
  args: {
    story:'Deja View is set on top of a hill in a 14-acre plantation called Elamala Estate, about 20 minutes from the town of Sultan’s Battery in Wayanad, Kerala & 2.5-3 hours from Mysore, Kannur & Calicut Airports. The villa is part of a private community of six homes, the result of a shared vision of a group of friends to create a utopian world - a return to a remembered past of communal living amongst nature. This ideal is embedded in the design of the home - an open plan layout that brings everyone together and the way that spaces commune with the natural surroundings. From its exterior, this is very much a classical Kerala planter-villa with sloping roofs & Calicut terracotta tiling, a rear sit-out & the piece-de-resistance, a long east-facing verandah with sweeping views of rainforest-clad hills.',
    stringLength: 500
  },
};
