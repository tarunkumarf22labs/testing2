import type { Meta, StoryObj } from '@storybook/react';
import { ReviewSection } from './ReviewSection';

interface ReviewSectionProps {}

const meta: Meta<typeof ReviewSection> = {
  title: 'Component/ReviewSection',
  component: ReviewSection
};

export default meta;

type Story = StoryObj<typeof ReviewSection>;

export const Default: Story = {
  args: {}
};
