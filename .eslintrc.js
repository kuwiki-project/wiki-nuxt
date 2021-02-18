module.exports = {
  env: {
    browser: true,
    node: true
  },

  /*
   * ルールの設定変更
   * "@nuxtjs" @nuxtjs/eslint-config
   * "eslint:all" eslintのルールを全部オンに
   * "plugin:nuxt/recommended" eslint-plugin-nuxt
   * "plugin:vue/recommended" eslint-plugin-vue  これはvue.js 2.x用
   * "prettier" // eslint-config-prettier
   */
  extends: [
    "@nuxtjs",
    "eslint:all",
    "plugin:nuxt/recommended",
    "plugin:vue/recommended",
    "prettier"
  ],

  globals: { _: true },

  parserOptions: {
    parser: "@babel/eslint-parser",
    sourceType: "module"
  },

  root: true,

  // カスタムルール
  rules: {
    "id-length": "off",
    "no-console": "off",
    "no-unused-vars": "warn",
    "no-magic-numbers": "off",
    "no-negated-condition": "warn",
    "max-lines-per-function": "warn",
    "sort-keys": "off",
    semi: [2, "never"]
  }
}
