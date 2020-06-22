import createPersistedState from 'vuex-persistedstate'
 
export default ({ store }) => {
 
    window.onNuxtReady(() => {
        createPersistedState({
            key: 'xxxx-project'
        })(store)
    })
}