import colors from "vuetify/es5/util/colors"

const config = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "京大wiki",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/kiwi.svg" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Sans+JP:wght@400;700&display=swap",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: "@/plugins/localStorage",
      ssr: false,
    },
    { src: "@/plugins/components" },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify", "@nuxt/typescript-build"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/proxy",
    "@nuxtjs/dotenv",
    "@nuxtjs/auth",
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: "#A19BFF",
          secondary: "#ECB0FF",
          accent: "#FFDDB0",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
        dark: {
          primary: colors.indigo.lighten3,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  auth: {},
  env: {
    WIKI_API_URL: process.env.WIKI_API_URL,
  },
  /*
   ** Build configuration
   */
  build: {
    build: {
      extend(config, ctx) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        })
      },
    },
  },
  generate: {
    dir: "../public",
  },
}

if (process.env.NODE_ENV === "development") {
  config.proxy = { "/api": "http://localhost:3000" }
}

export default config
