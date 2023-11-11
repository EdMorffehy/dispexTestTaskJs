module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: true
    }
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
    "react-refresh",
    "import",
    "prettier",
    "simple-import-sort",
    "unused-imports"
  ],
  ignorePatterns: ["build"],
  rules: {
    // For Production
    "no-duplicate-case": 2,
    "no-console": [2, { allow: ["warn", "error"] }],
    "no-debugger": 2,
    "no-unused-vars": 2,
    // eslint
    "arrow-body-style": ["error", "as-needed"],
    "eol-last": 1,
    "max-len": [
      1,
      {
        code: 120,
        comments: 120,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        tabWidth: 2
      }
    ],
    "no-multiple-empty-lines": 1,
    "no-param-reassign": [2, { props: false }],
    "no-spaced-func": 0,
    "object-curly-newline": [
      1,
      {
        ObjectExpression: { consistent: true, multiline: true },
        ObjectPattern: { consistent: true, multiline: true },
        ExportDeclaration: { multiline: true, minProperties: 3 }
      }
    ],
    "prefer-const": 1,
    "prefer-template": 1,
    "no-nested-ternary": 0,

    // import
    "import/newline-after-import": [
      "error",
      {
        count: 1
      }
    ],
    // import
    "import/extensions": 0,
    "simple-import-sort/exports": "error",
    "unused-imports/no-unused-imports": "error",
    "import/no-cycle": 1,
    "import/no-named-as-default": 1,
    "import/no-unresolved": 0,
    "import/order": [
      1,
      {
        "newlines-between": "always",
        groups: [["builtin", "external"], "internal", ["parent", "index", "sibling"], ["object", "type"]]
      }
    ],

    // react
    "react/destructuring-assignment": 0,
    "jsx-a11y/control-has-associated-label": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/function-component-definition": 0,
    "react/jsx-props-no-spreading": 0,
    "react/display-name": 0,
    "react/jsx-key": ["error", {
      "checkFragmentShorthand": true,
      "checkKeyMustBeforeSpread": true,
      "warnOnDuplicates": true
    }],
    "react/no-array-index-key": 1,
    "react/no-unused-prop-types": [0, { skipShapeProps: true }],
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/require-default-props": 0,
    "react/self-closing-comp": 1,

    // react-refresh
    "react-refresh/only-export-components": [1, { allowConstantExport: true }],

    // prettier
    "prettier/prettier": 1
  },
}
