import type { Meta, StoryObj } from '@storybook/react';
import Bookingcard from '.';

const meta: Meta<typeof Bookingcard> = {
  title: 'Component/Bookingcard',
  component: Bookingcard
};

export default meta;

type Story = StoryObj<typeof Bookingcard>;

export const Block: Story = {
  args: {
    id: '01',
    imagesrc:
      'https://a0.muscache.com/im/pictures/miso/Hosting-829319222305726312/original/6c63a08b-f6fd-4ed1-b00a-948f21f1e481.jpeg?im_w=720',
    placename: 'Coonoor, Tamil Nadu, India',
    villatype: 'Chloe Cottage'
  }
};
