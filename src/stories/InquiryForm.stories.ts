import type { Meta, StoryObj } from '@storybook/react';

import  InquiryForm  from './InquiryForm';

const meta: Meta<typeof InquiryForm> = {
  title: 'Component/InquiryForm',
  component: InquiryForm,

};

export default meta;
type Story = StoryObj<typeof InquiryForm>;


export const Primary: Story = {
   args: {
    props: [{
        id: 1,
        title: "Sri Lanka",
      }]
   }
  };