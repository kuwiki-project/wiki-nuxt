import Vue from "vue"
import Vuetify from "vuetify"
import colors from "vuetify/es5/util/colors"

Vue.use(Vuetify)
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#80e4c7",
        secondary: "#fcb69f",
        accent: "#795548",
        error: "#FF7043",
        info: "#5DAFB0",
        success: "#E0F7FA",
        warning: "#FFC400",
      },
    },
    options: {
      customProperties: true,
    },
  },
})

export default vuetify
