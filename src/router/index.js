import { createRouter, createWebHistory } from "vue-router";
import { ROUTES_PATHS } from "../constants";
import HomePage from "../pages/HomePage.vue";
import PolicyPage from "../pages/PolicyPage.vue";
import FencePage from "../pages/FencePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: ROUTES_PATHS.HOME,
      component: HomePage,
    },
    {
      path: ROUTES_PATHS.POLICY,
      name: ROUTES_PATHS.POLICY,
      component: PolicyPage,
    },
    {
      path: ROUTES_PATHS.FENCE,
      name: ROUTES_PATHS.FENCE,
      component: FencePage,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
