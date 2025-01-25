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
  <GlobalServices :data="dataGlobalService" title="Популярные услуги" />
  <GlobalForm id="GlobalForm" />
</template>

<script>
import BannerSlider from "../components/Banner.vue";
import LocalService from "../components/LocalService.vue";
import WorkOrder from "../components/WorkOrder.vue";
import GlobalForm from "../components/Form/GlobalForm.vue";
import OurServices from "../components/OurServices.vue";
import GlobalServices from "../components/GlobalServices.vue";
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
  },

  setup() {
    return {};
  },
  data: () => ({
    bannerPrice: [
      {
        url: "/images/foundationPage/slider-1+.jpg",
        price: "от 90 000 руб.",
        name: "Монтаж фундамента под дом",
      },
      {
        url: "/images/foundationPage/slider-2.jpg",
        price: "",
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
    ],
    servicePrice: [
      { urlImg: "", price: "", name: "1" },
      { urlImg: "", price: "", name: "2" },
      { urlImg: "", price: "", name: "3" },
      { urlImg: "", price: "", name: "4" },
      { urlImg: "", price: "", name: "5" },
      { urlImg: "", price: "", name: "6" },
    ],
    dataOrder: [
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
      // {
      //   urlImg: "url(/images/globalServices/services-5.webp)",
      //   title: "Фундамент",
      //   text: "После утверждения сметы мы заключаем договор на выполнение работ. В договоре указываются все условия и сроки выполнения работ.",
      // },
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
    dataServices: [
      [
        [
          {
            class: "services__row-item-big",
            title: "Монтаж фундамента под дом",
            price: "от 90 000 руб.",
            pathImg: "url(/images/foundationPage/service-1.png)",
            hoverColors: "rgb(170, 214, 199)",
          },
        ],
        [
          {
            class: "services__row-item-sm",
            title: "Деревянная обвязка",
            price: "от 80 000 руб.",
            pathImg: "url(/images/foundationPage/service-2.png)",
            hoverColors: "rgb(204, 209, 255)",
          },
          {
            class: "services__row-item-sm",
            title: "Обвязка уголком",
            price: "от 300 р/м.пог",
            pathImg: "url(/images/foundationPage/service-3.png)",
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
            pathImg: "url(/images/foundationPage/service-4.png)",
            hoverColors: "rgb(255, 229, 204)",
          },
          {
            class: "services__row-item-sm",
            title: "Пробное бурение",
            price: "от 6 000 руб.",
            pathImg: "url(/images/foundationPage/service-5.png)",
            hoverColors: "rgb(243, 253, 180)",
          },
        ],
        [
          {
            class: "services__row-item-big",
            title: "Обвязка швеллером",
            price: "от 1 400 р/м.пог",
            pathImg: "url(/images/foundationPage/service-6.png)",
            hoverColors: "rgb(255, 229, 204)",
          },
        ],
      ],
    ],
  }),
};
</script>
<style lang="scss" scoped></style>
