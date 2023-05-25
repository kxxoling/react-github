declare namespace ReactGitHub {
  export interface User {
    id: number;
    name: string;
    avatar_url: string;
    company: string | null;
    location: string | null;
    blog: string | null;
    email: string | null;
    hireable: string | null;
    bio: string | null;
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
  }

  export interface RepoOwner {
    login: string;
    avatar_url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
  }

  export interface Repo {
    owner: RepoOwner;

    name: string;
    full_name: string;
    html_url: string;
    description: string;
    forks: number;
    forks_count: number;
    open_issues: number;
    stargazers_count: number;
    watchers_count: number;
    watchers: number;
    subscribers_count: number;
    is_template: boolean;
    archived: boolean;
    disabled: boolean;
    topics: string[];
    license: string | null;
    allow_forking: boolean;
    homepage: string | null;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    language: string | null;
    subscribers_url: string;
    stargazers_url: string;
    contributors_url: string;
    forks_url: string;
  }
}

declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
