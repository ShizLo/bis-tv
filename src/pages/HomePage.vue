<script setup>
import { reactive, onMounted } from "vue";
import { defineAsyncComponent } from "vue";
import { ROUTES_PATHS } from "../constants";
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
    // Для септика (первый элемент)
    state.dataServices[0][0][0].price = state.price[0].price;
    // Фундамент
    state.dataServices[1][0][0].price = state.price[1].price;
    // Электромонтаж
    state.dataServices[1][0][1].price = state.price[2].price;
    // Водоснабжение
    state.dataServices[0][1][0].price = state.price[3].price;
    // Заборы
    state.dataServices[0][1][1].price = state.price[4].price;
    // Проект участка
    state.dataServices[1][1][0].price = state.price[5].price;
    //<Банер>================================================================================
    //Благоустройство
    state.bannerPrice[0].price = state.price[6].price;
    //Заборы
    state.bannerPrice[1].price = state.price[4].price;
    //Свайное поле
    state.bannerPrice[2].price = state.price[1].price;
    //Откатные ворота
    state.bannerPrice[3].price = state.price[7].price;
    //Парковка
    state.bannerPrice[4].price = state.price[8].price;
    //Водоподготовка
    state.bannerPrice[5].price = state.price[9].price;
    //Септик под ключ
    state.bannerPrice[6].price = state.price[0].price;
    //</Банер>===============================================================================
    //<Дополнительные услуги>================================================================================
    // Благоустройство
    state.dopServices[0][0][0].price = state.price[6].price;
    // Обустройство дренажа
    state.dopServices[1][0][0].price = state.price[12].price;
    // Обустройство колодца
    state.dopServices[1][0][1].price = state.price[13].price;
    // Бурение скважин
    state.dopServices[0][1][0].price = state.price[10].price;
    // Ливневка
    state.dopServices[0][1][1].price = state.price[11].price;
    // Бис сервис
    state.dopServices[1][1][0].price = state.price[14].price;
    //</Дополнительные услуги>===============================================================================
  }
}

const state = reactive({
  price: [],
  dataServices: initializeServicesStructure(),
  bannerPrice: initializeBannerStructure(),
  dopServices: initializeDopServicesStructure(),
  loading: false,
});
function initializeServicesStructure() {
  return [
    [
      [
        {
          class: "services__row-item-big",
          title: "Септик под ключ",
          price: "",
          pathImg: img_service_1,
          hoverColors: "rgb(170, 214, 199)",
          garanty: [
            {
              icon: garantyIcon,
              text: "Гарантия качества",
            },
            {
              icon: keyIcon,
              text: "Работа под ключ",
            },
            {
              icon: montagIcon,
              text: "Быстрый монтаж",
            },
          ],
        },
      ],
      [
        {
          class: "services__row-item-sm",
          title: "Водоснабжение",
          price: "",
          // price: "От 60 000 руб.",
          pathImg: img_service_2,
          hoverColors: "rgb(204, 209, 255)",
          routePath: ROUTES_PATHS.WATER,
        },
        {
          class: "services__row-item-sm",
          title: "Установка заборов",
          price: "",
          // price: "От 90 000 руб.",
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
          price: "",
          // price: "От 100 000 руб.",
          pathImg: img_service_4,
          hoverColors: "rgb(255, 229, 204)",
          routePath: ROUTES_PATHS.FAUNDATION,
        },
        {
          class: "services__row-item-sm",
          title: "Электромонтаж",
          price: "",
          // price: "От 20 000 руб.",
          pathImg: img_service_5,
          hoverColors: "rgb(243, 253, 180)",
          routePath: ROUTES_PATHS.ELECTRICITY,
        },
      ],
      [
        {
          class: "services__row-item-big",
          title: "Проект участка и топографическая съемка",
          price: "",
          // price: "От 50 000 руб.",
          pathImg: img_service_6,
          hoverColors: "rgb(255, 229, 204)",
          routePath: ROUTES_PATHS.TOPOGRAPHY,
          garanty: [
            {
              icon: projectIcon,
              text: "Визуализация проекта",
            },
            {
              icon: keyIcon,
              text: "Работа под ключ",
            },
          ],
        },
      ],
    ],
  ];
}
function initializeBannerStructure() {
  return [
    {
      url: "/images/swiperBanner/banner-1+.jpg",
      price: "",
      name: "Благоустройство",
      routerPath: "",
    },
    {
      url: "/images/swiperBanner/swiper-slide-1.webp",
      price: "",
      name: "Установка забора",
      routerPath: ROUTES_PATHS.FENCE,
    },
    {
      url: "/images/swiperBanner/swiper-slide-2.webp",
      price: "",
      name: "Свайное поле",
      routerPath: ROUTES_PATHS.FAUNDATION,
    },
    {
      url: "/images/swiperBanner/banner-3.jpg",
      price: "",
      name: "Откатные ворота",
      routerPath: ROUTES_PATHS.FENCE,
    },
    {
      url: "/images/swiperBanner/swiper-slide-4.webp",
      price: "",
      name: "Парковка",
      routerPath: "",
    },
    {
      url: "/images/swiperBanner/swiper-slide-5.webp",
      price: "",
      name: "Водоподготовка",
      routerPath: ROUTES_PATHS.WATER,
    },
    {
      url: "/images/swiperBanner/swiper-slide-6.webp",
      price: "",
      name: "Септик под ключ",
      routerPath: "",
    },
  ];
}
function initializeDopServicesStructure() {
  return [
    [
      [
        {
          class: "services__row-item-big",
          title: "Благоустройство",
          price: "",
          pathImg: img_service_12,
          hoverColors: "rgb(170, 214, 199)",
          garanty: [
            {
              icon: contractIcon,
              text: "Гарантия по договору",
            },
            {
              icon: projectIcon,
              text: "Визуализация проекта",
            },
            {
              icon: keyIcon,
              text: "Работа под ключ",
            },
          ],
        },
      ],
      [
        {
          class: "services__row-item-sm",
          title: "Бурение скважин",
          price: "",
          pathImg: img_service_7,
          hoverColors: "rgb(204, 209, 255)",
        },
        {
          class: "services__row-item-sm",
          title: "Ливневка",
          price: "",
          pathImg: img_service_8,
          hoverColors: "rgb(255, 229, 204)",
          routePath: ROUTES_PATHS.DRAINAGE,
        },
      ],
    ],
    [
      [
        {
          class: "services__row-item-sm",
          title: "Обустройство дренажа",
          price: "",
          pathImg: img_service_9,
          hoverColors: "rgb(255, 229, 204)",
          routePath: ROUTES_PATHS.DRAINAGE,
        },
        {
          class: "services__row-item-sm",
          title: "Обустройство колодца",
          price: "",
          pathImg: img_service_10,
          hoverColors: "rgb(243, 253, 180)",
          routePath: ROUTES_PATHS.WATER,
        },
      ],
      [
        {
          class: "services__row-item-big",
          title: "БИС сервис",
          price: "",
          pathImg: img_service_11,
          hoverColors: "rgb(255, 229, 204)",
          routePath: ROUTES_PATHS.SERVICE,
          garanty: [
            {
              icon: garantyIcon,
              text: "Гарантия качества",
            },
            {
              icon: likeIcon,
              text: "Лучшие мастера",
            },
            {
              icon: carIcon,
              text: "Быстрый выезд",
            },
          ],
        },
      ],
    ],
  ];
}
//<Импорт компонентов>================================================================================
// const Banner = defineAsyncComponent(() => import("../components/Banner.vue"));
import Banner from "../components/Banner.vue";
import OurServices from "../components/OurServices.vue";
// const OurServices = defineAsyncComponent(() => import("../components/OurServices.vue"));
const BisService = defineAsyncComponent(() => import("../components/BisService.vue"));
const WorksSlider = defineAsyncComponent(() => import("../components/WorksSlider.vue"));
const WorkOrder = defineAsyncComponent(() => import("../components/WorkOrder.vue"));
const Partners = defineAsyncComponent(() => import("../components/Partners.vue"));
const AboutUs = defineAsyncComponent(() => import("../components/AboutUs.vue"));
const Commands = defineAsyncComponent(() => import("../components/Commands.vue"));
const FeedBackForm = defineAsyncComponent(() => import("../components/FeedBackForm.vue"));
const DialogFeedBack = defineAsyncComponent(() => import("../components/Form/DialogFeedBack.vue"));
//</Импорт компонентов>===============================================================================

//<Импорт картинок блок "Наши услуги">================================================================================
import img_service_1 from "../assets/images/homePage/services-1.webp";
import img_service_2 from "../assets/images/homePage/services-2.webp";
import img_service_3 from "../assets/images/homePage/services-3.webp";
import img_service_4 from "../assets/images/homePage/services-4.webp";
import img_service_5 from "../assets/images/homePage/services-5.webp";
import img_service_6 from "../assets/images/homePage/services-6.png";
import img_service_7 from "../assets/images/waterPage/services-2.webp";
import img_service_8 from "../assets/images/drainagePage/services-1.webp";
import img_service_9 from "../assets/images/drainagePage/services-4.webp";
import img_service_10 from "../assets/images/waterPage/services-5.webp";
import img_service_11 from "../assets/images/homePage/services-11.png";
import img_service_12 from "../assets/images/homePage/services-12+.webp";

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

import garantyIcon from "../assets/icons/Icons_BIS/SVG/garantyQuolity.svg";
import keyIcon from "../assets/icons/Icons_BIS/SVG/workKey.svg";
import montagIcon from "../assets/icons/Icons_BIS/SVG/montag.svg";
import projectIcon from "../assets/icons/Icons_BIS/SVG/project.svg";
import carIcon from "../assets/icons/Icons_BIS/SVG/car.svg";
import likeIcon from "../assets/icons/Icons_BIS/SVG/like.svg";
import contractIcon from "../assets/icons/Icons_BIS/SVG/contract.svg";

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
    urlImg: "/icons/homePage/garantyQuolity.svg",
    title: "Гарантия качества",
    text: "Гарантируем качество наших работ и оперативно реагируем в случае когда, что-то пошло не так. ",
  },
  {
    urlImg: "/icons/homePage/montag+.svg",
    title: "Служба сервиса",
    text: "Если заказываете сервис у нас, то помимо сезонного обслуживания получаете и расширенную* гарантию. После монтажа оборудования наш специалист сам будет отслеживать и напоминать вам о необходимости провести ТО.",
  },
  {
    urlImg: "/icons/homePage/smeta.svg",
    title: "Прозрачная смета",
    text: "После первичной встречи на участке составляется визуализация вашего участка с привязками и размерами. Это позволяет точно составить подробную смету. Цена в большинстве случаев фиксируется или в смете указаны пункты, корректируемые по факту.",
  },
  // {
  //   urlImg: "/icons/homePage/spinner9.svg",
  //   title: "Делаем полный цикл",
  //   text: "Мы беремся за реализацию всего цикла от проектирования до организации газона. Большой набор услуг позволяет закрыть большую часть потребностей в 'одном окне', что позволяет не тратить время на согласования, коллаборации и экономит средства.",
  // },
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
    urlImg: "",
    title: "Уборка участка",
    // price: [{ text: "Вывоз мусора" }, { text: "Уборка крыши" }, { text: "Чистка террасы" }, { text: "..." }],
    price: [{ text: "Подробнее" }],
    routePath: ROUTES_PATHS.SERVICE,
  },
  {
    urlImg: "",
    title: "Генераторы",
    // price: [{ text: "ТО и сервис" }],
    price: [{ text: "Подробнее" }],
    routePath: ROUTES_PATHS.SERVICE,
  },

  {
    urlImg: "url(/images/waterPage/water-6@0.5x.webp)",
    title: "Водоподготовка",
    // price: [{ text: "Анализ воды" }, { text: "Обслуживание" }, { text: "Ремонт" }, { text: "Магистральный фильтр" }, { text: "..." }],
    price: [{ text: "Подробнее" }],
    routePath: ROUTES_PATHS.SERVICE,
  },

  {
    urlImg: "url(/images/waterPage/bis-service-1+.webp)",
    title: "Водоочистка",
    // price: [{ text: "Замена картриджей" }],
    price: [{ text: "Подробнее" }],
    routePath: ROUTES_PATHS.SERVICE,
  },
  {
    urlImg: "url(/images/globalServices/services-1+.webp)",
    title: "Септики",
    // price: [{ text: "Обслуживание" }, { text: "Консервация" }, { text: "Ремонт" }, { text: "Диагностика" }],
    price: [{ text: "Подробнее" }],
    routePath: ROUTES_PATHS.SERVICE,
  },
  {
    urlImg: "url(/images/waterPage/bis-service-2+.webp)",
    title: "Бойлеры",
    // price: [{ text: "Обслуживание" }, { text: "Диагностика" }, { text: "Замена тена" }, { text: "Чистка от накипи" }],
    price: [{ text: "Подробнее" }],
    routePath: ROUTES_PATHS.SERVICE,
  },
  {
    urlImg: "url(/images/globalServices/sticker.png)",
    title: "Водоснабжение",
    price: [{ text: "Подробнее" }],
    routePath: ROUTES_PATHS.SERVICE,
  },
  {
    urlImg: "",
    title: "Газон",
    // price: [{ text: "Стрижка" }, { text: "Аэрация" }, { text: "Восстановление" }],
    price: [{ text: "Подробнее" }],
    routePath: ROUTES_PATHS.SERVICE,
  },
  {
    urlImg: "",
    title: "Водопровод",
    // price: [{ text: "Разморозка" }],
    price: [{ text: "Подробнее" }],
    routePath: ROUTES_PATHS.SERVICE,
  },
];
const feedBackData = [
  "Проект участка",
  "Свайный фундамент",
  "Септик под ключ",
  "Водоподготовка",
  "Водоснабжение",
  "Дренаж",
  "Электромонтаж",
  "Благоустройство",
  "Заборы",
  "Сервис",
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
  <Banner
    style="white-space: pre-line"
    bannerText="Инженерные коммуникации 
  и благоустройство участка"
    :bannerPrice="state.bannerPrice"
    @isVisible="visibleForm()"
    stikers="true"
  />
  <OurServices @isVisible="visibleForm()" :dataServices="state.dataServices" :dopServices="state.dopServices" title="Наши услуги" />
  <BisService title="БИС Сервис" :data="dataBisService" />
  <WorksSlider :data="dataWork" />
  <WorkOrder :data="dataOrder" title="За что нас ценят" />
  <Partners />
  <AboutUs />
  <Commands />
  <FeedBackForm title="Оставьте заявку" id="GlobalForm" />
</template>
