import type { Meta, StoryObj } from '@storybook/react';

import { GitHubUser } from './User';

const meta = {
  title: 'Components/GitHubUser',
  component: GitHubUser,
  tags: ['docsPage'],
  argTypes: {
    username: {
      control: { type: 'text', default: 'kxxoling' },
    },
  },
} satisfies Meta<typeof GitHubUser>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    username: 'kxxoling',
  },
};
