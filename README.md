# react-github

A sort of GitHub react components.

## Installation

```bash
npm install @kxxoling/react-github
```

## Usage

```jsx
import {GitHubUser, GitHubRepo} from '@kxxoling/react-github';

export function YourUserComponent() {
  return <GitHubUser username='kxxoling' />
}

export function YourRepoComponent() {
  return <GitHubRepo username='kxxoling' repo='react-github' />
}
```
