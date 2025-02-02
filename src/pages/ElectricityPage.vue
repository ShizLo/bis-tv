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

<script>
import BannerSlider from "../components/Banner.vue";
import LocalService from "../components/LocalService.vue";
import WorkOrder from "../components/WorkOrder.vue";
import GlobalForm from "../components/Form/GlobalForm.vue";
import OurServices from "../components/OurServices.vue";
import PopularServices from "../components/PopularServices.vue";
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
    PopularServices,
    FeedBackForm,
  },

  setup() {
    return {};
  },
  data: () => ({
    bannerPrice: [
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
    ],

    dataServices: [
      [
        [
          {
            class: "services__row-item-big",
            title: "Проектирование электросетей",
            price: "от 25 000 руб.",
            pathImg: "url(/images/electricityPage/service-1.webp)",
            hoverColors: "rgb(170, 214, 199)",
          },
        ],
        [
          {
            class: "services__row-item-sm",
            title: "Мотаж опоры трубостойки",
            price: "",
            pathImg: "url(/images/electricityPage/service-2+.webp)",
            hoverColors: "rgb(204, 209, 255)",
          },
          {
            class: "services__row-item-sm",
            title: "Монтаж приборов",
            price: "",
            pathImg: "url(/images/electricityPage/service-3.webp)",
            hoverColors: "rgb(204, 209, 255)",
          },
        ],
      ],
      [
        [
          {
            class: "services__row-item-sm",
            title: "Установка стабилизаторов",
            price: "от 180 000 руб.",
            pathImg: "url(/images/electricityPage/service-4.webp)",
            hoverColors: "rgb(255, 229, 204)",
          },
          {
            class: "services__row-item-sm",
            title: "Монтаж уличного освещения",
            price: "от 15 000 руб.",
            pathImg: "url(/images/electricityPage/service-5.webp)",
            hoverColors: "rgb(243, 253, 180)",
          },
        ],
        [
          {
            class: "services__row-item-big",
            title: "Монтаж щита и воздушной линии",
            price: "от 32 000 руб.",
            pathImg: "url(/images/electricityPage/service-6.webp)",
            hoverColors: "rgb(255, 229, 204)",
          },
        ],
      ],
    ],
    dataOrder: [
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
    ],
  }),
};
</script>
<style lang="scss" scoped></style>
