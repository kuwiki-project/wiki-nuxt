export default {
  server: {
    port: process.env.PORT || 3333,
    host: process.env.HOST || "localhost"
  },
  head: {
    title: "京大wiki",
    htmlAttrs: {
      prefix: "og: http://ogp.me/ns#",
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
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "京大wiki"
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://www.kuwiki.net"
      },
      { hid: "og:title", property: "og:title", content: "京大wiki" },
      {
        hid: "og:description",
        property: "og:description",
        content: "京大生のための情報サイト"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://www.kuwiki.net/icon.png"
      },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@kuwiki99" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/icon.ico" },
      {
        rel: "apple-touch-icon",
        href: "icon.png"
      }
    ]
  },
  pwa: {
    meta: {
      theme_color: "white"
    },
    manifest: {
      name: "京大wiki",
      short_name: "京大wiki",
      lang: "ja"
    },
    icon: false
  },
  /*
   ** Global CSS
   */
  css: ["normalize.css", "static/base.css"],
  /*
   ** Plugins to load before mounting the App
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */

  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/google-fonts",
    "@nuxtjs/pwa"
  ],
  googleFonts: {
    families: {
      "Noto+Sans+JP": [300, 400]
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
    "@nuxtjs/auth",
    "@nuxtjs/toast"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.WIKI_API_URL
  },

  toast: {
    duration: 3000
  },

  auth: {
    redirect: {
      // Not logged in users will be redirected to redirect.login route.
      login: "/signin",
      logout: "/",
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

  loading: false,

  /*
   * Environment variables
   * https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-runtime-config/
   */
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
