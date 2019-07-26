module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:all",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/all"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "padded-blocks": [
            "error",
            "never"
        ],
        "space-before-function-paren": [
            "error",
            "never"
        ],
        "one-var": [
            "error",
            "never"
        ],
        "quote-props": [
            "error",
            "as-needed"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "no-underscore-dangle": [
            "error",
            {
                "allowAfterThis": true
            }
        ],
        "lines-between-class-members": [
            "error",
            "always",
            {
                "exceptAfterSingleLine": true
            }
        ],
        "max-len": [
            "warn",
            {
                "code": 120,
                "comments": 120
            }
        ],
        "capitalized-comments": [
            "error",
            "always",
            {
                "ignoreConsecutiveComments": true
            }
        ],
        "multiline-comment-style": [
            "error",
            "separate-lines"
        ],
        "dot-location": [
            "error",
            "property"
        ],
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                "allowExpressions": true,
                "allowTypedFunctionExpressions": true,
                "allowHigherOrderFunctions": true
            }
        ],
        "id-length": "off",
        "sort-keys": "off",
        "sort-imports": "off",
        "no-plusplus": "off",
        "no-mixed-operators": "off",
        "class-methods-use-this": "off",
        "require-unicode-regexp": "off",
        "array-element-newline": "off",
        "prefer-destructuring": "off",
        "@typescript-eslint/no-magic-numbers": "off"
    }
};
