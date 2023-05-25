import type { Meta, StoryObj } from '@storybook/react';

import { GitHubRepo } from './Repo';

const meta = {
  title: 'Components/GitHubRepo',
  component: GitHubRepo,
  tags: ['docsPage'],
  argTypes: {
    username: {
      control: { type: 'text', default: 'kxxoling' },
    },
    name: {
      control: { type: 'text', default: 'blog' },
    },
  },
} satisfies Meta<typeof GitHubRepo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    username: 'kxxoling',
    name: 'blog',
  },
};
