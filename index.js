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
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }]
  }
};
