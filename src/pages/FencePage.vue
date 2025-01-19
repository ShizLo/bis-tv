<template>
  <BannerSlider
    bannerText="Заборы и ограждения"
    bannerDescription="Забор нужен для защиты вашего дома от посторонних, а также выделить и огородить четкие границы вашей территории.
Устанавливаем заборы на винтовых сваях, что обеспечивает длительный срок службы."
    :bannerPrice="bannerPrice"
  />
  <LocalService serviceTitle="Заборы и ограждения" :servicePrice="servicePrice" />
  <WorkOrder :data="dataOrder" />
  <GlobalForm id="GlobalForm" />
</template>

<script>
import BannerSlider from "../components/Banner.vue";
import LocalService from "../components/LocalService.vue";
import WorkOrder from "../components/WorkOrder.vue";
import GlobalForm from "../components/Form/GlobalForm.vue";

export default {
  name: "FenceView",
  components: {
    BannerSlider,
    LocalService,
    WorkOrder,
    GlobalForm,
  },

  setup() {
    return {};
  },
  data: () => ({
    bannerPrice: [
      // https://www.youtube.com/watch?v=800Rb0IbLtk
      {
        url: "/images/fence/banner-1.jpg",
        price: "от 8 650 за м.пог",
        name: "Забор из профлиста",
      },
      {
        url: "/images/fence/banner-2+.jpeg",
        price: "от 7 500 за м.пог",
        name: "Забор из металлического штакетника",
      },
      {
        url: "/images/fence/banner-3++.jpg",
        price: "от 8 000 за м.пог",
        name: "Забор из деревянного штакетника",
      },
      {
        url: "/images/fence/banner-4.jpg",
        price: "от 5350 за м.пог",
        name: "Забор из сетки гиттер",
      },
      {
        url: "/images/fence/banner-5.jpg",
        price: "от 60 000 руб.",
        name: "Установка автоматики",
      },
      {
        url: "/images/fence/banner-6.jpg",
        price: "от 6000 за м.пог",
        name: "Забор из бруска",
      },
    ],
    servicePrice: [
      { urlImg: "url(/images/fence/services-1.png)", price: "от 8650 м.пог", name: "Забор из профлиста" },
      { urlImg: "url(/images/fence/services-2.png)", price: "от 7500 м.пог", name: "Забор из металлического штакетника" },
      { urlImg: "url(/images/fence/services-3.png)", price: "от 8000 м.пог", name: "Забор из деревянного штакетника" },
      { urlImg: "url(/images/fence/services-4.png)", price: "от 5350 м.пог", name: "Забор из сетки гиттер (3D сетка)" },
      { urlImg: "url(/images/fence/services-5+++++.png)", price: "от 3050 м.пог", name: "Забор из сетки рабица" },
      { urlImg: "url(/images/fence/services-6.png)", price: "от 6000 м.пог", name: "Забор и оргаждения из бруска" },
    ],
    dataOrder: [
      {
        urlImg: "/icons/workOrder/bubbles4.svg",
        title: "Заявка",
        text: "Оставьте заявку онлайн на нашем сайте, напишите нам в мессенджер или позвоните по телефону. Наш менеджер свяжется с Вами в течение нескольких минут и ответит на все Ваши вопросы.",
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
        text: "Мы доставляем и монтируем Ваш заказ в удобное для Вас время. Наша команда профессиональных монтажников гарантирует качественный монтаж и безупречную работу оборудования.",
      },
    ],
  }),
};
</script>
<style lang="scss" scoped></style>
