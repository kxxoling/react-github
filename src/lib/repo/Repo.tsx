import { useEffect, useState } from 'react';

import { ReactComponent as LinkIcon } from '../user/link.svg';
import { ReactComponent as BookmarkIcon } from './bookmark.svg';
import { ReactComponent as CodeIcon } from './code.svg';
import { ReactComponent as ForkIcon } from './fork.svg';
import { ReactComponent as InfoIcon } from './info.svg';
import Skeleton from './Skeleton';
import { ReactComponent as StarIcon } from './star.svg';
import { ReactComponent as WatchIcon } from './watch.svg';

type Repo = ReactGitHub.Repo;

export interface GitHubRepoProps {
  username: string;
  name: string;
}

const iconStyle = {
  width: '16px',
  fill: 'currentColor',
  flexShrink: 0,
};

export function GitHubRepo({ username, name }: GitHubRepoProps) {
  const api = `https://api.github.com/repos/${username}/${name}`;
  const [repo, setRepo] = useState<Repo | null>(null);
  useEffect(() => {
    async function fetchRepo() {
      const resp = await fetch(api);
      const data: Repo = await resp.json();
      setRepo(data);
    }
    fetchRepo().catch(() => {});
  }, [api]);

  if (!repo) {
    return <Skeleton />;
  }
  const items = [
    { Icon: InfoIcon, key: 'description', inner: repo.description },
    {
      Icon: LinkIcon,
      key: 'homepage',
      inner: repo.homepage ? (
        <a href={repo.homepage} target="_blank">
          {repo.homepage}
        </a>
      ) : null,
    },
    { Icon: CodeIcon, key: 'languages', inner: repo.language },
    {
      Icon: BookmarkIcon,
      key: 'topics',
      inner: repo.topics?.length ? repo.topics.join(', ') : null,
    },
  ];

  return (
    <div className="items-center d-flex flex-col w-[320px] max-w-[450px] p-4 bg-[#2c323a] overflow-hidden rounded-lg border-[1px solid #d8dee4] text-white">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8">
          <img
            className="w-full h-full rounded-full object-cover"
            src={repo.owner.avatar_url}
            alt={`@${username}'s GitHub user card`}
          />
        </div>

        <div className="flex gap-1">
          <span>{username}</span>
          <span>/</span>
          <span>{name}</span>
        </div>
      </div>

      <div className="flex mt-2 ">
        <div className="flex flex-col gap-1 grow">
          <div className="flex gap-1 justify-center items-center">
            <span className="text-gray-300">
              <StarIcon style={iconStyle} />
            </span>
            <b>{repo.stargazers_count}</b>
          </div>
          <div className="text-gray-300 text-xs flex items-center justify-center">Stars</div>
        </div>
        <div className="flex flex-col gap-1 grow">
          <div className="flex gap-1 justify-center items-center">
            <span className="text-gray-300">
              <ForkIcon style={iconStyle} />
            </span>
            <b>{repo.forks_count}</b>
          </div>
          <div className="text-gray-300 text-xs flex items-center justify-center">Forks</div>
        </div>
        <div className="flex flex-col gap-1 grow">
          <div className="flex gap-1 justify-center items-center">
            <span className="text-gray-300">
              <WatchIcon style={iconStyle} />
            </span>
            <b>{repo.watchers_count}</b>
          </div>
          <div className="text-gray-300 text-xs flex items-center justify-center">Watchers</div>
        </div>
      </div>

      <div className="flex gap-1 flex-col text-sm mt-4">
        {items.map(({ Icon, key, inner }) =>
          inner ? (
            <div className="flex items-center gap-2 text-gray-300" key={key}>
              <Icon style={iconStyle} />
              <span>{inner}</span>
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
}
