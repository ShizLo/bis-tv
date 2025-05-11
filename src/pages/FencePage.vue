<script setup>
import { reactive, defineAsyncComponent, onMounted } from "vue";
import BannerSlider from "../components/Banner.vue";
import OurServices from "../components/OurServices.vue";
const LocalService = defineAsyncComponent(() => import("../components/LocalService.vue"));
const WorkOrder = defineAsyncComponent(() => import("../components/WorkOrder.vue"));
const PopularServices = defineAsyncComponent(() => import("../components/PopularServices.vue"));
const FeedBackForm = defineAsyncComponent(() => import("../components/FeedBackForm.vue"));
const DialogFeedBack = defineAsyncComponent(() => import("../components/Form/DialogFeedBack.vue"));
//<Импорт картинок блок наши услуги>================================================================================
import img_service_1 from "../assets/images/fencePage/services-2.webp";
import img_service_2 from "../assets/images/fencePage/services-1.png";
import img_service_3 from "../assets/images/fencePage/services-3.webp";
import img_service_4 from "../assets/images/fencePage/services-4.webp";
import img_service_5 from "../assets/images/fencePage/services-6.webp";
import img_service_6 from "../assets/images/fencePage/services-5.webp";
//</Импорт картинок>===============================================================================
import axios from "axios";
onMounted(async () => {
  try {
    state.loading = true;
    const url = "https://script.google.com/macros/s/AKfycbxX8juPBcrbME79NmrzYRAzQhBxamyH30AOYi5tpWM08Tr4t0B71xEYB8k5oFRJ3KFvcQ/exec";
    const response = await axios.get(url);
    state.price = response.data;
    // Обновляем цены в структуре
    updatePrices();
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
  } finally {
    state.loading = false;
  }
});

function updatePrices() {
  if (state.price[0]) {
    //<Банер>================================================================================
    // Забор из металлического штакетника
    state.bannerPrice[0].price = state.price[15].price;
    // Забор из профлиста
    state.bannerPrice[1].price = state.price[16].price;
    // Забор из деревянного штакетника
    state.bannerPrice[2].price = state.price[17].price;
    // Забор из сетки гиттер
    state.bannerPrice[3].price = state.price[18].price;
    // Забор из бруска
    state.bannerPrice[4].price = state.price[19].price;
    // Установка автоматики
    state.bannerPrice[5].price = state.price[20].price;
    //</Банер>===============================================================================
    //<Услуги>================================================================================
    // Забор из металлического штакетника
    state.dataServices[0][0][0].price = state.price[15].price;
    // Забор из сетки гиттер
    state.dataServices[1][0][0].price = state.price[18].price;
    // Забор из бруска
    state.dataServices[1][0][1].price = state.price[19].price;
    // Забор из профлиста
    state.dataServices[0][1][0].price = state.price[16].price;
    // Забор из деревянного штакетника
    state.dataServices[0][1][1].price = state.price[17].price;
    // Забор из сетки рабица
    state.dataServices[1][1][0].price = state.price[21].price;
    //</Услуги>===============================================================================
    //<Дополнительно берут>================================================================================
    // Автоматика
    state.servicePrice[0].price = state.price[20].price;
    // Уличное освещение
    state.servicePrice[1].price = state.price[22].price;
    // Организация парковки и заезда
    state.servicePrice[2].price = state.price[23].price;
    // Откатные ворота
    state.servicePrice[3].price = state.price[7].price;
    // Распашные ворота
    state.servicePrice[4].price = state.price[24].price;
    //</Дополнительно берут>===============================================================================
  }
}

const state = reactive({
  price: [],
  bannerPrice: initializeBannerStructure(),
  dataServices: initializeServicesStructure(),
  servicePrice: initializeServicePriceStructure(),
  loading: false,
});

function initializeBannerStructure() {
  return [
    {
      url: "/images/fence/banner-2++.webp",
      price: "",
      name: "Забор из металлического штакетника",
    },
    {
      url: "/images/fence/banner-1.jpg",
      price: "",
      name: "Забор из профлиста",
    },
    {
      url: "/images/fence/banner-3+++.webp",
      price: "",
      name: "Забор из деревянного штакетника",
    },
    {
      url: "/images/fence/banner-4.jpg",
      price: "",
      name: "Забор из сетки гиттер",
    },

    {
      url: "/images/fence/banner-6.jpg",
      price: "",
      name: "Забор из бруска",
    },
    {
      url: "/images/fence/banner-5.jpg",
      price: "",
      name: "Установка автоматики",
    },
  ];
}
function initializeServicesStructure() {
  return [
    [
      [
        {
          class: "services__row-item-big",
          title: "Забор из металлического штакетника",
          price: "",
          pathImg: img_service_1,
          hoverColors: "rgb(170, 214, 199)",
        },
      ],
      [
        {
          class: "services__row-item-sm",
          title: "Забор из профлиста",
          price: "",
          pathImg: img_service_2,
          hoverColors: "rgb(204, 209, 255)",
        },
        {
          class: "services__row-item-sm",
          title: "Забор из деревянного штакетника",
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
          title: "Забор из сетки гиттер (3D сетка)",
          price: "",
          pathImg: img_service_4,
          hoverColors: "rgb(255, 229, 204)",
        },
        {
          class: "services__row-item-sm",
          title: "Забор и оргаждения из бруска",
          price: "",
          pathImg: img_service_5,
          hoverColors: "rgb(243, 253, 180)",
        },
      ],
      [
        {
          class: "services__row-item-big",
          title: "Забор из сетки рабица",
          price: "",
          pathImg: img_service_6,
          hoverColors: "rgb(255, 229, 204)",
        },
      ],
    ],
  ];
}
function initializeServicePriceStructure() {
  return [
    { urlImg: "url(/images/fence/dop-1.png)", price: "", name: "Установка автоматики" },
    { urlImg: "url(/images/fence/dop-2.png", price: "", name: "Монтаж уличного освещения" },
    { urlImg: "url(/images/fence/dop-3+.png)", price: "", name: "Организация парковки и заезда" },
    { urlImg: "url(/images/fence/dop-5+.png)", price: "", name: "Откатные ворота" },
    { urlImg: "url(/images/fence/dop-4+.png)", price: "", name: "Распашные ворота" },
    { urlImg: "url(/images/fence/dop-6.png", price: "", name: "Дополнительные услуги" },
  ];
}

const dataOrder = [
  {
    urlImg: "/icons/workOrder/bubbles4.svg",
    title: "Заявка",
    text: "Оставьте заявку онлайн на нашем сайте, напишите нам в мессенджер или позвоните по телефону. Наш менеджер свяжется с Вами в течении нескольких минут.",
  },
  {
    urlImg: "/icons/workOrder/calculator.svg",
    title: "Расчёты, сметы",
    text: "Мы проводим расчет стоимости и составляем смету, учитывая все Ваши пожелания и требования.",
  },
  {
    urlImg: "/icons/workOrder/clipboard.svg",
    title: "Договор",
    text: "После утверждения сметы мы заключаем договор на выполнение работ. В договоре указываются все условия и сроки выполнения работ.",
  },
  {
    urlImg: "/icons/workOrder/automobile.svg",
    title: "Доставка и монтаж",
    text: "Доставляем и монтируем заказ в удобное для Вас время. Наша команда гарантирует качественный монтаж и безупречную работу оборудования.",
  },
];
const feedBackData = [
  "Забор из мет. штакетника",
  "Забор из профлиста",
  "Забор из дер. штакетника",
  "Забор из сетки гиттер",
  "Забор из бруска",
  "Забор из сетки рабица",
  "Автоматика",
  "Ворота",
  "Освещение",
  "Доп. услуги",
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
    bannerText="Заборы и ограждения"
    bannerDescription="Забор нужен для защиты вашего дома от посторонних, а также выделить и огородить четкие границы вашей территории.
Устанавливаем заборы на винтовых сваях, что обеспечивает длительный срок службы."
    :bannerPrice="state.bannerPrice"
    @isVisible="visibleForm()"
  />
  <OurServices @isVisible="visibleForm()" :dataServices="state.dataServices" title="Наши услуги по заборам" />
  <WorkOrder :data="dataOrder" title="Как мы работаем" />
  <LocalService serviceTitle="Дополнительно берут" :servicePrice="state.servicePrice" />
  <PopularServices title="Популярные услуги" />
  <FeedBackForm title="Закажите установку забора" id="GlobalForm" />
</template>

<style lang="scss" scoped></style>
