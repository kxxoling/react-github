import type { Meta, StoryObj } from '@storybook/react';

import { GitHubGist } from './Gist';

const meta = {
  title: 'Components/GitHubGist',
  component: GitHubGist,
  tags: ['docsPage'],
  argTypes: {
    id: {
      control: { type: 'id', default: '2ad0c832f141cd4415aa2b028f54e56a' },
    },
  },
} satisfies Meta<typeof GitHubGist>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LongGist: Story = {
  args: {
    id: '2ad0c832f141cd4415aa2b028f54e56a',
  },
};

export const ShortGist: Story = {
  args: {
    id: 'bcba9688047a6a4dfab06d7b87b1cb10',
    file: 'test.md',
  },
};
