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
import img_service_5 from "../../assets/images/servicePage/slider/3.png";
import img_service_6 from "../../assets/images/servicePage/slider/5.png";
import img_service_7 from "../../assets/images/servicePage/slider/2.png";
import img_service_8 from "../../assets/images/homePage/work-bis-service-1.webp";
import img_service_9 from "../../assets/images/servicePage/slider/4.png";
//</Импорт картинок>===============================================================================

//<Импорт картинок блок "Наши работы">================================================================================
import img_work_1 from "../../assets/images/workPhotoService/septik/2.jpg";
import img_work_2 from "../../assets/images/workPhotoService/septik/1.jpg";
import img_work_3 from "../../assets/images/workPhotoService/septik/3.jpg";
import img_work_4 from "../../assets/images/workPhotoService/septik/4.jpg";
import img_work_5 from "../../assets/images/workPhotoService/septik/5.jpg";

const dataServices = [
  [
    [
      {
        class: "services__row-item-big",
        title: "Базовое обслуживание",
        price: "от 6 700 руб.",
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
    [
      {
        class: "services__row-item-sm",
        title: "Демонтаж/монтаж насоса",
        price: "от 7 300 руб.",
        pathImg: "",
        hoverColors: "rgb(204, 209, 255)",
      },
      {
        class: "services__row-item-sm",
        title: "Поплавок с заменой",
        price: "от 3 100 руб.",
        pathImg: img_service_5,
        hoverColors: "rgb(204, 209, 255)",
      },
    ],
  ],
  [
    [
      {
        class: "services__row-item-sm",
        title: "Чистка фильтрационного колодца",
        price: "от 1 900 руб.",
        pathImg: "",
        hoverColors: "rgb(204, 209, 255)",
      },
      {
        class: "services__row-item-sm",
        title: "Аварийный выезд",
        price: "от 6 100 руб.",
        pathImg: "",
        hoverColors: "rgb(204, 209, 255)",
      },
    ],
    [
      {
        class: "services__row-item-big",
        title: "Консервация",
        price: "от 1 300 руб.",
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
const dopServices = [
  [
    [
      {
        class: "services__row-item-sm",
        title: "Аварийная сигнализация",
        price: "от 9 500 руб.",
        pathImg: img_service_6,
        hoverColors: "rgb(204, 209, 255)",
      },
      {
        class: "services__row-item-sm",
        title: "Электромагнитный клапан",
        price: "от 7 500 руб.",
        pathImg: img_service_7,
        hoverColors: "rgb(255, 229, 204)",
      },
    ],
    [
      {
        class: "services__row-item-sm",
        title: "Замена аэролифта",
        price: "от 7 500 руб.",
        pathImg: "",
        hoverColors: "rgb(204, 209, 255)",
      },
      {
        class: "services__row-item-sm",
        title: "Ремонт крышки септика",
        price: "от 10 000 руб.",
        pathImg: "",
        hoverColors: "rgb(255, 229, 204)",
      },
    ],
  ],
  [
    [
      {
        class: "services__row-item-sm",
        title: "Замена компрессора",
        price: "от 6 500 руб.",
        pathImg: img_service_8,
        hoverColors: "rgb(255, 229, 204)",
      },
      {
        class: "services__row-item-sm",
        title: "Замена аэратора",
        price: "от 11 000 руб.",
        pathImg: img_service_9,
        hoverColors: "rgb(243, 253, 180)",
      },
    ],
    [
      {
        class: "services__row-item-sm",
        title: "Наращивание горловины",
        price: "от 11 000 руб.",
        pathImg: "",
        hoverColors: "rgb(204, 209, 255)",
      },
      {
        class: "services__row-item-sm",
        title: "Нет вашей услуги?",
        price: "Поможем!",
        pathImg: "",
        hoverColors: "rgb(255, 229, 204)",
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
  <SeptikServices title="Наши услуги" :dataServices="dataServices" :dopServices="dopServices" />
  <!-- <SeptikSlider /> -->
  <VariantServiceSlider title="Варианты обслуживания" />
  <WorksSlider title="Наши работы" :data="dataWork" />
  <PriceExpansion></PriceExpansion>
  <FeedBackForm title="Оставьте заявку" id="GlobalForm" />
</template>

<style lang="scss" scoped></style>
