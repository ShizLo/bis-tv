// import "./assets/styles/main.scss";
import "./style.css";
import "swiper/css/bundle";
import VueScrollTo from "vue-scrollto";
import Notifications from "@kyvg/vue3-notification";
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import VueMoment from 'vue3-moment';

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

createApp(App).use(router).use(VueMoment).use(VCalendar, {}).use(VueScrollTo).mount("#app");
