<script setup>
import { ROUTES_PATHS } from "../constants";

//<Импорт компонентов>================================================================================
import Banner from "../components/Banner.vue";
import OurServices from "../components/OurServices.vue";
import BisService from "../components/BisService.vue";
import WorksSlider from "../components/WorksSlider.vue";
import WorkOrder from "../components/WorkOrder.vue";
import Partners from "../components/Partners.vue";
import AboutUs from "../components/AboutUs.vue";
import Commands from "../components/Commands.vue";
import FeedBackForm from "../components/FeedBackForm.vue";
import Form from "../components/Form/Form.vue";
//</Импорт компонентов>===============================================================================

//<Импорт картинок блок "Наши услуги">================================================================================
import img_service_1 from "../assets/images/homePage/services-1.webp";
import img_service_2 from "../assets/images/homePage/services-2.webp";
import img_service_3 from "../assets/images/homePage/services-3.webp";
import img_service_4 from "../assets/images/homePage/services-4.webp";
import img_service_5 from "../assets/images/homePage/services-5.webp";
import img_service_6 from "../assets/images/homePage/services-6.png";
//</Импорт картинок>===============================================================================

const bannerPrice = [
  {
    url: "/images/swiperBanner/banner-1+.jpg",
    price: "от 110 000 руб.",
    name: "Благоустройство",
    routerPath: "",
  },
  {
    url: "/images/swiperBanner/swiper-slide-1.webp",
    price: "от 90 000 руб.",
    name: "Установка забора",
    routerPath: ROUTES_PATHS.FENCE,
  },
  {
    url: "/images/swiperBanner/swiper-slide-2.webp",
    price: "от 100 000 руб.",
    name: "Свайное поле",
    routerPath: ROUTES_PATHS.FAUNDATION,
  },
  {
    url: "/images/swiperBanner/banner-3.jpg",
    price: "от 65 000 руб.",
    name: "Откатные ворота",
    routerPath: ROUTES_PATHS.FENCE,
  },
  {
    url: "/images/swiperBanner/swiper-slide-4.webp",
    price: "от 1 900 руб./м²",
    name: "Парковка",
    routerPath: "",
  },
  {
    url: "/images/swiperBanner/swiper-slide-5.webp",
    price: "от 60 000 руб.",
    name: "Водоподготовка",
    routerPath: ROUTES_PATHS.WATER,
  },
  {
    url: "/images/swiperBanner/swiper-slide-6.webp",
    price: "от 180 000 руб.",
    name: "Септик под ключ",
    routerPath: "",
  },
];
const dataServices = [
  [
    [
      {
        class: "services__row-item-big",
        title: "Септик под ключ",
        price: "От 180 000 руб.",
        pathImg: img_service_1,
        hoverColors: "rgb(170, 214, 199)",
      },
    ],
    [
      {
        class: "services__row-item-sm",
        title: "Водоснабжение",
        price: "От 60 000 руб.",
        pathImg: img_service_2,
        hoverColors: "rgb(204, 209, 255)",
        routePath: ROUTES_PATHS.WATER,
      },
      // {
      //   class: "services__row-item-sm",
      //   title: "Ливневка",
      //   price: "От 50 000 руб.",
      //   pathImg: "url(/images/ourServices/services-7.webp",
      //   hoverColors: "rgb(204, 209, 255)",
      // },
      {
        class: "services__row-item-sm",
        title: "Установка заборов",
        price: "От 90 000 руб.",
        pathImg: img_service_3,
        hoverColors: "rgb(255, 229, 204)",
        routePath: ROUTES_PATHS.FENCE,
      },
    ],
  ],
  [
    [
      {
        class: "services__row-item-sm",
        title: "Фундамент",
        price: "От 100 000 руб.",
        pathImg: img_service_4,
        hoverColors: "rgb(255, 229, 204)",
        routePath: ROUTES_PATHS.FAUNDATION,
      },
      {
        class: "services__row-item-sm",
        title: "Электромонтаж",
        price: "От 20 000 руб.",
        pathImg: img_service_5,
        hoverColors: "rgb(243, 253, 180)",
        routePath: ROUTES_PATHS.ELECTRICITY,
      },
    ],
    [
      {
        class: "services__row-item-big",
        title: "Проект участка и топографическая съемка",
        price: "От 50 000 руб.",
        pathImg: img_service_6,
        hoverColors: "rgb(255, 229, 204)",
        routePath: ROUTES_PATHS.TOPOGRAPHY,
      },
    ],
  ],
];
const dataOrder = [
  {
    urlImg: "/icons/homePage/spinner9.svg",
    title: "Делаем полный цикл",
    text: "Мы беремся за реализацию всего цикла от проектирования до организации газона. Большой набор услуг позволяет закрыть большую часть потребностей в 'одном окне', что позволяет не тратить время на согласования, коллаборации и экономит средства.",
  },
  {
    urlImg: "/icons/homePage/user-tie.svg",
    title: "Индивидуальный подход",
    text: "Как не бывает двух одинаковых заказчиков, так и нет полностью идентичных участков. Наши инженеры и ландшафтный дизайнер помогут создать индивидуальный ландшафт и грамотно разместить коммуникации, учитывая все особенности участка.",
  },
  {
    urlImg: "/icons/homePage/checkmark.svg",
    title: "Гарантия качества",
    text: "Гарантируем качество наших работ и оперативно реагируем в случае когда, что-то пошло не так. ",
  },
  {
    urlImg: "/icons/homePage/cogs.svg",
    title: "Служба сервиса",
    text: "Если заказываете сервис у нас, то помимо сезонного обслуживания получаете и расширенную* гарантию. После монтажа оборудования наш специалист сам будет отслеживать и напоминать вам о необходимости провести ТО.",
  },
  {
    urlImg: "/icons/homePage/clipboard.svg",
    title: "Прозрачная смета",
    text: "После первичной встречи на участке составляется визуализация вашего участка с привязками и размерами. Это позволяет точно составить подробную смету. Цена в большинстве случаев фиксируется или в смете указаны пункты, корректируемые по факту.",
  },
];
</script>

<template>
  <Banner
    style="white-space: pre-line"
    bannerText="Инженерные коммуникации 
  и благоустройство участка"
    :bannerPrice="bannerPrice"
  />
  <OurServices :dataServices="dataServices" title="Наши услуги" />
  <BisService title="БИС Сервис" />
  <WorksSlider />
  <WorkOrder :data="dataOrder" title="Почему выбирают нас" />
  <Partners />
  <AboutUs />
  <Commands />
  <FeedBackForm title="Оставьте заявку" id="GlobalForm" />
</template>
