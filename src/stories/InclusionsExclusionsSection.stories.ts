import type { Meta, StoryObj } from '@storybook/react';
import { InclusionsExclusionsSection } from './InclusionsExclusionsSection';

const meta: Meta<typeof InclusionsExclusionsSection> = {
  title: 'Component/InclusionsExclusionsSection',
  component: InclusionsExclusionsSection
};

export default meta;

type Story = StoryObj<typeof InclusionsExclusionsSection>;

export const Default: Story = {
  args: {}
};
