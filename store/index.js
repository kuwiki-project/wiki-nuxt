import Vuex from "vuex";
import authentication from "./module/authentication"

const store = () => new Vuex.Store({
  modules: {
    authentication
  }
})

export default store