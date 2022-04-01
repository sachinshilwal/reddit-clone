import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import VueVideoPlayer from 'vue-video-player'
// import './index.css'

createApp(App)
.use(store)
.use(router)
.use(PrimeVue)
.use(VueVideoPlayer)
.mount('#app')
