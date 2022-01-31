import { createStore } from 'vuex'

export default createStore({
  state(){                                         //equivalent to data in Vue
    return {
    user: '',
    }
  },
  mutations: {                                    //used to commit and track state changes so it demands state as the parameter 
    
  },
  actions: {                                    //equivalent to methods in Vue. these commit the mutations
   
  },
  getters:{                                     //equivalent to computed

  },
  modules: {
  },
})
