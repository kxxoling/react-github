import type { StoryObj } from '@storybook/react';
import { GitHubUser } from './User';
declare const meta: {
    title: string;
    component: typeof GitHubUser;
    tags: string[];
    argTypes: {
        username: {
            control: {
                type: string;
                default: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=user.stories.d.ts.map