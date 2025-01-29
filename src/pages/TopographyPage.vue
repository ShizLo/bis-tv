<template>
  <BannerSlider
    bannerText="Топографическая съемка и проектирование"
    bannerDescription="Поиск и закрепление границ вашего участка по координатам Росреестра. Определение границ заказывают перед установкой нового забора, покупкой участка и при спорах с соседями о текущем положении границы."
    :bannerPrice="bannerPrice"
  />
  <OurServices :dataServices="dataServices" title="Наши услуги" />

  <WorkOrder :data="dataOrder" title="Как мы работаем" />
  <!-- <LocalService serviceTitle="Дополнительно берут" :servicePrice="servicePrice" /> -->
  <GlobalServices :data="dataGlobalService" title="Популярные услуги" />
  <FeedBackForm title="Оставьте заявку" id="GlobalForm" />
  <!-- <GlobalForm id="GlobalForm" /> -->
</template>

<script>
import BannerSlider from "../components/Banner.vue";
import LocalService from "../components/LocalService.vue";
import WorkOrder from "../components/WorkOrder.vue";
import GlobalForm from "../components/Form/GlobalForm.vue";
import OurServices from "../components/OurServices.vue";
import GlobalServices from "../components/GlobalServices.vue";
import FeedBackForm from "../components/FeedBackForm.vue";
import { ROUTES_PATHS } from "../constants";

export default {
  name: "FenceView",
  components: {
    BannerSlider,
    LocalService,
    WorkOrder,
    GlobalForm,
    OurServices,
    GlobalServices,
    FeedBackForm,
  },

  setup() {
    return {};
  },
  data: () => ({
    bannerPrice: [
      {
        url: "/images/fence/banner-2+.jpeg",
        price: "от 7 500 за м.пог",
        name: "Забор из металлического штакетника",
      },
      {
        url: "/images/fence/banner-1.jpg",
        price: "от 8 650 за м.пог",
        name: "Забор из профлиста",
      },
      {
        url: "/images/fence/banner-3++.jpg",
        price: "от 8 000 за м.пог",
        name: "Забор из деревянного штакетника",
      },
      {
        url: "/images/fence/banner-4.jpg",
        price: "от 5350 за м.пог",
        name: "Забор из сетки гиттер",
      },
      {
        url: "/images/fence/banner-5.jpg",
        price: "от 60 000 руб.",
        name: "Установка автоматики",
      },
      {
        url: "/images/fence/banner-6.jpg",
        price: "от 6000 за м.пог",
        name: "Забор из бруска",
      },
    ],
    servicePrice: [
      { urlImg: "url(/images/fence/dop-1.png)", price: "от 60 000 руб.", name: "Установка автоматики" },
      { urlImg: "url(/images/fence/dop-2.png", price: "от 10 000 руб.", name: "Освещение участка" },
      { urlImg: "url(/images/fence/dop-3+.png)", price: "", name: "Организация парковки и заеда" },
      { urlImg: "url(/images/fence/dop-5+.png)", price: "", name: "Откатные ворота" },
      { urlImg: "url(/images/fence/dop-4+.png)", price: "", name: "Распашные ворота" },
      { urlImg: "url(/images/fence/dop-6.png", price: "", name: "Дополнительные услуги" },
      // { urlImg: "url(/images/fence/services-6.png)", price: "от 6000 м.пог", name: "Забор и оргаждения из бруска" },
    ],
    dataOrder: [
      {
        urlImg: "/icons/workOrder/bubbles4.svg",
        title: "Заявка",
        text: "Вы оставляете заявку или звоните в БИС, обсуждаем работы и согласовываем время выезда на участок.",
      },
      {
        urlImg: "/icons/topographyPage/pencil2.svg",
        title: "Документы",
        text: "Инженеры готовят и проверяют документы, заказывают выписку из Росреестра.",
      },
      {
        urlImg: "/icons/workOrder/automobile.svg",
        title: "Разметка",
        text: "Инженеры выезжают к вам и размечают сертифицированным оборудованием границы участка по координатам из выписки ЕГРН.",
      },
      {
        urlImg: "/icons/workOrder/clipboard.svg",
        title: "Акт",
        text: "Вы получаете акт выноса границ участка и оплачиваете услуги.*",
      },
    ],
    dataServices: [
      [
        [
          {
            class: "services__row-item-big",
            title: "Вынос в натуру границ земельного участка",
            price: "от 6 000 руб.",
            // pathImg: "url(/images/fence/services-2.png)",
            pathImg: "",
            hoverColors: "rgb(170, 214, 199)",
          },
        ],
        [
          {
            class: "services__row-item-sm",
            title: "Полный ландшафтный проект",
            price: "",
            pathImg: "",
            hoverColors: "rgb(204, 209, 255)",
          },
          {
            class: "services__row-item-sm",
            title: "Эскизный проект",
            price: "",
            pathImg: "",
            hoverColors: "rgb(204, 209, 255)",
          },
        ],
      ],
      [
        [
          {
            class: "services__row-item-sm",
            title: "",
            price: "",
            pathImg: "",
            hoverColors: "rgb(255, 229, 204)",
          },
          {
            class: "services__row-item-sm",
            title: "",
            price: "",
            pathImg: "",
            hoverColors: "rgb(243, 253, 180)",
          },
        ],
        [
          {
            class: "services__row-item-big",
            title: "Топографическая съемка",
            price: "от 12 000 руб.",
            pathImg: "",
            hoverColors: "rgb(255, 229, 204)",
            routePath: ROUTES_PATHS.FENCE,
          },
        ],
      ],
    ],
    dataGlobalService: [
      {
        urlImg: "url(/images/globalServices/services-1.webp)",
        title: "Установка септика",
        price: "Подробнее",
        routePath: ROUTES_PATHS.HOME,
      },
      {
        urlImg: "url(/images/globalServices/services-2.png)",
        title: "Установка забора",
        price: "Подробнее",
        routePath: ROUTES_PATHS.FENCE,
      },
      {
        urlImg: "url(/images/globalServices/services-5.webp)",
        title: "Фундамент",
        price: "Подробнее",
        routePath: ROUTES_PATHS.FAUNDATION,
      },
      {
        urlImg: "url(/images/globalServices/sticker.png)",
        title: "Кессон 2.0",
        price: "Подробнее",
        routePath: ROUTES_PATHS.WATER,
      },
      {
        urlImg: "url(/images/globalServices/services-5.png)",
        title: "Водоснабжение",
        price: "Подробнее",
        routePath: ROUTES_PATHS.WATER,
      },
      {
        urlImg: "url(/images/globalServices/services-4.png)",
        title: "Благоустройство",
        price: "Подробнее",
        routePath: ROUTES_PATHS.HOME,
      },
      {
        urlImg: "url(/images/globalServices/services-8++.webp)",
        title: "Электромонтаж",
        price: "Подробнее",
        routePath: ROUTES_PATHS.HOME,
      },
      {
        urlImg: "url(/images/globalServices/services-7.webp)",
        title: "Ливневка",
        price: "Подробнее",
        routePath: ROUTES_PATHS.HOME,
      },
    ],
  }),
};
</script>
<style lang="scss" scoped></style>
