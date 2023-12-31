import type { Meta, StoryObj } from '@storybook/react';
import BottomSheet from '.';

const meta: Meta<typeof BottomSheet> = {
  title: 'Component/BottomSheet',
  component: BottomSheet
};

export default meta;

type Story = StoryObj<typeof BottomSheet>;

export const Block: Story = {
  args: {
    children: '',
    isOpen: true,
    handleclose: () => {}
  }
};
