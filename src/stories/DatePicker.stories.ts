import type { Meta, StoryObj } from '@storybook/react';
import Datepicker from './DatePicker';

const meta: Meta<typeof Datepicker> = {
  title: 'Component/Datepicker',
  component: Datepicker
};

export default meta;
type Story = StoryObj<typeof Datepicker>;

export const Primary: Story = {
  args: {
    inVillaDetails: false
  }
};
