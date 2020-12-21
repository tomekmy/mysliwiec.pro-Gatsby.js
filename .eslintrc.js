module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ["react-app"],
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: ["react"],
  rules: {
    "semi": [2, "always"],
    "react/jsx-indent": [2, 2],
    "react/no-array-index-key": [1],
    "react/self-closing-comp": [
      2,
      {
        component: true,
        html: true
      }
    ],
    "react/jsx-max-props-per-line": [2, {"maximum": 1, "when": "always" }],
    quotes: [2, "single"],
    "jsx-quotes": [2, "prefer-double"],
    "space-in-parens": [0, "always"],
    "template-curly-spacing": [2, "never"],
    "array-bracket-spacing": [2, "never"],
    "object-curly-spacing": [2, "always"],
    "computed-property-spacing": [2, "never"],
    "no-multiple-empty-lines": [2, { "max": 1}],
    "no-multi-spaces": [2],
    "no-trailing-spaces": 2,
    "linebreak-style": 0,
    "prefer-const": [
      2,
      {
        destructuring: "all",
        ignoreReadBeforeAssign: false
      }
    ],
    "no-else-return": 2,
    "no-return-assign": [1],
    "no-shadow": [2],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
  }
}