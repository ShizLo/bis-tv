// import "./assets/styles/main.scss";
import "./style.css";
import "swiper/css/bundle";
import VueScrollTo from "vue-scrollto";
import Notifications from "@kyvg/vue3-notification";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

createApp(App).use(router).use(VueScrollTo).mount("#app");
