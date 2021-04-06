export default {
  server: {
    port: process.env.PORT || 3333,
    host: process.env.HOST || "localhost"
  },
  head: {
    title: "京大wiki",
    htmlAttrs: {
      lang: "ja"
    },
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "京大生のための情報サイト"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/kiwi.svg" }]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  components: true,

  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/vuetify",
    "@nuxtjs/eslint-module",
    "@nuxtjs/google-fonts"
  ],
  vuetify: {
    defaultAssets: {
      font: false,
      icons: false
    },
    optionsPath: "./vuetify.options.js"
  },
  googleFonts: {
    families: {
      "Noto+Sans+JP": [400, 500]
    },
    display: "swap"
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "@nuxtjs/auth"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.WIKI_API_URL
  },

  auth: {
    redirect: {
      login: "/signin",
      logout: "/signin",
      callback: false,
      home: "/"
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/rest-auth/login/",
            method: "post",
            propertyName: "key"
          },
          user: false,
          logout: false
        }
      }
    }
  },

  loading: { color: "#80e4c7", height: "3px" },

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-runtime-config/
  publicRuntimeConfig: {
    WIKI_API_URL: process.env.WIKI_API_URL,
    COLLECTED_EXAMS_JSON_URL: process.env.COLLECTED_EXAMS_JSON_URL
  },

  privateRuntimeConfig: {},

  env: {
    WIKI_MICROCMS_API_GET_KEY: process.env.WIKI_MICROCMS_API_GET_KEY,
    WIKI_MICROCMS_API_POST_KEY: process.env.WIKI_MICROCMS_API_POST_KEY
  },

  build: {
    devMiddleware: {
      headers: {
        "Cache-Control": "no-store",
        Vary: "*"
      }
    }
  },

  router: {
    middleware: ["auth"]
  }
}
