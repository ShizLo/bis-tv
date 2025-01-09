import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PolicyView from "../views/PolicyView.vue";
import FenceView from "../views/FenceView.vue";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/privacy-policy",
      name: "PolicyView",
      component: PolicyView,
    },
    {
      path: "/fence",
      name: "FenceView",
      component: FenceView,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
