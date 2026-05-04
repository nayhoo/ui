# @nayhoo/eslint-config

My personal ESLint config for TS projects.

## Installation

```sh
npm install -D @nayhoo/eslint-config
```

## Usage

```cjs
// .eslint.config.mjs

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  ...compat.extends("@nayhoo/eslint-config"),
]
```
