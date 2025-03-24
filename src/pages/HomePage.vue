<script setup>
import { reactive } from "vue";
import { ROUTES_PATHS } from "../constants";

//<Импорт компонентов>================================================================================
import Banner from "../components/Banner.vue";
import OurServices from "../components/OurServices.vue";
import ServiceSlider from "../components/ServiceSlider.vue";

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

//<Импорт картинок блок "Наши работы">================================================================================
import img_work_1 from "../assets/images/homePage/works/1.jpg";
import img_work_2 from "../assets/images/homePage/works/2.jpg";
import img_work_3 from "../assets/images/homePage/works/3.jpg";
import img_work_4 from "../assets/images/homePage/works/4.jpg";
import img_work_5 from "../assets/images/homePage/works/5.jpg";
import img_work_6 from "../assets/images/homePage/works/6.jpg";
import img_work_7 from "../assets/images/homePage/works/7.jpg";
import img_work_8 from "../assets/images/homePage/works/8.jpg";

//</Импорт картинок>===============================================================================

//<Импорт картинок блок "Галерея">================================================================================
import greenPark_1 from "../assets/images/workPhoto/greenPark/1.jpg";
import greenPark_2 from "../assets/images/workPhoto/greenPark/2.webp";
import greenPark_3 from "../assets/images/workPhoto/greenPark/3.jpg";
import greenPark_4 from "../assets/images/workPhoto/greenPark/4.jpg";

import foundation_1 from "../assets/images/workPhoto/foundation/1.webp";
import foundation_2 from "../assets/images/workPhoto/foundation/2.webp";
import foundation_3 from "../assets/images/workPhoto/foundation/3.webp";
import foundation_4 from "../assets/images/workPhoto/foundation/4.webp";
import foundation_5 from "../assets/images/workPhoto/foundation/7.jpg";
import foundation_6 from "../assets/images/workPhoto/foundation/8.jpg";
import foundation_7 from "../assets/images/workPhoto/foundation/9.jpeg";
import foundation_8 from "../assets/images/workPhoto/foundation/10.jpg";

import electricity_1 from "../assets/images/workPhoto/electricity/1.jpg";

import gate_1 from "../assets/images/workPhoto/slidingGate/1.jpeg";
import gate_2 from "../assets/images/workPhoto/slidingGate/2.jpg";
import gate_3 from "../assets/images/workPhoto/slidingGate/3.jpeg";

import fence_1 from "../assets/images/workPhoto/fence/1.jpeg";
import fence_2 from "../assets/images/workPhoto/fence/2.jpeg";
import fence_3 from "../assets/images/workPhoto/fence/3.jpeg";
import fence_4 from "../assets/images/workPhoto/fence/4.jpeg";
import fence_5 from "../assets/images/workPhoto/fence/5.jpeg";
import fence_6 from "../assets/images/workPhoto/fence/6.jpeg";

import gitter_1 from "../assets/images/workPhoto/gitter/1.jpeg";

import borders_1 from "../assets/images/workPhoto/borders/1.jpeg";

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
const dopServices = [
  [
    [
      {
        class: "services__row-item-big",
        title: "Благоустройство",
        price: "От 110 000 руб.",
        pathImg: "",
        hoverColors: "rgb(170, 214, 199)",
      },
    ],
    [
      {
        class: "services__row-item-sm",
        title: "Бурение скважин",
        price: "От 3 800 р./м",
        pathImg: "",
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
        title: "Ливневка",
        price: "~ 50 000 руб.",
        pathImg: "",
        hoverColors: "rgb(255, 229, 204)",
        routePath: ROUTES_PATHS.FENCE,
      },
    ],
  ],
  [
    [
      {
        class: "services__row-item-sm",
        title: "Обустройство дренажа",
        price: "От 80 000 руб.",
        pathImg: "",
        hoverColors: "rgb(255, 229, 204)",
        routePath: ROUTES_PATHS.FAUNDATION,
      },
      {
        class: "services__row-item-sm",
        title: "Обустройство колодца",
        price: "",
        pathImg: "",
        hoverColors: "rgb(243, 253, 180)",
        routePath: ROUTES_PATHS.ELECTRICITY,
      },
    ],
    [
      {
        class: "services__row-item-big",
        title: "БИС сервис",
        price: "Аварийный выезд - 5000 руб.",
        pathImg: "",
        hoverColors: "rgb(255, 229, 204)",
        routePath: ROUTES_PATHS.TOPOGRAPHY,
      },
    ],
  ],
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
const dataWork = [
  {
    url: img_work_1,
    title: "Озеленение",
    work: [
      {
        url: img_work_1,
        alt: "Озеленение",
      },
      {
        url: greenPark_1,
        alt: "Озеленение",
      },
      {
        url: greenPark_2,
        alt: "Озеленение",
      },
    ],
  },
  {
    url: gate_1,
    title: "Откатные ворота",
    work: [
      {
        url: gate_1,
        alt: "Откатные ворота",
      },
      {
        url: img_work_7,
        alt: "Откатные ворота",
      },
      {
        url: gate_2,
        alt: "Откатные ворота",
      },
      {
        url: gate_3,
        alt: "Откатные ворота",
      },
    ],
  },

  {
    url: foundation_1,
    title: "Свайное поле",
    work: [
      {
        url: foundation_1,
        alt: "Свайное поле",
      },
      {
        url: foundation_2,
        alt: "Свайное поле",
      },
      {
        url: foundation_3,
        alt: "Свайное поле",
      },
      {
        url: foundation_4,
        alt: "Свайное поле",
      },
      {
        url: foundation_5,
        alt: "Свайное поле",
      },
      {
        url: foundation_6,
        alt: "Свайное поле",
      },
      {
        url: foundation_7,
        alt: "Свайное поле",
      },
      {
        url: foundation_8,
        alt: "Свайное поле",
      },
    ],
  },
  {
    url: img_work_5,
    title: "Забор из штакетника",
    work: [
      {
        url: img_work_5,
        alt: "Забор из штакетника",
      },
      {
        url: fence_1,
        alt: "Забор из штакетника",
      },
      {
        url: fence_2,
        alt: "Забор из штакетника",
      },
      {
        url: fence_3,
        alt: "Забор из штакетника",
      },
      {
        url: fence_4,
        alt: "Забор из штакетника",
      },
      {
        url: fence_5,
        alt: "Забор из штакетника",
      },
      {
        url: fence_6,
        alt: "Забор из штакетника",
      },
    ],
  },
  {
    url: img_work_4,
    title: "Уличное освещение",
    work: [
      {
        url: img_work_4,
        alt: "Уличное освещение",
      },
      {
        url: electricity_1,
        alt: "Уличное освещение",
      },
    ],
  },
  {
    url: img_work_2,
    title: "Заезд на участок",
    work: [
      {
        url: img_work_2,
        alt: "Заезд на участок",
      },
    ],
  },
  // {
  //   url: img_work_3,
  //   title: "Дорожки, посадка и выравнивание",
  // },

  {
    url: img_work_6,
    title: "Забор из гиттера",
    work: [
      {
        url: img_work_6,
        alt: "Забор из гиттера",
      },
      {
        url: gitter_1,
        alt: "Забор из гиттера",
      },
    ],
  },

  {
    url: borders_1,
    title: "Вынос границ",
    work: [
      {
        url: borders_1,
        alt: "Вынос границ",
      },
    ],
  },
  {
    url: img_work_8,
    title: "Расчистка участка",
    work: [
      {
        url: img_work_8,
        alt: "Расчистка участка",
      },
    ],
  },
];
const dataBisService = [
  {
    urlImg: "url(/images/globalServices/services-1+.webp)",
    title: "Септик",
    price: [{ text: "Обслуживание" }, { text: "Консервация" }, { text: "Ремонт" }, { text: "Диагностика" }],
    routePath: ROUTES_PATHS.SERVICE,
  },
  {
    urlImg: "url(/images/waterPage/bis-service-2+.webp)",
    title: "Бойлер",
    price: [{ text: "Обслуживание" }, { text: "Диагностика" }, { text: "Замена тена" }, { text: "Чистка от накипи" }],
    routePath: ROUTES_PATHS.SERVICE,
  },
  {
    urlImg: "url(/images/waterPage/bis-service-1+.webp)",
    title: "Вододоочистка",
    price: [{ text: "Замена картриджей" }],
    routePath: ROUTES_PATHS.SERVICE,
  },
  {
    urlImg: "url(/images/waterPage/water-6@0.5x.webp)",
    title: "Водоподготовка",
    price: [{ text: "Анализ воды" }, { text: "Обслуживание" }, { text: "Ремонт" }, { text: "Магистральный фильтр" }, { text: "..." }],
    routePath: ROUTES_PATHS.SERVICE,
  },
  {
    urlImg: "url(/images/globalServices/sticker.png)",
    title: "Водоснабжение",
    price: [
      { text: "Замена насоса" },
      { text: "Устранение течей" },
      { text: "Греющий кабель" },
      { text: "Утепление труб" },
      { text: "..." },
    ],
    routePath: ROUTES_PATHS.SERVICE,
  },
  {
    urlImg: "",
    title: "Уборка участка",
    price: [{ text: "Вывоз мусора" }, { text: "Уборка крыши" }, { text: "Чистка террасы" }, { text: "..." }],
    routePath: ROUTES_PATHS.SERVICE,
  },
  {
    urlImg: "",
    title: "Генераторы",
    price: [{ text: "ТО и сервис" }],
    routePath: ROUTES_PATHS.SERVICE,
  },
  {
    urlImg: "",
    title: "Газон",
    price: [{ text: "Стрижка" }, { text: "Аэрация" }, { text: "Восстановление" }],
    routePath: ROUTES_PATHS.SERVICE,
  },
  {
    urlImg: "",
    title: "Водопровод",
    price: [{ text: "Разморозка" }],
    routePath: ROUTES_PATHS.SERVICE,
  },
];

function visibleForm() {
  if (!feedbackForm.active) {
    feedbackForm.active = true;
    toggleBodyScroll(true);
  } else {
    feedbackForm.active = false;
    toggleBodyScroll(false);
  }
}
function toggleBodyScroll(lock) {
  // TODO: Использовать после того как будет реализована форма обратной связи
  document.body.style.overflow = lock ? "hidden" : "";
  document.getElementById("nav__button").style.zIndex = lock ? "-1" : "";
  document.getElementById("nav__button").style.overflow = lock ? "hidden" : "";
}
const feedbackForm = reactive({
  // Не используется
  //TODO: Открывать форму при нажатии кнопки "Обсудить задачу"
  active: false, // Открыта ли форма обратной связи
});
</script>

<template>
  <Banner
    style="white-space: pre-line"
    bannerText="Инженерные коммуникации 
  и благоустройство участка"
    :bannerPrice="bannerPrice"
    @isVisible="visibleForm()"
    stikers="true"
  />
  <Form v-show="feedbackForm.active" @isVisible="visibleForm()" />
  <OurServices :dataServices="dataServices" :dopServices="dopServices" title="Наши услуги" />
  <!-- <ServiceSlider /> -->
  <BisService title="БИС Сервис" :data="dataBisService" />
  <WorksSlider title="Наши работы" :data="dataWork" />
  <WorkOrder :data="dataOrder" title="Почему выбирают нас" />
  <Partners />
  <AboutUs />
  <Commands />
  <FeedBackForm title="Оставьте заявку" id="GlobalForm" />
</template>
