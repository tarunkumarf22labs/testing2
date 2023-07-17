import type { Meta, StoryObj } from '@storybook/react';
import { StorySection } from './StorySection';

const meta: Meta<typeof StorySection> = {
  title: 'Component/StorySection',
  component: StorySection
};

export default meta;

type Story = StoryObj<typeof StorySection>;

export const Default: Story = {
  args: {}
};
