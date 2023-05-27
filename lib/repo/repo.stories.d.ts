import type { StoryObj } from '@storybook/react';
import { GitHubRepo } from './Repo';
declare const meta: {
    title: string;
    component: typeof GitHubRepo;
    tags: string[];
    argTypes: {
        username: {
            control: {
                type: string;
                default: string;
            };
        };
        name: {
            control: {
                type: string;
                default: string;
            };
        };
        showLanguageDetails: {
            control: {
                type: string;
                default: boolean;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=repo.stories.d.ts.map