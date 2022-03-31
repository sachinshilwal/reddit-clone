import { defineStore } from "pinia"

export interface MainStore {
  userInfo: string
  isLoggedIn: boolean
  isAuthorized: boolean
  refresh: boolean
  user: string
  filterChanged: boolean
}

export const useCounterStore = defineStore({
  id: "counter",
  state: (): MainStore => ({
    userInfo: "",
    user: "",
    isAuthorized: false,
    refresh: false,
    filterChanged: false,
    isLoggedIn: false
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    setUserinfo() {
      console.log("new userinfo")
    },
    setRefresh(payload: boolean) {
      this.refresh = payload
    }
  }
})
