# @nayhoo/hooks

A collection of React hooks.

## Installation

```sh
npm install @nayhoo/hooks
```

## Usage

```tsx
import { useScrollPosition } from "@nayhoo/hooks";

export const Component = () => {
  const scrollPosition = useScrollPosition();

  return `Scroll position: ${scrollPosition}`;
};
```
