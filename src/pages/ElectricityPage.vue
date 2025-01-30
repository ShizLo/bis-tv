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
  <GlobalServices :data="dataGlobalService" title="Популярные услуги" />
  <FeedBackForm title="Оставьте заявку" id="GlobalForm" />
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
        url: "",
        // url: "/images/fence/banner-2+.jpeg",
        price: "от 25 000 руб",
        name: "Проектирование электросетей",
      },
      {
        url: "",
        price: "",
        name: "Сборка электрощитков",
      },
      {
        url: "",
        price: "",
        name: "Монтаж уличного освещения",
      },
      {
        url: "",
        price: "от 25 000 руб.",
        name: "Монтаж опоры/трубостойки",
      },
      {
        url: "",
        price: "",
        name: "Установка стабилизаторов",
      },
      {
        url: "",
        price: "",
        name: "Монтаж приборов",
      },
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
    dataServices: [
      [
        [
          {
            class: "services__row-item-big",
            title: "Проектирование электросетей",
            price: "от 25 000 руб.",
            pathImg: "",
            hoverColors: "rgb(170, 214, 199)",
          },
        ],
        [
          {
            class: "services__row-item-sm",
            title: "Мотаж опоры трубостойки",
            price: "",
            pathImg: "",
            hoverColors: "rgb(204, 209, 255)",
          },
          {
            class: "services__row-item-sm",
            title: "Монтаж приборов",
            price: "",
            pathImg: "",
            hoverColors: "rgb(204, 209, 255)",
          },
        ],
      ],
      [
        [
          {
            class: "services__row-item-sm",
            title: "Установка стабилизаторов",
            price: "",
            pathImg: "",
            hoverColors: "rgb(255, 229, 204)",
          },
          {
            class: "services__row-item-sm",
            title: "Монтаж уличного освещения",
            price: "",
            pathImg: "",
            hoverColors: "rgb(243, 253, 180)",
          },
        ],
        [
          {
            class: "services__row-item-big",
            title: "Монтаж щита и воздушной линии",
            price: "от 32 000 руб.",
            pathImg: "",
            hoverColors: "rgb(255, 229, 204)",
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
      {
        urlImg: "url(/images/globalServices/services-2.png)",
        title: "Установка забора",
        price: "Подробнее",
        routePath: ROUTES_PATHS.FENCE,
      },
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
      // {
      //   urlImg: "url(/images/globalServices/services-8++.webp)",
      //   title: "Электромонтаж",
      //   price: "Подробнее",
      //   routePath: ROUTES_PATHS.HOME,
      // },
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
