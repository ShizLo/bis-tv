import "./style.css";
import "swiper/css/bundle";
import VueScrollTo from 'vue-scrollto'

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

//import swiper from "./assets/js/swiper";

createApp(App).use(router).use(VueScrollTo).mount("#app");
