import type { Meta, StoryObj } from '@storybook/react';
import MediaListing from './MediaListing';

const meta: Meta<typeof MediaListing> = {
  title: 'Component/MediaListing',
  component: MediaListing,

};

export default meta;
type Story = StoryObj<typeof MediaListing>;


export const Primary: Story = {
args: {
    MediaImages: [
        '/images/architectural-digest.png',
        '/images/plateform.png',
        '/images/traveller.png',
        '/images/the-hindu-group.png',
        '/images/architectural-digest.png',
        '/images/plateform.png',
        '/images/traveller.png',
        '/images/the-hindu-group.png'
      ]
}
  };