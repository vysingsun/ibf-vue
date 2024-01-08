import { createStore } from "vuex";
import createPersistedState from "vuex-plugin-persistedstate";
const store = createStore({
    modules: {
        auth: {
            namespaced: true, // Set the module to use namespacing
            state: {
                token: null,
                type_of_user: null
            },
            mutations: {
                setToken(state, token) {
                    state.token = token;
                },
                setType_of_user(state, type_of_user) {
                    state.type_of_user = type_of_user;
                }
            },
            actions: {
                setToken({ commit }, token) {
                    commit("setToken", token);
                },
                setType_of_user({commit }, type_of_user) {
                    commit("setType_of_user", type_of_user)
                }
            },
            getters: {
                isAuthenticated: (state) => state.token !== null,
                getToken: state => state.token,
                getType_of_user: state => state.type_of_user
            }
        }
    },
    plugins: [createPersistedState({})],
})
export default store

