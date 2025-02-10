<script setup>
import BannerSlider from "../components/Banner.vue";
import WorkOrder from "../components/WorkOrder.vue";
import OurServices from "../components/OurServices.vue";
import PopularServices from "../components/PopularServices.vue";
import FeedBackForm from "../components/FeedBackForm.vue";

//<Импорт картинок блок наши услуги>================================================================================
import img_service_1 from "../assets/images/electricityPage/services-1.webp";
import img_service_2 from "../assets/images/electricityPage/services-2.webp";
import img_service_3 from "../assets/images/electricityPage/services-3.webp";
import img_service_4 from "../assets/images/electricityPage/services-4.webp";
import img_service_5 from "../assets/images/electricityPage/services-6.webp";
import img_service_6 from "../assets/images/electricityPage/services-5.webp";
//</Импорт картинок>===============================================================================

const bannerPrice = [
  {
    url: "/images/electricityPage/banner-3+.jpg",
    price: "от 15 000 руб",
    name: "Монтаж уличного освещения",
  },
  // {
  //   url: "",
  //   // url: "/images/fence/banner-2+.jpeg",
  //   price: "от 25 000 руб",
  //   name: "Проектирование электросетей",
  // },
  // {
  //   url: "",
  //   price: "",
  //   name: "Сборка электрощитков",
  // },
  {
    url: "/images/electricityPage/banner-4.jpg",
    price: "от 25 000 руб.",
    name: "Монтаж опоры/трубостойки",
  },
  {
    url: "/images/electricityPage/banner-5.jpg",
    price: "от 150 000 руб.",
    name: "Установка стабилизаторов",
  },
  {
    url: "/images/electricityPage/banner-6.jpg",
    price: "от 32 000 руб.",
    name: "Монтаж щита и воздушной линии",
  },
];

const dataServices = [
  [
    [
      {
        class: "services__row-item-big",
        title: "Проектирование электросетей",
        price: "от 25 000 руб.",
        pathImg: img_service_1,
        hoverColors: "rgb(243, 253, 180)",
      },
    ],
    [
      {
        class: "services__row-item-sm",
        title: "Мотаж опоры трубостойки",
        price: "",
        pathImg: img_service_2,
        hoverColors: "rgb(243, 253, 180)",
      },
      {
        class: "services__row-item-sm",
        title: "Монтаж приборов",
        price: "",
        pathImg: img_service_3,
        hoverColors: "rgb(243, 253, 180)",
      },
    ],
  ],
  [
    [
      {
        class: "services__row-item-sm",
        title: "Установка стабилизаторов",
        price: "от 180 000 руб.",
        pathImg: img_service_4,
        hoverColors: "rgb(243, 253, 180)",
      },
      {
        class: "services__row-item-sm",
        title: "Монтаж уличного освещения",
        price: "от 15 000 руб.",
        pathImg: img_service_6,
        hoverColors: "rgb(243, 253, 180)",
      },
    ],
    [
      {
        class: "services__row-item-big",
        title: "Монтаж щита и воздушной линии",
        price: "от 32 000 руб.",
        pathImg: img_service_5,
        hoverColors: "rgb(243, 253, 180)",
      },
    ],
  ],
];
const dataOrder = [
  {
    urlImg: "/icons/workOrder/bubbles4.svg",
    title: "Заявка",
    text: "Оставьте заявку онлайн на нашем сайте, напишите нам в мессенджер или позвоните по телефону. Наш менеджер свяжется с Вами в течении нескольких минут.",
  },
  {
    urlImg: "/icons/workOrder/calculator.svg",
    title: "Пробное бурение, сметы",
    text: "Инженер делает выезд (по необходимости) для замеров и обсуждения работ (выезд платный). Подготавливаем проект и/или смету по вашей заявке.",
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
</script>
<template>
  <BannerSlider
    style="white-space: pre-line"
    bannerText="Электромонтажные работы"
    bannerDescription="В загородных домовладениях наравне с подведением коммуникаций требуется и граммотный монтаж электросетей приборов и прочих установок на участке и в домах. Мы предлагаем полный спектр услуг по электромонтажу: 
    - Проектирование
  - Монтаж светильников (садовых, уличных, внутри помещений)
  - Монтаж электрощитов, прокладка магистралей
  - Установка опор и трубостоек, монтаж воздушных линий
  - Установка стабилизаторов напряжения
  - Установка приборов (выключатели, розетки, переключатели...)"
    :bannerPrice="bannerPrice"
  />
  <OurServices :dataServices="dataServices" title="Услуги по электромонтажу" />
  <WorkOrder :data="dataOrder" title="Как мы работаем" />
  <PopularServices title="Популярные услуги" />
  <FeedBackForm title="Оставьте заявку" id="GlobalForm" />
</template>

<style lang="scss" scoped></style>
