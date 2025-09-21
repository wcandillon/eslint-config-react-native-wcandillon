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
