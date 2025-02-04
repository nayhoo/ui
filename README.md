<!--suppress HtmlDeprecatedAttribute -->
<div align="center">

![](media/monorepo.png)

🌴 Everything Front-End TypeScript monorepo for Nayhoo apps.

[![tests](https://github.com/nayhoo/ui/actions/workflows/tests.yml/badge.svg)](https://github.com/nayhoo/ui/actions/workflows/tests.yml)

</div>

---

**Table of content**

- [Setup](#setup)
- [Packages vs apps](#packages-vs-apps)
- [Packages](#packages)
  - [eslint-config](#eslint-config)
  - [hooks](#hooks)
  - [prettier-config](#prettier-config)
  - [tsconfig](#tsconfig)
  - [ui](#ui)
  - [utils](#utils)
- [Apps](#apps)
  - [nextjs](#nextjs)
  - [react-cosmos](#react-cosmos)

## Setup

This repo uses [pnpm](https://pnpm.io/):

```sh
# Install pnpm with your preferred method: https://pnpm.io/installation.
npm i -g pnpm

# Install all dependencies.
pnpm i
```

## Packages vs apps

This repo contains two types of workspaces:

- `packages`: meant to be published to npm and installed,
- `apps`: meant to be executed.

A good example to illustrate the difference is `vite`: you wouldn't publish an app like this to npm, you would run it, more specifically you would build the JS bundle and then deploy that somewhere.

For packages, you don't want to bundle all the monorepo dependencies, and instead publish them individually. That's why packages have a separate build `tsconfig.json` that resolves monorepo dependencies to `node_modules`.

## Packages

### eslint-config

My personal ESLint config for TS projects.

See the package [here](packages/eslint-config).

### hooks

A collection of React hooks.

See the package [here](packages/hooks).

### prettier-config

My personal Prettier config for TS projects.

See the package [here](packages/prettier-config).

### tsconfig

See the package [here](packages/tsconfig).

### ui

A collection of React components, built with [Radix Primitives](https://www.radix-ui.com/primitives), styled with [vanilla-extract](https://vanilla-extract.style).

See the package [here](packages/ui).

### utils

A collection of utility functions.

See the package [here](packages/utils).

## Apps

### nextjs

Next.js 15 example using @nayhoo/ui.

See the full example [here](apps/nextjs).

### react-cosmos

@nayhoo/ui fixtures to develop and QA components.

See the full example [here](apps/react-cosmos).

## Credits

Thank you [NiGhTTraX](https://github.com/NiGhTTraX) for the great [TypeScript monorepo template](https://github.com/NiGhTTraX/ts-monorepo).
