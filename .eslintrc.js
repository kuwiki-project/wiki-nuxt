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
    "@nuxtjs",
    "prettier",
    "prettier/vue",
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
  ],
  plugins: ["vue", "vuetify", "prettier"],
  rules: {
    semi: [2, "never"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "no-unused-vars": "off",
    "vue/html-self-closing": "off",
    "prettier/prettier": ["error", { semi: false }],
    "vuetify/no-deprecated-classes": "error",
    "vuetify/grid-unknown-attributes": "error",
    "vuetify/no-legacy-grid": "error",
  },
}
