import type { Meta, StoryObj } from '@storybook/react';
import Option from './Option';

const meta: Meta<typeof Option> = {
  title: 'Option',
  component: Option
};

export default meta;
type Story = StoryObj<typeof Option>;

export const Primary: Story = {
  args: {
    title: 'Villa in Chloe Cottage',
    options: [],
    id: 1
  }
};
