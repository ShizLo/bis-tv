<script setup>
import { defineAsyncComponent } from "vue";
import { ROUTES_PATHS } from "../../constants";
const SeptikServices = defineAsyncComponent(() => import("./SeptikServices.vue"));
const SeptikSlider = defineAsyncComponent(() => import("./SeptikSlider.vue"));
const BannerFeedBack = defineAsyncComponent(() => import("./BannerFeedBack.vue"));
const FeedBackForm = defineAsyncComponent(() => import("../../components/FeedBackForm.vue"));
const VariantServiceSlider = defineAsyncComponent(() => import("./VariantServiceSlider.vue"));
const WorksSlider = defineAsyncComponent(() => import("../../components/WorksSlider.vue"));
const PriceExpansion = defineAsyncComponent(() => import("./PriceExpansion.vue"));

//<Импорт картинок блок "Наши услуги">================================================================================
import img_service_3 from "../../assets/images/homePage/bis-1.webp";
import img_service_4 from "../../assets/images/homePage/bis-2.webp";
//</Импорт картинок>===============================================================================

//<Импорт картинок блок "Наши работы">================================================================================
import img_work_1 from "../../assets/images/workPhotoService/septik/2.jpg";
import img_work_2 from "../../assets/images/workPhotoService/septik/1.jpg";
import img_work_3 from "../../assets/images/workPhotoService/septik/3.jpg";
import img_work_4 from "../../assets/images/workPhotoService/septik/4.jpg";
import img_work_5 from "../../assets/images/workPhotoService/septik/5.jpg";

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
        title: "Базовое обслуживание",
        price: "От 6 500 руб.",
        pathImg: img_service_3,
        hoverColors: "rgb(170, 214, 199)",
        content: [
          {
            text: "Откачка отработанного материала",
          },
          {
            text: "Чистка узлов и переливов",
          },
          {
            text: "Чистка камер септика",
          },
          {
            text: "Обратная сборка и установка",
          },
          {
            text: "Полная проверка работы септика",
          },
          {
            text: "Выезд мастера",
          },
        ],
      },
    ],
  ],
  [
    [
      {
        class: "services__row-item-big",
        title: "Консервация",
        price: "От 6 500 руб.",
        pathImg: img_service_4,
        hoverColors: "rgb(255, 229, 204)",
        content: [
          {
            text: "Полная проверка работы септика",
          },
          {
            text: "Изъятие оборудования из станции",
          },
          {
            text: "Обслуживание септика",
          },
          {
            text: "Выезд мастера",
          },
        ],
      },
    ],
  ],
];
const dataOrder = [
  {
    urlImg: "/icons/homePage/spinner9.svg",
    title: "Обсуживание",
    text: "Регулярное обслуживание позволяет предотвратить аварии, продлить срок службы оборудования и обеспечить комфортное проживание в загородном доме. Рекомендуем проводить его не реже 1-2 раз в год.",
  },
  {
    urlImg: "/icons/homePage/checkmark.svg",
    title: "Консервация",
    text: "Подготовим системы к длительному простою для защиты оборудования и коммуникаций вызванных низкими температурами, коррозией или другими внешними факторами.",
  },
  {
    urlImg: "/icons/waterPage/hammer.svg",
    title: "Ремонт",
    text: "Восстановим работоспособность систем, которые вышли из строя или требующие модернизации.",
  },
  {
    urlImg: "/icons/homePage/cogs.svg",
    title: "Диагностика",
    text: "Оценим состояние всех систем и выявим потенциальные проблемы. Проводится как в профилактических целях, так и перед ремонтом, консервацией или после длительного простоя.",
  },
];
const dataBisService = [
  {
    urlImg: "url(/images/globalServices/services-1+.webp)",
    title: "Замена компрессора",
    price: [{ text: "Замена компрессора" }, { text: "Ремонт" }, { text: "Разморозка труб" }, { text: "Откачка" }, { text: "..." }],
    // routePath: ROUTES_PATHS.HOME,
  },
  {
    urlImg: "url(/images/waterPage/bis-service-2+.webp)",
    title: "Бойлер",
    price: [{ text: "Диагностика" }, { text: "Обслуживание" }],
    // routePath: ROUTES_PATHS.FENCE,
  },
  {
    urlImg: "url(/images/waterPage/bis-service-1+.webp)",
    title: "Вододоочистка",
    price: [{ text: "Замена картриджей" }],
    // routePath: ROUTES_PATHS.FAUNDATION,
  },
  {
    urlImg: "url(/images/waterPage/water-6@0.5x.webp)",
    title: "Водоподготовка",
    price: [{ text: "Анализ воды" }, { text: "Обслуживание" }, { text: "Ремонт" }, { text: "Магистральный фильтр" }, { text: "..." }],
    // routePath: ROUTES_PATHS.WATER,
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
    // routePath: ROUTES_PATHS.WATER,
  },
  {
    urlImg: "",
    title: "Уборка участка",
    price: [{ text: "Вывоз мусора" }, { text: "Уборка крыши" }, { text: "Чистка террасы" }, { text: "..." }],
    // routePath: ROUTES_PATHS.HOME,
  },
  {
    urlImg: "",
    title: "Генераторы",
    price: [{ text: "ТО и сервис" }],
    // routePath: ROUTES_PATHS.ELECTRICITY,
  },
  {
    urlImg: "",
    title: "Газон",
    price: [{ text: "Стрижка" }, { text: "Аэрация" }, { text: "Восстановление" }],
    // routePath: ROUTES_PATHS.HOME,
  },
  {
    urlImg: "",
    title: "Водопровод",
    price: [{ text: "Разморозка" }],
    // routePath: ROUTES_PATHS.HOME,
  },
];
const dataWork = [
  {
    url: img_work_1,
    title: "",
    work: [
      {
        url: img_work_1,
        alt: "Обслуживание септика",
      },
    ],
  },
  {
    url: img_work_2,
    title: "",
    work: [
      {
        url: img_work_2,
        alt: "Обслуживание септика",
      },
    ],
  },
  {
    url: img_work_3,
    title: "",
    work: [
      {
        url: img_work_3,
        alt: "Обслуживание септика",
      },
    ],
  },
  {
    url: img_work_4,
    title: "",
    work: [
      {
        url: img_work_4,
        alt: "Обслуживание септика",
      },
    ],
  },
  {
    url: img_work_5,
    title: "",
    work: [
      {
        url: img_work_5,
        alt: "Обслуживание септика",
      },
    ],
  },
];
</script>

<template>
  <BannerFeedBack />
  <SeptikServices title="Наш спектр услуг" :dataServices="dataServices" />
  <SeptikSlider />
  <VariantServiceSlider title="Варианты обслуживания" />
  <WorksSlider title="Наши работы" :data="dataWork" />
  <PriceExpansion></PriceExpansion>
  <FeedBackForm title="Оставьте заявку" id="GlobalForm" />
</template>

<style lang="scss" scoped></style>
