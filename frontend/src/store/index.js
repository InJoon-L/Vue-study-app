import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        accessToken: null
    },
    getters: {
        isAuth(state) {
            if (state.accessToken == null) return false;
            return true;
        }
    },
    mutations: {
        login(state, payload) {
            state.accessToken = payload.accessToken;
            localStorage.setItem('accessToken', state.accessToken);
        },
        logout(state) {
            state.accessToken = null;
            localStorage.removeItem('accessToken');
            location.reload();
        },
        getAccessToken(state) {
            state.accessToken = localStorage.getItem('accessToken');
        }
    },
    actions: {
        login({commit}, payload) {
            const data = { userid: payload.userid, password: payload.password}
            return axios.post('/api/auth/login', data)
            .then(res => {
                if (res.status == 200) {
                    console.log(res);
                    commit('login', { accessToken: res.data.token })
                }
            })
            .catch((err) => {
                console.log(err);
                commit('logout');
            })
        },
        logout({commit}) {
            commit('logout');
        }
    }
})