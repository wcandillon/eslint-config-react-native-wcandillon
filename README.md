# eslint-config-react-native-wcandillon
My ESLint and TypeScript configuration for React Native.

[![CircleCI](https://circleci.com/gh/wcandillon/eslint-config-react-native-wcandillon.svg?style=svg)](https://circleci.com/gh/wcandillon/eslint-config-react-native-wcandillon)
[![npm version](https://badge.fury.io/js/eslint-config-react-native-wcandillon.svg)](https://badge.fury.io/js/eslint-config-react-native-wcandillon)

## Usage

```
yarn add eslint-config-react-native-wcandillon --dev
```

In `.eslintrc`:

```json
{ 
  "extends": "react-native-wcandillon", 
} 
```

In `tsconfig.json`:

```json
{
  "extends": "eslint-config-react-native-wcandillon/tsconfig.base"
}
```
