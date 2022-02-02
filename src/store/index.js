import { createStore } from 'vuex'
import axiosrequest from '../Services/AxiosRequest'
import sharedMutations from "vuex-shared-mutations"

export default createStore({

  state() {                                         //equivalent to data in Vue
    return {
      userinfo: '',
      isLoggedIn: false,
      isAuthorized: false,
      refresh: false,
      user: ''

    }
  },
  mutations: {                                    //used to commit and track state changes so it demands state as the parameter 
    SET_USERINFO(state, userinfo) {
      state.userinfo = userinfo
      localStorage.setItem('userinfo', JSON.stringify(userinfo))
      axiosrequest.defaultHeader(userinfo)
    },
    REFRESH(state) {
      state.refresh = true
    }
  },
  actions: {                                       //equivalent to methods in Vue. these commit the mutations so demands commit as the parameter
    login({ commit, state }, userinfo) {
      if (userinfo.access_token) {
        commit('SET_USERINFO', userinfo)
        state.isLoggedIn = true
      }
    }
  },
  getters: {                                     //equivalent to computed
    getMyState: state => state.refresh
  },
  modules: {
  },
  plugins: [sharedMutations({ predicate: ['REFRESH'] })],

})
