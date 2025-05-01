<script setup>
import { reactive, defineAsyncComponent } from "vue";
import BannerSlider from "../components/Banner.vue";
const OurServices = defineAsyncComponent(() => import("../components/OurServices.vue"));
const LocalService = defineAsyncComponent(() => import("../components/LocalService.vue"));
const WorkOrder = defineAsyncComponent(() => import("../components/WorkOrder.vue"));
const FeedBackForm = defineAsyncComponent(() => import("../components/FeedBackForm.vue"));
const PopularServices = defineAsyncComponent(() => import("../components/PopularServices.vue"));
const DialogFeedBack = defineAsyncComponent(() => import("../components/Form/DialogFeedBack.vue"));

//<Импорт картинок блок наши услуги>================================================================================
import img_service_1 from "../assets/images/waterPage/services-1.webp";
import img_service_2 from "../assets/images/waterPage/services-2.webp";
import img_service_3 from "../assets/images/waterPage/services-3.webp";
import img_service_4 from "../assets/images/waterPage/services-4.webp";
import img_service_5 from "../assets/images/waterPage/services-5.webp";
import img_service_6 from "../assets/images/waterPage/services-6.webp";
//</Импорт картинок>===============================================================================

const bannerPrice = [
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
];
const dataServices = [
  [
    [
      {
        class: "services__row-item-big",
        title: "Кессон",
        price: "от 320 000 руб.",
        pathImg: img_service_1,
        hoverColors: "rgb(204, 209, 255)",
      },
    ],
    [
      {
        class: "services__row-item-sm",
        title: "Водоподготовка",
        price: "",
        pathImg: img_service_6,
        hoverColors: "rgb(204, 209, 255)",
      },
      {
        class: "services__row-item-sm",
        title: "Обвязка скважины",
        price: "от 55 000 руб.",
        pathImg: img_service_3,
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
        pathImg: img_service_4,
        hoverColors: "rgb(204, 209, 255)",
      },
      {
        class: "services__row-item-sm",
        title: "Обустройство колодца",
        price: "",
        pathImg: img_service_5,
        hoverColors: "rgb(204, 209, 255)",
      },
    ],
    [
      {
        class: "services__row-item-big",
        title: "Бурение скважин",
        price: "от 3800 руб./м",
        pathImg: img_service_2,
        hoverColors: "rgb(204, 209, 255)",
      },
    ],
  ],
];
const servicePrice = [
  { urlImg: "", price: "от 30000 руб.", name: "Врезка в водопровод" },
  { urlImg: "", price: "", name: "Анализ воды и подбор оборудования для очистки" },
  { urlImg: "", price: "", name: "Уличный кран" },
  { urlImg: "", price: "", name: "Утепление колодца" },
  { urlImg: "", price: "", name: "Установка ковера (подземный кран)" },
  { urlImg: "", price: "", name: "Прокладка дополнительных трас водоснабжения" },
  // { urlImg: "url(/images/fence/services-6.png)", price: "от 6000 м.пог", name: "Забор и оргаждения из бруска" },
];
const dataOrder = [
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
    title: "Установка оборудования",
    text: "Монтируем систему водоочистки, бойлер и прочие инженерные системы.",
  },
  {
    urlImg: "/icons/waterPage/link.svg",
    title: "Установка сантехники",
    text: "Устанавливаем ванны, унитазы, раковины, душевые, подключаем смесители и прочую сантехнику.",
  },
];
const feedBackData = [
  "Кессон",
  "Монтаж автоматики",
  "Бурение скважин",
  "Обвязка скважины",
  "Обустройство колодца",
  "Водоподготовка",
  "Врезка в водопровод",
  "Анализ воды",
  "Уличный кран",
  "Утепление колодца",
  "Нет в списке",
];

function visibleForm() {
  if (!feedbackForm.active) {
    feedbackForm.active = true;
    // toggleBodyScroll(true);
  } else {
    feedbackForm.active = false;
    // toggleBodyScroll(false);
  }
}
const feedbackForm = reactive({
  active: false, // Открыта ли форма обратной связи
});
</script>

<template>
  <DialogFeedBack @isVisible="visibleForm()" v-if="feedbackForm.active" :services="feedBackData" />
  <BannerSlider
    bannerText="Водоснабжение и очистка воды в частном доме"
    bannerDescription="Одна из основных задач при обустройстве загородного дома организация водоснабжения.
В основном мы рекомендуем бурить скважины на воду, но в некоторых районах за счет особенностей экосистемы применяются и другие источники воды (колодец, накопительные ёмкости).
Кроме источника воды потребуется монтаж соответствующего оборудования. У нас есть для Вас решение."
    :bannerPrice="bannerPrice"
    @isVisible="visibleForm()"
  />
  <OurServices @isVisible="visibleForm()" :dataServices="dataServices" title="Услуги по водоснабжению" />
  <WorkOrder :data="dataOrder" title="Как мы работаем" />
  <LocalService serviceTitle="Дополнительно берут" :servicePrice="servicePrice" />
  <PopularServices title="Популярные услуги" />
  <FeedBackForm title="Оставьте заявку" id="GlobalForm" />
</template>

<style lang="scss" scoped></style>
