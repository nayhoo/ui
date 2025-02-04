# @nayhoo/prettier-config

My personal Prettier config for TS projects.

## Installation

```sh
npm install -D @nayhoo/prettier-config
```

## Usage

```mjs
// .prettier.mjs

import nayhooPrettierConfig from "@nayhoo/prettier-config";

/**
 * @type {import("prettier").Config}
 */
const config = {
  ...nayhooPrettierConfig,
};

export default config;
```
