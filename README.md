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
- [Integrations](#integrations)
  - [ts-node](#ts-node)
  - [Babel](#babel)
  - [webpack](#webpack)
  - [jest](#jest)

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

## Integrations

### ts-node

Use [tsconfig-paths](https://www.npmjs.com/package/tsconfig-paths) to resolve the path aliases at runtime:

```json
{
  "scripts": {
    "start": "ts-node -r tsconfig-paths/register src/index.ts"
  }
}
```

See the full example [here](apps/ts-node).

### Babel

Use [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver) to resolve the path aliases:

```js
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],

  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "^@nighttrax/(.+)": "../\\1/src",
        },
      },
    ],
  ],
};
```

See the full example [here](apps/jest-babel).

### webpack

Use [tsconfig-paths-webpack-plugin](https://www.npmjs.com/package/tsconfig-paths-webpack-plugin) to resolve the path aliases:

```js
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
  },
};
```

See the full example [here](apps/webpack).

### jest

If you use `Babel` then see [this example](apps/jest-babel) from the [Babel](#babel) section above.

If you use [ts-jest](https://github.com/kulshekhar/ts-jest) then you can use its `pathsToModuleNameMapper` helper:

```js
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("../../tsconfig.json");

module.exports = {
  preset: "ts-jest",

  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    // This has to match the baseUrl defined in tsconfig.json.
    prefix: "<rootDir>/../../",
  }),
};
```

See the full example [here](apps/jest-tsjest).

## Credits

Thank you [NiGhTTraX](https://github.com/NiGhTTraX) for the great [TypeScript monorepo template](https://github.com/NiGhTTraX/ts-monorepo).
