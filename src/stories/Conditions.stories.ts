import type { Meta, StoryObj } from '@storybook/react';
import { Conditions } from './Conditions';

const meta: Meta<typeof Conditions> = {
  title: 'Component/Conditions',
  component: Conditions
};

export default meta;

type Story = StoryObj<typeof Conditions>;

export const Default: Story = {
  args: {}
};
