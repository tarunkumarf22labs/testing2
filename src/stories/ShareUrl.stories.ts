import type { Meta, StoryObj } from '@storybook/react';
import ShareUrl from './ShareUrl';

const meta: Meta<typeof ShareUrl> = {
  title: 'Component/ShareUrl',
  component: ShareUrl
};

export default meta;

type Story = StoryObj<typeof ShareUrl>;

export const Default: Story = {
  args: {
    url: "https://www.google.com",
    setShowShareModal: function(){
        console.log('Function has been called')
    },
    showShareModal: true,
  }
};
