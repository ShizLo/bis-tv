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
import Service from "../pages/bisService/Service.vue";
import DeparturePage from "../pages/DeparturePage.vue";
import LandscapePage from "../pages/LandscapePage.vue";
import FenceFormPage from "../pages/FenceFormPage.vue";
import Development from "../pages/Development.vue";
import Vacancies from "../pages/Vacancies.vue";
import VacancyMiddle from "../pages/VacancyMiddle.vue";
import SepticTank from "../pages/SepticTank.vue";
import CalendarService from "../pages/CalendarService.vue";
import UserАgreement from "../pages/UserАgreement.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: ROUTES_PATHS.HOME, name: ROUTES_PATHS.HOME, component: HomePage, meta: { title: "Главная" } },
    { path: ROUTES_PATHS.POLICY, name: ROUTES_PATHS.POLICY, component: PolicyPage },
    { path: ROUTES_PATHS.USERAGREEMENT, name: ROUTES_PATHS.USERAGREEMENT, component: UserАgreement },
    { path: ROUTES_PATHS.FENCE, name: ROUTES_PATHS.FENCE, component: FencePage, meta: { title: "Заборы" } },
    { path: ROUTES_PATHS.FENCEFORM, name: ROUTES_PATHS.FENCEFORM, component: FenceFormPage },
    { path: ROUTES_PATHS.WATER, name: ROUTES_PATHS.WATER, component: WaterPage, meta: { title: "Водоснабжение" } },
    { path: ROUTES_PATHS.FAUNDATION, name: ROUTES_PATHS.FAUNDATION, component: FoundationPage, meta: { title: "Фундамент" } },
    { path: ROUTES_PATHS.ELECTRICITY, name: ROUTES_PATHS.ELECTRICITY, component: ElectricityPage, meta: { title: "Электромонтаж" } },
    { path: ROUTES_PATHS.TOPOGRAPHY, name: ROUTES_PATHS.TOPOGRAPHY, component: TopographyPage, meta: { title: "Проект" } },
    { path: ROUTES_PATHS.DRAINAGE, name: ROUTES_PATHS.DRAINAGE, component: DrainagePage, meta: { title: "Дренаж и ливневка" } },
    { path: ROUTES_PATHS.SERVICE, name: ROUTES_PATHS.SERVICE, component: Service },
    { path: ROUTES_PATHS.DEPARTURE, name: ROUTES_PATHS.DEPARTURE, component: DeparturePage },
    { path: ROUTES_PATHS.LANDSCAPE, name: ROUTES_PATHS.LANDSCAPE, component: LandscapePage },
    { path: ROUTES_PATHS.DEVELOP, name: ROUTES_PATHS.DEVELOP, component: Development },
    { path: ROUTES_PATHS.VACANCIES, name: ROUTES_PATHS.VACANCIES, component: Vacancies },
    { path: ROUTES_PATHS.VACANCIES_MID, name: ROUTES_PATHS.VACANCIES_MID, component: VacancyMiddle },
    { path: ROUTES_PATHS.SEPTIC, name: ROUTES_PATHS.SEPTIC, component: SepticTank },
    { path: ROUTES_PATHS.CALENDARSERVICE, name: ROUTES_PATHS.CALENDARSERVICE, component: CalendarService },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
  scrollBehavior(to, from, savedPosition) {
    // При переходе на другую страницу скроллит наверх
    return { top: 0 };
  },
});

export default router;
