export default {
  /*
   ** Headers of the page
   */
  head: {
    title: "京大wiki",
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
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/kiwi.svg"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Sans+JP:wght@400;500;600"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  components: true,
  plugins: [
    {
      src: "@/plugins/localStorage",
      mode: "client"
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify", "@nuxtjs/eslint-module"],

  vuetify: {
    // CustomVariables: ['~/assets/variables.scss'],
    optionsPath: "./vuetify.options.js"
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
  axios: {},

  auth: {},

  loading: { color: "#80e4c7", height: "3px" },

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-runtime-config/
  publicRuntimeConfig: {
    WIKI_API_URL: process.env.WIKI_API_URL || "http://localhost:3000",
    BASE_URL: process.env.BASE_URL || "http://localhost:3333",
    WIKI_CONFIRM_SUCCESS_URL: process.env.WIKI_CONFIRM_SUCCESS_URL,
    WIKI_MICROCMS_API_GET_KEY: process.env.WIKI_MICROCMS_API_GET_KEY,
    WIKI_MICROCMS_API_POST_KEY: process.env.WIKI_MICROCMS_API_POST_KEY
  },

  privateRuntimeConfig: {},

  build: {
    devMiddleware: {
      headers: {
        "Cache-Control": "no-store",
        Vary: "*"
      }
    }
  }
}
