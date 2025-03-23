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

import "@mdi/font/css/materialdesignicons.min.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    "surface-bright": "#FFFFFF",
    "surface-light": "#EEEEEE",
    "surface-variant": "#424242",
    "on-surface-variant": "#EEEEEE",
    primary: "#1867C0",
    "primary-darken-1": "#1F5592",
    secondary: "#48A9A6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
  variables: {
    "border-color": "#000000",
    "border-opacity": 0.12,
    "high-emphasis-opacity": 0.87,
    "medium-emphasis-opacity": 0.6,
    "disabled-opacity": 0.38,
    "idle-opacity": 0.04,
    "hover-opacity": 0.04,
    "focus-opacity": 0.12,
    "selected-opacity": 0.08,
    "activated-opacity": 0.12,
    "pressed-opacity": 0.12,
    "dragged-opacity": 0.08,
    "theme-kbd": "#212529",
    "theme-on-kbd": "#FFFFFF",
    "theme-code": "#F5F5F5",
    "theme-on-code": "#000000",
  },
};

const vuetify = createVuetify({
  // ssr: true,
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.use(VueMoment);
app.use(VCalendar, {});
app.use(VueScrollTo);
app.mount("#app");

//createApp(App).use(router).use(vuetify).use(VueMoment).use(VCalendar, {}).use(VueScrollTo).mount("#app");
