const namespaced = true

const state = {
    token: false,
    name: "ゲスト",
    expire: 0
}
const mutations= {
    SET_LOGIN_INFO: (state, login) => {
        state.token = login.token                     // ログイントークン
        state.expire = Math.floor(1000 * login.expire) // APIからUNIXタイム(秒)で有効期限が返ってくるものとし、ミリ秒に変換しておく
    }
}
const actions= {
    setLoginInfo({ commit }, login) {
        commit("SET_LOGIN_INFO", login)
    }
}

export default {
    namespaced,
    state,
    mutations,
    actions,
  }