module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "react-native"],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  "parserOptions": {
    "sourceType": "module"
  },
  "extends": [
    "airbnb"
  ],
  "rules": {
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
    "indent": [
      "error",
      2
    ],
    "no-use-before-define": ["error", { "variables": false }],
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": 2,
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
  }
};
