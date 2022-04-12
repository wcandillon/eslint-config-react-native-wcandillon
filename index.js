module.exports = {
  "plugins": ["import"],
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "@react-native-community",
    "prettier",
    "plugin:import/typescript",
  ],
  "rules": {
    "quotes": [
      "error",
      "double",
      {
        "avoidEscape": true
      }
    ],
     "max-len": [
      "error",
      120
    ],
    "@typescript-eslint/ban-ts-comment": 2,
    "@typescript-eslint/no-explicit-any": 2,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/consistent-type-imports": 2,
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 0,
    "react-native/no-color-literals": 0,
    "react-native/no-raw-text": 0,
    "import/no-extraneous-dependencies": 2,
    "import/extensions": ["error", "never", { "svg": "always" }],
    "import/order": ["error", {"newlines-between": "always"}],
    "import/no-duplicates": 2,
    "import/no-useless-path-segments": 2,
    "import/no-cycle": [2, { "ignoreExternal": true }],
    "import/prefer-default-export": 0,
    "import/named": 0,
    "import/namespace": 0,
    "import/default": 0,
    "import/no-named-as-default-member": 0,
    "import/no-named-as-default": 0,
    "import/no-unused-modules": 0,
    "import/no-deprecated": 0,
    "@typescript-eslint/indent": 0,
    "import/no-anonymous-default-export": 2,
    "import/no-default-export": 2,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": ["error", { "additionalHooks": "(useMemoOne)" }],
    "jest/no-identical-title": 2,
    "jest/valid-expect": 2,
    "camelcase": 2,
    "prefer-destructuring": 2,
    "no-nested-ternary": 2,
    "comma-dangle": 0,
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-shadow": "off",
		"curly": "error"
  }
};
