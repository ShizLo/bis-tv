<script setup>
import BannerSlider from "../components/Banner.vue";
import LocalService from "../components/LocalService.vue";
import WorkOrder from "../components/WorkOrder.vue";
import FeedBackForm from "../components/FeedBackForm.vue";
import OurServices from "../components/OurServices.vue";
import PopularServices from "../components/PopularServices.vue";
import { ROUTES_PATHS } from "../constants";

//<Импорт картинок блок "Наши услуги">================================================================================
import img_service_1 from "../assets/images/foundationPage/services-1.png";
import img_service_2 from "../assets/images/foundationPage/services-2.png";
import img_service_3 from "../assets/images/foundationPage/services-3.png";
import img_service_4 from "../assets/images/foundationPage/services-4.png";
import img_service_5 from "../assets/images/foundationPage/services-5.png";
import img_service_6 from "../assets/images/foundationPage/services-6.png";
//</Импорт картинок>===============================================================================

const bannerPrice = [
  {
    url: "/images/foundationPage/slider-1+.jpg",
    price: "от 90 000 руб.",
    name: "Монтаж фундамента под дом",
  },
  {
    url: "/images/foundationPage/slider-2.jpg",
    price: "от 80 000 руб.",
    name: "Деревянная обвязка",
  },
  // {
  //   url: "",
  //   price: "",
  //   name: "Обвязка уголком",
  // },
  // {
  //   url: "",
  //   price: "",
  //   name: "Обвязка профтрубой",
  // },
  // {
  //   url: "",
  //   price: "",
  //   name: "Обвязка швейлером",
  // },
];
const servicePrice = [
  { urlImg: "", price: "", name: "Отсыпка свайного поля" },
  { urlImg: "", price: "", name: "Планировка и расчистка участка" },
  { urlImg: "", price: "", name: "Дренаж и ливневка" },
];
const dataOrder = [
  {
    urlImg: "/icons/foundationPage/bubbles4.svg",
    title: "Заявка",
    text: "Оставьте заявку онлайн на нашем сайте, напишите нам в мессенджер или позвоните по телефону. Наш менеджер свяжется с Вами в течение нескольких минут и ответит на все Ваши вопросы.",
  },
  {
    urlImg: "/icons/foundationPage/calculator.svg",
    title: "Пробное бурение, сметы ",
    text: "Специалист выезжает на участок и выполняет пробное бурение на основание которого составляется смета.",
  },
  {
    urlImg: "/icons/foundationPage/clipboard.svg",
    title: "Договор",
    text: "После утверждения сметы мы заключаем договор на выполнение работ. В договоре указываются все условия и сроки выполнения работ.",
  },
  {
    urlImg: "/icons/foundationPage/automobile.svg",
    title: "Доставка и монтаж",
    text: "Мы доставляем и монтируем ваш заказ в удобное для вас время. Наша команда профессиональных монтажников гарантирует качественный монтаж.",
  },
];
const dataServices = [
  [
    [
      {
        class: "services__row-item-big",
        title: "Монтаж фундамента под дом",
        price: "от 90 000 руб.",
        pathImg: img_service_1,
        hoverColors: "rgb(170, 214, 199)",
      },
    ],
    [
      {
        class: "services__row-item-sm",
        title: "Деревянная обвязка",
        price: "от 80 000 руб.",
        pathImg: img_service_2,
        hoverColors: "rgb(204, 209, 255)",
      },
      {
        class: "services__row-item-sm",
        title: "Обвязка уголком",
        price: "от 300 р/м.пог",
        pathImg: img_service_3,
        hoverColors: "rgb(204, 209, 255)",
      },
    ],
  ],
  [
    [
      {
        class: "services__row-item-sm",
        title: "Обвязка профтрубой",
        price: "от 200 р/м.пог",
        pathImg: img_service_4,
        hoverColors: "rgb(255, 229, 204)",
      },
      {
        class: "services__row-item-sm",
        title: "Пробное бурение",
        price: "от 6 000 руб.",
        pathImg: img_service_5,
        hoverColors: "rgb(243, 253, 180)",
      },
    ],
    [
      {
        class: "services__row-item-big",
        title: "Обвязка швеллером",
        price: "от 1 450 р/м.пог",
        pathImg: img_service_6,
        hoverColors: "rgb(255, 229, 204)",
      },
    ],
  ],
];
</script>

<template>
  <BannerSlider
    bannerText="Монтаж фундамента на винтовых сваях"
    bannerDescription="Быстрое, надежное и экономичное решение для строительства. Обеспечивает прочность основания и подходит для любых грунтовых условий.
Различное назначение: фундамент для дома, хоз. построек, забора, фундамент под печти или доп оборудование. Везде где требуется обеспечить жесткое статичное основание."
    :bannerPrice="bannerPrice"
  />
  <OurServices :dataServices="dataServices" title="Услуги по фундаменту" />

  <WorkOrder :data="dataOrder" title="Как мы работаем" />
  <LocalService serviceTitle="Дополнительно берут" :servicePrice="servicePrice" />
  <PopularServices title="Популярные услуги" />
  <FeedBackForm title="Оставьте заявку" id="GlobalForm" />
</template>

<style lang="scss" scoped></style>
