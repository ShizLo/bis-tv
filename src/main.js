// import "./assets/styles/main.scss";
import "./style.css";
import "swiper/css/bundle";
import VueScrollTo from "vue-scrollto";
import Notifications from "@kyvg/vue3-notification";
import VCalendar from "v-calendar";
import "v-calendar/style.css";
import VueMoment from "vue3-moment";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

// window.addEventListener("resize", () => {
//   // We execute the same script as before
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty("--vh", `${vh}px`);
// });

const appHeight = () => {
  const doc = document.documentElement.doc.style.setProperty("--app-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", appHeight);

createApp(App).use(router).use(VueMoment).use(VCalendar, {}).use(VueScrollTo).mount("#app");
