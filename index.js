module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier"],
  env: {
    browser: true
  },
  globals: {
    graphql: true
  },
  plugins: ["prettier"],
  rules: {
    radix: 0,
    "no-nested-ternary": 0,
    "prettier/prettier": "error",
    "jsx-a11y/img-has-alt": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ]
  }
};
