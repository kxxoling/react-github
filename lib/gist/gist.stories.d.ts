import type { StoryObj } from '@storybook/react';
import { GitHubGist } from './Gist';
declare const meta: {
    title: string;
    component: typeof GitHubGist;
    tags: string[];
    argTypes: {
        id: {
            control: {
                type: string;
                default: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LongGist: Story;
export declare const ShortGist: Story;
//# sourceMappingURL=gist.stories.d.ts.map