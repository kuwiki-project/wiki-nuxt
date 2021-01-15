const config = {
  mode: "universal",
  ssr: false,
  components: true,
  target: "server",
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
  loading: { color: "#f0f0f0" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
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
    optionsPath: "@/plugins/vuetify.js",
  },

  auth: {
    redirect: {
      login: "/signin",
      logout: "/signin",
      callback: false,
      home: "/",
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/rest-auth/login/",
            method: "post",
            propertyName: "key",
          },
          user: false,
          logout: false,
        },
      },
    },
  },

  publicRuntimeConfig: {
    WIKI_API_URL: process.env.WIKI_API_URL || "http://localhost:3000",
    BASE_URL: process.env.BASE_URL || "http://localhost:3333",
    WIKI_CONFIRM_SUCCESS_URL: "", //.envそのまま
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
  router: {
    middleware: ["auth"],
  },
}

if (process.env.NODE_ENV === "development") {
  config.proxy = { "/api": "http://localhost:3000" }
}

export default config
