import type { Meta, StoryObj } from "@storybook/react";
import { NameTitle } from "./NameTitle";

const meta: Meta<typeof NameTitle> = {
  title: "Component/NameTitle",
  component: NameTitle,
};

export default meta;

type Story = StoryObj<typeof NameTitle>;

export const Default: Story = {
  args: {
    propertyName: "Deja View's",
    title: "Inclusions",
  },
};
