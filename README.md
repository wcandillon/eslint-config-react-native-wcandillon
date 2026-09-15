# eslint-config-react-native-wcandillon
My ESLint and TypeScript configuration for React Native.

[![npm version](https://badge.fury.io/js/eslint-config-react-native-wcandillon.svg)](https://badge.fury.io/js/eslint-config-react-native-wcandillon)

## Usage

```sh
# you also need eslint if not installed already: yarn add eslint --dev
yarn add eslint-config-react-native-wcandillon --dev
```

In `.eslintrc`:

```json
{ 
  "extends": "react-native-wcandillon", 
} 
```

In `tsconfig.json` (if you want to use my base TS configuration):

```json
{
  "extends": "eslint-config-react-native-wcandillon/tsconfig.base"
}
```

The base mirrors `@react-native/typescript-config`: `moduleResolution: "bundler"` with the `react-native` custom condition (so package.json `exports` resolve the way Metro resolves them), `module: "esnext"`, `isolatedModules`, and the Hermes-compatible `lib` list plus `dom`. Because of `bundler` resolution, do not override `module` with `commonjs` in a project that extends it. Packages that publish their typings through `exports` (for example `three/webgpu` and `three/addons/*.js`) resolve without `paths` mappings.
