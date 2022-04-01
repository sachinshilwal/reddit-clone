import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/:filter",
      name: "filter",
      component: HomeView
    },
    {
      path: "/r/:subreddit",
      name: "subreddit",
      component: () => import("../views/SubredditView.vue")
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginView.vue")
    }
  ]
})

export default router
