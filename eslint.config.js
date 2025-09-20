const typescriptParser = require("@typescript-eslint/parser");
const typescriptPlugin = require("@typescript-eslint/eslint-plugin");
const importPlugin = require("eslint-plugin-import");
const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");
const reactNativePlugin = require("eslint-plugin-react-native");
const jestPlugin = require("eslint-plugin-jest");
const prettierPlugin = require("eslint-plugin-prettier");
const prettierConfig = require("eslint-config-prettier");

module.exports = [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        },
        project: true
      },
      globals: {
        React: "readonly",
        JSX: "readonly"
      }
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      "import": importPlugin,
      "react": reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-native": reactNativePlugin,
      "jest": jestPlugin,
      "prettier": prettierPlugin
    },
    rules: {
      "prettier/prettier": ["error", {
        "quoteProps": "consistent",
        "singleQuote": false,
        "tabWidth": 2,
        "trailingComma": "es5",
        "useTabs": false
      }],
      "max-len": [
        "error",
        120
      ],
      "@typescript-eslint/ban-ts-comment": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/consistent-type-imports": "error",
      "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      // Disabled due to ESLint 9 compatibility issues
      // "react-native/no-unused-styles": "error",
      // "react-native/split-platform-components": "error",
      "react-native/no-inline-styles": "off",
      "react-native/no-color-literals": "off",
      "react-native/no-raw-text": "off",
      "import/no-extraneous-dependencies": "error",
      "import/extensions": ["error", "never", { "svg": "always" }],
      "import/order": ["error", {"newlines-between": "always"}],
      "import/no-duplicates": "error",
      "import/no-useless-path-segments": "error",
      "import/no-cycle": ["error", { "ignoreExternal": true }],
      "import/prefer-default-export": "off",
      "import/named": "off",
      "import/namespace": "off",
      "import/default": "off",
      "import/no-named-as-default-member": "off",
      "import/no-named-as-default": "off",
      "import/no-unused-modules": "off",
      "import/no-deprecated": "off",
      "@typescript-eslint/indent": "off",
      "import/no-anonymous-default-export": "error",
      "import/no-default-export": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": ["error", { "additionalHooks": "(useMemoOne)" }],
      "jest/no-identical-title": "error",
      "jest/valid-expect": "error",
      "camelcase": "error",
      "prefer-destructuring": "error",
      "no-nested-ternary": "error",
      "comma-dangle": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-shadow": ["error"],
      "no-shadow": "off",
      "curly": "error"
    },
    settings: {
      "import/resolver": {
        "typescript": {},
        "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      },
      "react": {
        "version": "detect"
      }
    }
  },
  prettierConfig
];
