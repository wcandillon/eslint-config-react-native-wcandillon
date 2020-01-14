module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "react-native", "eslint-plugin-react-hooks", "known-imports"],
  "settings": {
    "known-imports/config-file-path": "node_modules/eslint-config-react-native-wcandillon/known-imports.json",
    "import/resolver": {
      "node": {
           "extensions":[
              ".js",
              ".jsx",
              ".ts",
              ".tsx",
              ".d.ts",
              ".android.js",
              ".android.jsx",
              ".android.ts",
              ".android.tsx",
              ".ios.js",
              ".ios.jsx",
              ".ios.ts",
              ".ios.tsx",
              ".web.js",
              ".web.jsx",
              ".web.ts",
              ".web.tsx"
           ]
      }
    }
  },
  "parserOptions": {
    "sourceType": "module"
  },
  "extends": [
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:known-imports/recommended-react"
  ],
  "rules": {
    "curly": 2,
    "global-require": 0,
    "max-len": [
      "error",
      120
    ],
    "quotes": [
      "error",
      "double",
      {
          "avoidEscape": true
      }
    ],
    "no-unused-vars": 0,
    "sort-imports": ["error", {
      "ignoreCase": false,
      "ignoreDeclarationSort": true,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
    }],
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-explicit-any": 2,
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    "react/jsx-props-no-spreading": 0,
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 0,
    "react-native/no-color-literals": 0,
    "react-native/no-raw-text": 0,
    "import/no-extraneous-dependencies": 2,
    "import/extensions": ["error", "never", { "svg": "always" }],
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": ["error", { "additionalHooks": "(useCode|useMemoOne)" }]
  }
};
