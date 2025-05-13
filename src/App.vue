<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { defineAsyncComponent, onMounted, onBeforeUnmount } from "vue";
import { ROUTES_PATHS } from "./constants";
import { reactive } from "vue";
import { useDisplay } from "vuetify";
import { sendTextMessage } from "./services/botService";
import { toggleBodyScroll } from "./assets/js/utils/toggleBodyScroll.js";
import Footer from "./components/Footer.vue";
import logo from "../src/assets/icons/logo-foot.svg";

const { mobile } = useDisplay();
const route = useRoute();
const router = useRouter();
const catalogMenu = ref(false);
const mobileMenu = ref(false);
const isScrolled = ref(false);
const mobMenu = reactive({
  value: false,
});
const catMenu = reactive({
  value: false,
});

watch(mobMenu, (newX) => {
  if (newX.value) {
    toggleBodyScroll(true);
  } else {
    toggleBodyScroll(false);
  }
});

const phone = ref("");
const showSuccessSnackbar = ref(false);
const showErrorSnackbar = ref(false);
const form = ref(null);

const phoneRules = [
  (v) => !!v || "Телефон обязателен",
  (v) => /^[\d\+][\d\(\)\ -]{4,14}\d$/.test(v) || "Введите корректный номер телефона",
];

const message = computed(() => {
  const myText = `👨🏻 Заказ звонка\nТелефон: ${phone.value}\nСтраница: ${routeMetaTitle.value}`;
  return {
    chat_id: CHATS_ID.BASE_DEV,
    topic_id: TOPICS_ID.DEV,
    text: myText,
  };
});

async function submit() {
  const { valid } = await form.value.validate();

  if (!valid) {
    showErrorSnackbar.value = true;
    return;
  }

  try {
    await sendTextMessage(message.value);
    showSuccessSnackbar.value = true;
    phone.value = "";
    form.value.reset();
  } catch (error) {
    console.error("Ошибка отправки:", error);
    showErrorSnackbar.value = true;
  }
}

const services = [
  {
    title: "Главная",
    route: ROUTES_PATHS.HOME,
    icon: "mdi-home",
  },
  {
    title: "Проект участка и топографическая съемка",
    route: ROUTES_PATHS.TOPOGRAPHY,
    icon: "mdi-map-marker-path",
  },
  {
    title: "Свайный фундамент",
    route: ROUTES_PATHS.FAUNDATION,
    icon: "mdi-home-group",
  },
  {
    title: "Септик под ключ",
    route: ROUTES_PATHS.DEVELOP,
    icon: "mdi-pipe",
  },
  {
    title: "Водоподготовка и система очистки воды",
    route: ROUTES_PATHS.WATER,
    icon: "mdi-water",
  },
  {
    title: "Дренаж и ливневая канализация",
    route: ROUTES_PATHS.DRAINAGE,
    icon: "mdi-hydro-power",
  },
  {
    title: "Электромонтаж и освещение участка",
    route: ROUTES_PATHS.ELECTRICITY,
    icon: "mdi-flash",
  },
  {
    title: "Благоустройство",
    route: ROUTES_PATHS.DEVELOP,
    icon: "mdi-tree",
  },
  {
    title: "Установка заборов",
    route: ROUTES_PATHS.FENCE,
    icon: "mdi-fence",
  },
  {
    title: "БИС Сервис",
    route: ROUTES_PATHS.SERVICE,
    icon: "mdi-cog",
  },
];

const serviceItems = [
  "Обслуживание ЛОС",
  "Обслуживание бойлеров",
  "Обслуживание системы водоочистки",
  "Обслуживание системы водоподготовки",
  "Обслуживание электросетей",
  "ТО и сервис генераторов",
  "Разморозка водопровода",
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  if (catMenu.value) {
    catMenu.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <v-app>
    <v-app-bar
      color="white"
      elevation="2"
      height="100"
      :class="{ 'app-bar--hidden': isScrolled }"
      class="border-b-2 border-orange-darken-2 fixed-header"
      hide-on-scroll
      scroll-threshold="100"
    >
      <v-container class="d-flex align-center">
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="mobMenu.value = !mobMenu.value" size="x-large" />

        <v-img
          :src="logo"
          @click="router.push('/')"
          alt="Благоустройство и инженерные сети"
          max-width="200"
          class="mx-auto mx-md-0"
          contain
        />

        <v-menu v-model="catMenu.value" :close-on-content-click="false" transition="slide-y-transition" offset-y>
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="flat" color="orange-darken-2" class="ml-12 hidden-sm-and-down catalog-btn" size="x-large">
              <template #prepend>
                <v-icon icon="mdi-menu" size="x-large" />
              </template>
              Каталог
              <v-icon icon="mdi-chevron-down" class="ml-2" />
            </v-btn>
          </template>

          <v-card width="600" class="pa-4 mt-3">
            <v-list lines="two">
              <v-list-subheader class="text-h6 font-weight-bold text-orange-darken-2"> Все услуги </v-list-subheader>

              <v-list-item
                v-for="(service, index) in services"
                :key="index"
                :value="service"
                :to="service.route"
                active-class="bg-grey-lighten-4"
                @click="catMenu.value = false"
              >
                <template #prepend>
                  <v-icon :icon="service.icon" size="32" class="mr-4 text-orange-darken-2" />
                </template>

                <v-list-item-title class="font-weight-medium">
                  {{ service.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
        <div class="ml-auto d-flex align-center gap-3">
          <v-btn
            icon="mdi-whatsapp"
            color="orange-darken-2"
            variant="text"
            size="x-large"
            class="hidden-sm-and-down mr-4"
            href="https://wa.me/79112775607"
            target="_blank"
          />
          <v-btn v-if="!mobile" variant="flat" color="orange-darken-2" prepend-icon="mdi-phone" href="tel:+79112775607">
            +7 911 277-56-07
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="mobMenu.value" temporary location="left" width="320" class="mobile-menu">
      <v-list density="compact">
        <v-list-item class="px-2 pt-3">
          <template #append>
            <v-btn icon="mdi-close" variant="text" @click="mobMenu.value = false" class="ml-auto" size="x-large" />
          </template>
        </v-list-item>

        <v-list-group value="mobile-services">
          <template #activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-tools" title="Каталог" class="font-weight-bold text-subtitle-1" />
          </template>

          <v-list-item v-for="(service, index) in services" :key="index" :to="service.route" @click="mobMenu.value = false" class="pl-8">
            <template #prepend>
              <v-icon :icon="service.icon" size="24" class="mr-0 text-orange-darken-2" />
            </template>
            <span class="text-body-2">{{ service.title }}</span>
          </v-list-item>
        </v-list-group>
        <v-divider class="my-4" />

        <v-card variant="outlined" class="ma-2 pa-4">
          <v-form ref="form" @submit.prevent="submit">
            <v-text-field
              v-model="phone"
              label="Ваш телефон"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-phone"
              :rules="phoneRules"
              required
            />

            <v-btn
              block
              style="background: linear-gradient(90deg, #ea5b0c, #ff8c42)"
              color="orange-darken-2"
              size="large"
              prepend-icon="mdi-arrow-right"
              type="submit"
            >
              Заказать звонок
            </v-btn>

            <div class="text-caption text-grey mt-2">
              Нажимая кнопку, вы соглашаетесь с
              <router-link :to="{ name: ROUTES_PATHS.POLICY }" class="text-orange-darken-2"> политикой конфиденциальности </router-link>
            </div>
          </v-form>
        </v-card>
        <v-card variant="outlined" class="ma-2 pa-4">
          <div class="text-body-1 font-weight-bold mb-2">Контакты</div>

          <div class="d-flex align-center justify-space-between gap-2">
            <div class="text-caption text-grey">
              г. Санкт-Петербург<br />
              Ежедневно с 9 до 18 часов
            </div>
            <v-btn icon="mdi-whatsapp" color="green" href="https://wa.me/79112775607" target="_blank" />
          </div>
        </v-card>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <div :key="route.name">
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<style lang="scss" scoped>
.v-list-group__items .v-list-item {
  padding-inline-start: 24px !important;
}
.app-bar--hidden {
  transform: translateY(-100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-app-bar {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease, box-shadow 0.3s ease;

  &.v-toolbar--prominent {
    height: 100px !important;
  }
}

.catalog-btn {
  background: linear-gradient(90deg, #ea5b0c, #ff8c42);
  letter-spacing: 0.5px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(234, 91, 12, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(234, 91, 12, 0.2);
  }

  .v-icon {
    transition: transform 0.3s ease;
  }

  &[aria-expanded="true"] .v-icon {
    transform: rotate(180deg);
  }
}

.mobile-menu {
  .v-list-item__prepend {
    margin-inline-end: 12px;
  }

  .v-list-group__items .v-list-item {
    min-height: 48px;
  }

  .v-list-item--active {
    background: rgba(234, 91, 12, 0.05);
    border-left: 3px solid #ea5b0c;
  }
}

@media (max-width: 960px) {
  .v-app-bar {
    height: 100px !important;

    .v-toolbar__content {
      padding: 0 16px !important;
    }

    .v-img {
      max-width: 190px !important;
    }

    .v-btn--icon {
      width: 44px;
      height: 44px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.app-bar--hidden {
  transform: translateY(-100%) !important;
}

.mobile-menu {
  .v-list-item__prepend {
    margin-inline-end: 12px;
  }
}

@media (max-width: 960px) {
  .v-app-bar {
    .v-toolbar__content {
      align-items: center !important;
    }

    .v-img {
      margin: 0 auto !important;
    }
  }

  .mobile-menu {
    top: 80px !important;
    height: calc(100% - 80px) !important;
  }
}
</style>
