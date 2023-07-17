import type { Meta, StoryObj } from '@storybook/react';
import MobileSearch from '.';

const meta: Meta<typeof MobileSearch> = {
  title: 'Component/MobileSearch',
  component: MobileSearch
};

export default meta;

type Story = StoryObj<typeof MobileSearch>;

export const Block: Story = {
  args: {
    text: 'chennai',
    onclick: () => {
      console.log('log');
    }
  }
};
