module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },

  // ルールの設定変更
  extends: [
    "@nuxtjs", // @nuxtjs/eslint-config
    "eslint:recommended",
    "plugin:nuxt/recommended", // eslint-plugin-nuxt
    "plugin:vue/recommended", // eslint-plugin-vue // vue.js 2.x
    "prettier" // eslint-config-prettier
  ],

  // Add your custom rules here
  rules: {
    semi: [2, "never"],
    "no-console": "off",
    "no-unused-vars": "off"
  }
}
