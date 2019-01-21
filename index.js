module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "react-native"],
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
    "react/jsx-filename-extension": [2, { "extensions": [".tsx"] }]
  }
};
