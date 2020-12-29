import Vue from "vue";
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify)
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#80e4c7",
        secondary: "#fcb69f",
        accent: "#5DAFB0",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
    options: {
      customProperties: true
    }
  },
})

export default vuetify
