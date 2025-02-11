import { createRouter, createWebHistory } from "vue-router";
import { ROUTES_PATHS } from "../constants";
import HomePage from "../pages/HomePage.vue";
import PolicyPage from "../pages/PolicyPage.vue";
import FencePage from "../pages/FencePage.vue";
import WaterPage from "../pages/WaterPage.vue";
import FoundationPage from "../pages/FoundationPage.vue";
import ElectricityPage from "../pages/ElectricityPage.vue";
import TopographyPage from "../pages/TopographyPage.vue";
import DrainagePage from "../pages/DrainagePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: ROUTES_PATHS.HOME, name: ROUTES_PATHS.HOME, component: HomePage },
    { path: ROUTES_PATHS.POLICY, name: ROUTES_PATHS.POLICY, component: PolicyPage },
    { path: ROUTES_PATHS.FENCE, name: ROUTES_PATHS.FENCE, component: FencePage },
    { path: ROUTES_PATHS.WATER, name: ROUTES_PATHS.WATER, component: WaterPage },
    { path: ROUTES_PATHS.FAUNDATION, name: ROUTES_PATHS.FAUNDATION, component: FoundationPage },
    { path: ROUTES_PATHS.ELECTRICITY, name: ROUTES_PATHS.ELECTRICITY, component: ElectricityPage },
    { path: ROUTES_PATHS.TOPOGRAPHY, name: ROUTES_PATHS.TOPOGRAPHY, component: TopographyPage },
    { path: ROUTES_PATHS.DRAINAGE, name: ROUTES_PATHS.DRAINAGE, component: DrainagePage },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
  scrollBehavior(to, from, savedPosition) {
    // При переходе на другую страницу скроллит наверх
    return { top: 0 };
  },
});

export default router;
