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
    "eslint:all",
    "plugin:vue/strongly-recommended",
    "plugin:nuxt/recommended",
    "@nuxtjs",
    "prettier"
  ],

  globals: { _: true },

  parserOptions: {
    parser: "@babel/eslint-parser",
    sourceType: "module",
    requireConfigFile: false
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
    "sort-imports": "off",
    "vue/max-attributes-per-line": "off",
    semi: ["error", "never"],
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": "off"
  }
}
