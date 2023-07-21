import type { Meta, StoryObj } from '@storybook/react';
import AboutSection from './AboutSection';

const meta: Meta = {
  title: 'Component/PhotoCollage',
  component: AboutSection
};

export default meta;
type Story = StoryObj<typeof AboutSection>;
export const Default: Story = {
  args: {}
};
