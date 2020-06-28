module.exports = {
  "plugins": ["import"],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
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
  "extends": [
    "@react-native-community"
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
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 0,
    "react-native/no-color-literals": 0,
    "react-native/no-raw-text": 0,
    "import/no-extraneous-dependencies": 2,
    "import/extensions": ["error", "never", { "svg": "always" }],
    "import/no-named-as-default-member": 2,
    "import/order": ["error", {"newlines-between": "always"}],
    "import/no-duplicates": 2,
    "import/no-useless-path-segments": 2,
    "react-hooks/rules-of-hooks": 2,
    "import/no-anonymous-default-export": 2,
    "react-hooks/exhaustive-deps": ["error", { "additionalHooks": "(useMemoOne)" }],
    "jest/no-identical-title": 2,
    "jest/valid-expect": 2,
    "camelcase": 2,
    "prefer-destructuring": 2
  }
};
