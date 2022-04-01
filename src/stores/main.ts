import { defineStore } from "pinia"

export interface MainStore {
  isMenuOpen: boolean
  userInfo: string
  isLoggedIn: boolean
  isAuthorized: boolean
  refresh: boolean
  user: string
  filterChanged: boolean
}

export const useMainStore = defineStore({
  id: "main",
  state: (): MainStore => ({
    isMenuOpen: false,
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
    setMenuOpen(payload: boolean) {
      this.isMenuOpen = payload
    },
    setUserinfo() {
      console.log("new userinfo")
    },
    setRefresh(payload: boolean) {
      this.refresh = payload
    }
  }
})
