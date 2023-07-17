import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Component/Button',
  component: Button
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Block: Story = {
  args: {
    active: true,
    text: 'Tamil Nadu'
  }
};

export const Link: Story = {
  args: {
    text: 'Tamil Nadu'
  }
};
