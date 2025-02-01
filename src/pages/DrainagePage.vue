<template>
  <BannerSlider
    style="white-space: pre-line"
    bannerText="Ливневые канализации 
и дренаж участка"
    bannerDescription="Сбор и отвод чистых вод от дренажных, водосточных систем с кровли и террасс, отведение очищенных вод из станции биологической очистки. Устройство ливневой канализации позволяет отвести поверхностные и грунтовые воды в общую систему дренажа (канавы, поселковая канализация) максимально эффективным и эстетичным образом. На низких участках возможно обустройство накопительного колодца и принудительный подъем и выброс воды дренажными насосами. Позволяет избавиться от проблем, связанных с подтоплением во время весенне-осенних периодов."
    :bannerPrice="bannerPrice"
  />
  <OurServices :dataServices="dataServices" title="Наши услуги" />
  <WorkOrder :data="dataOrder" title="Как мы работаем" />
  <PopularServices title="Популярные услуги" />
  <FeedBackForm title="Закажите установку забора" id="GlobalForm" />
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
        url: "",
        price: "от 7 500 за м.пог",
        name: "Монтаж ливневой канализации",
      },
    ],
    dataServices: [
      [
        [
          {
            class: "services__row-item-big",
            title: "Съемка, анализ прилегающего водоотведения, составление схемы с уклонами и высотными отметками",
            price: "от 10 000 руб.",
            pathImg: "",
            hoverColors: "rgb(170, 214, 199)",
          },
        ],
        [
          {
            class: "services__row-item-sm",
            title: "Монтаж ливневой канализации",
            price: "",
            pathImg: "",
            hoverColors: "rgb(204, 209, 255)",
          },
          {
            class: "services__row-item-sm",
            title: "Видеоинспекция ливневой канализации",
            price: "от 6 000 руб.",
            pathImg: "",
            hoverColors: "rgb(204, 209, 255)",
          },
        ],
      ],
      [
        [
          {
            class: "services__row-item-sm",
            title: "Обустройство дренажа",
            price: "",
            pathImg: "",
            hoverColors: "rgb(255, 229, 204)",
          },
          {
            class: "services__row-item-sm",
            title: "Монтаж дренажных насосов, колодцев для сбора воды",
            price: "",
            pathImg: "",
            hoverColors: "rgb(243, 253, 180)",
          },
        ],
        [
          {
            class: "services__row-item-big",
            title: "Прочистка существующего дренажа, ливневой канализации модернизация и реконструкция",
            price: "",
            pathImg: "",
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
        text: "Доставляем и монтируем заказ в удобное для Вас время. Наша команда гарантирует качественный монтаж и безупречную работу оборудования.",
      },
    ],
  }),
};
</script>
<style lang="scss" scoped></style>
