import type { Meta, StoryObj } from '@storybook/react';
import { ReviewCard } from './ReviewCard';

const meta: Meta<typeof ReviewCard> = {
  title: 'Component/ReviewCard',
  component: ReviewCard
};

export default meta;

type Story = StoryObj<typeof ReviewCard>;

export const Default: Story = {
  args: {
    top: true,
    reviewText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    name: 'Atul Malhotra',
    state: 'Maharashtra',
    img: '/images/Avatar_image.webp',
    customClasses: ''
  }
};
