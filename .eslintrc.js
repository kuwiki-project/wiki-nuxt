module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/base",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "vue",
    "vuetify"
  ],
  rules: {
    semi: [2, "never"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "no-unused-vars": "off",
    "vue/html-self-closing": "off",
    "vuetify/no-deprecated-classes": "error",
    "prettier/prettier": ["error", { semi: false }],
    'vuetify/grid-unknown-attributes': 'error',
    'vuetify/no-legacy-grid': 'error',
  },
}
