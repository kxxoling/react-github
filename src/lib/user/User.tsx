import { useEffect, useState } from 'react';

import { ReactComponent as EmailIcon } from './email.svg';
import { ReactComponent as FollowerIcon } from './follower.svg';
import { ReactComponent as LinkIcon } from './link.svg';
import { ReactComponent as LocationIcon } from './location.svg';
import Skeleton from './Skeleton';

type User = ReactGitHub.User;

export interface GitHubUserProps {
  username: string;
}

const iconStyle = {
  width: '16px',
  fill: 'currentColor',
};

export function GitHubUser({ username }: GitHubUserProps) {
  const api = `https://api.github.com/users/${username}`;
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    async function fetchUser() {
      const resp = await fetch(api);
      const data: User = await resp.json();
      setUser(data);
    }
    fetchUser().catch(() => {});
  }, [api]);

  if (!user) {
    return <Skeleton />;
  }

  return (
    <div className="items-center d-flex flex-col w-[300px] p-4 bg-[#2c323a] overflow-hidden rounded-lg border-[1px solid #d8dee4] text-white">
      <div className="w-70 h-70">
        <img
          className="w-full h-full rounded-full object-cover"
          src={user.avatar_url}
          alt={`@${username}'s GitHub user card`}
        />
      </div>
      <div className="py-4 px-0">
        <div className="d-flex flex-col justify-start gap-3 w-full">
          <div className="flex items-center gap-3">
            <div className="text-lg">{user.name}</div>
            <div className="text-lg">@{username}</div>
          </div>
          <div className="flex items-center gap-3">
            <span>{user.bio}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 text-md">
        <FollowerIcon style={iconStyle} />

        <div className="text-gray-200">{user.followers}</div>
        <span>followers</span>
        <span>·</span>
        <div className="text-gray-200">{user.following}</div>
        <span>following</span>
      </div>

      <div className="d-flex flex-col justify-start gap-3 w-full" style={{ marginTop: 20 }}>
        {user.location && (
          <div className="flex items-center gap-3">
            <LocationIcon style={iconStyle} />

            <span>{user.location}</span>
          </div>
        )}

        {user.email && (
          <div className="flex items-center gap-3">
            <EmailIcon style={iconStyle} />
            <span>{user.email}</span>
          </div>
        )}

        {user.blog && (
          <a href={user.blog} className="flex items-center gap-3">
            <LinkIcon style={iconStyle} />
            <span>{user.blog}</span>
          </a>
        )}
      </div>
    </div>
  );
}
