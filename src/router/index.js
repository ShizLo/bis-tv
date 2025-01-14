import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import PolicyPage from "../pages/PolicyPage.vue";
import FencePage from "../pages/FencePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/privacy-policy",
      name: "PolicyPage",
      component: PolicyPage,
    },
    {
      path: "/fence",
      name: "FencePage",
      component: FencePage,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
