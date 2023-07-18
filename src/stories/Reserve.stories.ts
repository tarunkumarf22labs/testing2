import type { Meta, StoryObj } from '@storybook/react';
import Reserve from './Reserve';

interface Reserverops {}

const meta: Meta<typeof Reserve> = {
  title: 'Component/Reserve',
  component: Reserve
};

export default meta;

type Story = StoryObj<typeof Reserve>;

export const Default: Story = {
  args: {}
};
