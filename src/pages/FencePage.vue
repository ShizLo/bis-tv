<script setup>
import { reactive } from "vue";

import BannerSlider from "../components/Banner.vue";
import LocalService from "../components/LocalService.vue";
import WorkOrder from "../components/WorkOrder.vue";
import OurServices from "../components/OurServices.vue";
import PopularServices from "../components/PopularServices.vue";
import FeedBackForm from "../components/FeedBackForm.vue";
import { ROUTES_PATHS } from "../constants";
import DialogFeedBack from "../components/Form/DialogFeedBack.vue";
//<Импорт картинок блок наши услуги>================================================================================
import img_service_1 from "../assets/images/fencePage/services-2.webp";
import img_service_2 from "../assets/images/fencePage/services-1.png";
import img_service_3 from "../assets/images/fencePage/services-3.webp";
import img_service_4 from "../assets/images/fencePage/services-4.webp";
import img_service_5 from "../assets/images/fencePage/services-6.webp";
import img_service_6 from "../assets/images/fencePage/services-5.webp";
//</Импорт картинок>===============================================================================

const bannerPrice = [
  {
    url: "/images/fence/banner-2++.webp",
    price: "от 6 250 за м.пог",
    name: "Забор из металлического штакетника",
  },
  {
    url: "/images/fence/banner-1.jpg",
    price: "от 7 200 за м.пог",
    name: "Забор из профлиста",
  },
  {
    url: "/images/fence/banner-3+++.webp",
    price: "от 9 350 за м.пог",
    name: "Забор из деревянного штакетника",
  },
  {
    url: "/images/fence/banner-4.jpg",
    price: "от 4500 за м.пог",
    name: "Забор из сетки гиттер",
  },

  {
    url: "/images/fence/banner-6.jpg",
    price: "от 6000 за м.пог",
    name: "Забор из бруска",
  },
  {
    url: "/images/fence/banner-5.jpg",
    price: "от 60 000 руб.",
    name: "Установка автоматики",
  },
];
const dataServices = [
  [
    [
      {
        class: "services__row-item-big",
        title: "Забор из металлического штакетника",
        price: "от 6 250 м.пог",
        // pathImg: "url(/images/fence/services-2+++.webp)",
        pathImg: img_service_1,
        hoverColors: "rgb(170, 214, 199)",
      },
    ],
    [
      {
        class: "services__row-item-sm",
        title: "Забор из профлиста",
        price: "от 7 200 м.пог",
        pathImg: img_service_2,
        hoverColors: "rgb(204, 209, 255)",
      },
      {
        class: "services__row-item-sm",
        title: "Забор из деревянного штакетника",
        price: "от 9 350 м.пог",
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
        price: "от 4 500 м.пог",
        pathImg: img_service_4,
        hoverColors: "rgb(255, 229, 204)",
      },
      {
        class: "services__row-item-sm",
        title: "Забор и оргаждения из бруска",
        price: "от 6 000 м.пог",
        pathImg: img_service_5,
        hoverColors: "rgb(243, 253, 180)",
      },
    ],
    [
      {
        class: "services__row-item-big",
        title: "Забор из сетки рабица",
        price: "от 2 550 м.пог",
        pathImg: img_service_6,
        hoverColors: "rgb(255, 229, 204)",
      },
    ],
  ],
];

const servicePrice = [
  { urlImg: "url(/images/fence/dop-1.png)", price: "от 60 000 руб.", name: "Установка автоматики" },
  { urlImg: "url(/images/fence/dop-2.png", price: "от 10 000 руб.", name: "Освещение участка" },
  { urlImg: "url(/images/fence/dop-3+.png)", price: "", name: "Организация парковки и заезда" },
  { urlImg: "url(/images/fence/dop-5+.png)", price: "", name: "Откатные ворота" },
  { urlImg: "url(/images/fence/dop-4+.png)", price: "", name: "Распашные ворота" },
  { urlImg: "url(/images/fence/dop-6.png", price: "", name: "Дополнительные услуги" },
  // { urlImg: "url(/images/fence/services-6.png)", price: "от 6000 м.пог", name: "Забор и оргаждения из бруска" },
];
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
    :bannerPrice="bannerPrice"
    @isVisible="visibleForm()"
  />
  <OurServices @isVisible="visibleForm()" :dataServices="dataServices" title="Наши услуги по заборам" />
  <WorkOrder :data="dataOrder" title="Как мы работаем" />
  <LocalService serviceTitle="Дополнительно берут" :servicePrice="servicePrice" />
  <PopularServices title="Популярные услуги" />
  <FeedBackForm title="Закажите установку забора" id="GlobalForm" />
</template>

<style lang="scss" scoped></style>
