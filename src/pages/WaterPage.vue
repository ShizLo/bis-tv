<template>
  <BannerSlider
    bannerText="Водоснабжение и очистка воды в частном доме"
    bannerDescription="Одна из основных задач при обустройстве загородного дома организация водоснабжения.
В основном мы рекомендуем бурить скважины на воду, но в некоторых районах за счет особенностей экосистемы применяются и другие источники воды (колодец, накопительные ёмкости).
Кроме источника воды потребуется монтаж соответствующего оборудования. У нас есть для Вас решение."
    :bannerPrice="bannerPrice"
  />
  <OurServices :dataServices="dataServices" title="Услуги по водоснабжению" />

  <WorkOrder :data="dataOrder" title="Как мы работаем" />
  <LocalService serviceTitle="Дополнительно берут" :servicePrice="servicePrice" />
  <GlobalForm id="GlobalForm" />
</template>

<script>
import BannerSlider from "../components/Banner.vue";
import LocalService from "../components/LocalService.vue";
import WorkOrder from "../components/WorkOrder.vue";
import GlobalForm from "../components/Form/GlobalForm.vue";
import OurServices from "../components/OurServices.vue";
import { ROUTES_PATHS } from "../constants";

export default {
  name: "FenceView",
  components: {
    BannerSlider,
    LocalService,
    WorkOrder,
    GlobalForm,
    OurServices,
  },

  setup() {
    return {};
  },
  data: () => ({
    bannerPrice: [
      {
        url: "/images/waterPage/slider-1_.jpg",
        price: "от 320 000 руб.",
        name: "Кессон",
      },
      // {
      //   url: "/images/fence/banner-1.jpg",
      //   price: "",
      //   name: "Бурение скважин",
      // },
      // {
      //   url: "/images/fence/banner-3++.jpg",
      //   price: "от 55 000 руб.",
      //   name: "Обвязка скважины",
      // },
      {
        url: "/images/waterPage/slider-2+.jpg",
        price: "от 45 000 руб.",
        name: "Монтаж автоматики",
      },
      // {
      //   url: "/images/fence/banner-5.jpg",
      //   price: "от 60 000 руб.",
      //   name: "Обустройство колодца",
      // },
      // {
      //   url: "/images/fence/banner-6.jpg",
      //   price: "от 6000 за м.пог",
      //   name: "Врезка в магистраль",
      // },
    ],
    servicePrice: [
      { urlImg: "", price: "", name: "1" },
      { urlImg: "", price: "", name: "2" },
      { urlImg: "", price: "", name: "3" },
      { urlImg: "", price: "", name: "4" },
      { urlImg: "", price: "", name: "5" },
      { urlImg: "", price: "", name: "6" },
      // { urlImg: "url(/images/fence/services-6.png)", price: "от 6000 м.пог", name: "Забор и оргаждения из бруска" },
    ],
    dataOrder: [
      {
        urlImg: "/icons/waterPage/pencil2.svg",
        title: "Проект и эскиз",
        text: "Готовим проект или визуализацию в форме электронного эскиза, где обозначаем схему будущих работ.",
      },
      {
        urlImg: "/icons/waterPage/droplet.svg",
        title: "Источник воды",
        text: "Если воду запланировано брать из скважины, то ее надо пробурить и обустроить, так же с колодцем.*",
      },
      {
        urlImg: "/icons/waterPage/share2.svg",
        title: "Подведение к дому",
        text: "Прокладка магистрали воды (ПНД труба и кабель питания) от источника (скважина, колодец или центральный водопровод) к точке/точкам ввода.",
      },
      {
        urlImg: "/icons/waterPage/tab.svg",
        title: "Разводка по дому",
        text: "Разводим воду под холодную и горячую воду по дому.",
      },
      {
        urlImg: "/icons/waterPage/hammer.svg",
        title: "Устанавка оборудования",
        text: "Монтируем систему водоочистки, бойлер и прочие инженерные системы.",
      },
      {
        urlImg: "/icons/waterPage/link.svg",
        title: "Устанавка сантехники",
        text: "Устанавливаем ванны, унитазы, раковины, душевые, подключаем смесители и прочую сантехнику.",
      },
    ],
    dataServices: [
      [
        [
          {
            class: "services__row-item-big",
            title: "Кессон",
            price: "от 320 000 руб.",
            pathImg: "url(/images/waterPage/sticker.png)",
            hoverColors: "rgb(170, 214, 199)",
          },
        ],
        [
          {
            class: "services__row-item-sm",
            title: "Бурение скважин",
            price: "",
            pathImg: "url(/images/waterPage/water-2.png)",
            hoverColors: "rgb(204, 209, 255)",
          },
          {
            class: "services__row-item-sm",
            title: "Обвязка скважины",
            price: "от 55 000 руб.",
            pathImg: "url(/images/waterPage/water-3.png)",
            hoverColors: "rgb(204, 209, 255)",
          },
        ],
      ],
      [
        [
          {
            class: "services__row-item-sm",
            title: "Монтаж автоматики",
            price: "от 45 000 руб.",
            pathImg: "url(/images/waterPage/water-4.png)",
            hoverColors: "rgb(255, 229, 204)",
          },
          {
            class: "services__row-item-sm",
            title: "Обустройство колодца",
            price: "",
            pathImg: "url(/images/waterPage/water-5.png )",
            hoverColors: "rgb(243, 253, 180)",
          },
        ],
        [
          {
            class: "services__row-item-big",
            title: "Врезка в центральный водопровод",
            price: "",
            pathImg: "url(/images/waterPage/water-6.png)",
            hoverColors: "rgb(255, 229, 204)",
          },
        ],
      ],
    ],
  }),
};
</script>
<style lang="scss" scoped></style>
