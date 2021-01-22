import Vue from "vue"
import Vuetify from "vuetify"
import colors from "vuetify/es5/util/colors"
import {
  MailIcon,
  LockIcon,
  SearchIcon,
} from "vue-feather-icons"
// アイコン一覧 https://vue-feather-icons.egoist.sh/

Vue.use(Vuetify)
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#80e4c7",
        secondary: "#fcb69f",
        accent: "#795548",
        error: "#fcb69f",
        info: "#5DAFB0",
        success: "#E0F7FA",
        warning: "#FFC400",
      },
    },
    options: {
      customProperties: true,
    },
  },
  icons: {
    values: {
      mail: {
        component: MailIcon,
      },
      search: {
        component: SearchIcon,
      },
      lock: {
        component: LockIcon,
      }
    },
  },
})

export default vuetify
