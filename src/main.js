import "./style.css";
import "swiper/css/bundle";
import VueScrollTo from "vue-scrollto";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

createApp(App).use(router).use(VueScrollTo).mount("#app");
