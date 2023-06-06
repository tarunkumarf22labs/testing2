import type { Meta, StoryObj } from '@storybook/react';

import  Carousal  from './Carousal';

const meta: Meta<typeof Carousal> = {
  title: 'Carousal',
  component: Carousal,

};

export default meta;
type Story = StoryObj<typeof Carousal>;


export const Primary: Story = {
   args: {
    images: [
        "/images/a01.png",
        "/images/a02.png",
        "/images/a03.png",
        "/images/a04.png",
        "/images/a05.png",
        "/images/a06.png",
        "/images/a07.png",
        "/images/a08.png",
    ]
   }
  };