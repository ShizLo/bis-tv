<template>
  <BannerSlider
    bannerText="Заборы и ограждения"
    bannerDescription="Забор нужен для защиты вашего дома от посторонних, а также выделить и огородить четкие границы вашей территории.
Устанавливаем заборы на винтовых сваях, что обеспечивает длительный срок службы."
    :bannerPrice="bannerPrice"
  />
  <OurServices :dataServices="dataServices" title="Наши услуги по заборам" />

  <WorkOrder :data="dataOrder" title="Как мы работаем" />
  <LocalService serviceTitle="Дополнительно берут" :servicePrice="servicePrice" />
  <GlobalServices :data="dataGlobalService" title="Популярные услуги" />
  <FeedBackForm title="Закажите установку забора" id="GlobalForm" />
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
        text: "Оставьте заявку онлайн на нашем сайте, напишите нам в мессенджер или позвоните по телефону. Наш менеджер свяжется с Вами в течение нескольких минут и ответит на все Ваши вопросы.",
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
        text: "Мы доставляем и монтируем Ваш заказ в удобное для Вас время. Наша команда профессиональных монтажников гарантирует качественный монтаж и безупречную работу оборудования.",
      },
    ],
    dataServices: [
      [
        [
          {
            class: "services__row-item-big",
            title: "Забор из металлического штакетника",
            price: "от 7 500 м.пог",
            pathImg: "url(/images/fence/services-2.png)",
            hoverColors: "rgb(170, 214, 199)",
          },
        ],
        [
          {
            class: "services__row-item-sm",
            title: "Забор из профлиста",
            price: "от 8 650 м.пог",
            pathImg: "url(/images/fence/services-1+.png)",
            hoverColors: "rgb(204, 209, 255)",
          },
          {
            class: "services__row-item-sm",
            title: "Забор из деревянного штакетника",
            price: "от 8 000 м.пог",
            pathImg: "url(/images/fence/services-3.png)",
            hoverColors: "rgb(204, 209, 255)",
          },
        ],
      ],
      [
        [
          {
            class: "services__row-item-sm",
            title: "Забор из сетки гиттер (3D сетка)",
            price: "от 5 350 м.пог",
            pathImg: "url(/images/fence/services-4+.png)",
            hoverColors: "rgb(255, 229, 204)",
          },
          {
            class: "services__row-item-sm",
            title: "Забор и оргаждения из бруска",
            price: "от 6 000 м.пог",
            pathImg: "url(/images/fence/services-6.png)",
            hoverColors: "rgb(243, 253, 180)",
          },
        ],
        [
          {
            class: "services__row-item-big",
            title: "Забор из сетки рабица",
            price: "от 3 050 м.пог",
            pathImg: "url(/images/fence/services-5+++++.png)",
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
      // {
      //   urlImg: "url(/images/globalServices/services-2.png)",
      //   title: "Установка забора",
      //   price: "Подробнее",
      //   routePath: ROUTES_PATHS.FENCE,
      // },
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
