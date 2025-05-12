<script setup>
import { reactive, defineAsyncComponent, onMounted } from "vue";
import { useCatalogStore } from "@/stores/modules/catalog.store";
import BannerSlider from "../components/Banner.vue";

const OurServices = defineAsyncComponent(() => import("../components/OurServices.vue"));
const LocalService = defineAsyncComponent(() => import("../components/LocalService.vue"));
const WorkOrder = defineAsyncComponent(() => import("../components/WorkOrder.vue"));
const FeedBackForm = defineAsyncComponent(() => import("../components/FeedBackForm.vue"));
const PopularServices = defineAsyncComponent(() => import("../components/PopularServices.vue"));
const DialogFeedBack = defineAsyncComponent(() => import("../components/Form/DialogFeedBack.vue"));

const catalogStore = useCatalogStore();

onMounted(async () => {
  await catalogStore.loadCatalog();
  updatePrices();
});

function updatePrices() {
  //<Основные услуги>================================================================================
  // Кессон
  state.dataServices[0][0][0].price = catalogStore.getPriceById(26);
  // Монтаж автоматики
  state.dataServices[1][0][0].price = catalogStore.getPriceById(27);
  // Обустройство колодца
  state.dataServices[1][0][1].price = catalogStore.getPriceById(14);
  // Водоподготовка
  state.dataServices[0][1][0].price = catalogStore.getPriceById(10);
  // Обвязка скважины
  state.dataServices[0][1][1].price = catalogStore.getPriceById(28);
  // Бурение скважин
  state.dataServices[1][1][0].price = catalogStore.getPriceById(11);
  //</Основные услуги>===============================================================================
  //<Банер>================================================================================
  //Кессон
  state.bannerPrice[0].price = catalogStore.getPriceById(26);
  //Монтаж автоматики
  state.bannerPrice[1].price = catalogStore.getPriceById(27);
  //</Банер>===============================================================================
  //<Дополнительные бурут>================================================================================
  //Врезка в водопровод
  state.dopServices[0].price = catalogStore.getPriceById(29);
  // Анализ воды и подбор оборудования для очистки
  state.dopServices[1].price = catalogStore.getPriceById(30);
  // Уличный кран
  state.dopServices[2].price = catalogStore.getPriceById(31);
  // Утепление колодца
  state.dopServices[3].price = catalogStore.getPriceById(32);
  // Установка ковера (подземный кран)
  state.dopServices[4].price = catalogStore.getPriceById(33);
  // Прокладка дополнительных трас водоснабжения
  state.dopServices[5].price = catalogStore.getPriceById(34);
  //</Дополнительные берут>===============================================================================
}

const state = reactive({
  price: [],
  bannerPrice: initializeBannerStructure(),
  dataServices: initializeServicesStructure(),
  dopServices: initializeDopServicesStructure(),
  loading: false,
});

function initializeBannerStructure() {
  return [
    {
      url: "/images/waterPage/slider-1_.jpg",
      price: "",
      name: "Кессон",
    },
    {
      url: "/images/waterPage/slider-2+.jpg",
      price: "",
      name: "Монтаж автоматики",
    },
  ];
}
function initializeServicesStructure() {
  return [
    [
      [
        {
          class: "services__row-item-big",
          title: "Кессон",
          price: "",
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
          price: "",
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
          price: "",
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
          price: "",
          pathImg: img_service_2,
          hoverColors: "rgb(204, 209, 255)",
        },
      ],
    ],
  ];
}
function initializeDopServicesStructure() {
  return [
    { urlImg: "", price: "", name: "Врезка в водопровод" },
    { urlImg: "", price: "", name: "Анализ воды и подбор оборудования для очистки" },
    { urlImg: "", price: "", name: "Уличный кран" },
    { urlImg: "", price: "", name: "Утепление колодца" },
    { urlImg: "", price: "", name: "Установка ковера (подземный кран)" },
    { urlImg: "", price: "", name: "Прокладка дополнительных трас водоснабжения" },
  ];
}

//<Импорт картинок блок наши услуги>================================================================================
import img_service_1 from "../assets/images/waterPage/services-1.webp";
import img_service_2 from "../assets/images/waterPage/services-2.webp";
import img_service_3 from "../assets/images/waterPage/services-3.webp";
import img_service_4 from "../assets/images/waterPage/services-4.webp";
import img_service_5 from "../assets/images/waterPage/services-5.webp";
import img_service_6 from "../assets/images/waterPage/services-6.webp";
//</Импорт картинок>===============================================================================

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
    :bannerPrice="state.bannerPrice"
    @isVisible="visibleForm()"
  />
  <OurServices @isVisible="visibleForm()" :dataServices="state.dataServices" title="Услуги по водоснабжению" />
  <WorkOrder :data="dataOrder" title="Как мы работаем" />
  <LocalService serviceTitle="Дополнительно берут" :servicePrice="state.dopServices" />
  <PopularServices title="Популярные услуги" />
  <FeedBackForm title="Оставьте заявку" id="GlobalForm" />
</template>

<style lang="scss" scoped></style>
