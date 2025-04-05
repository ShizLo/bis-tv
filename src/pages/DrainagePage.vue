<script setup>
import { reactive, defineAsyncComponent } from "vue";
import BannerSlider from "../components/Banner.vue";
const OurServices = defineAsyncComponent(() => import("../components/OurServices.vue"));
const WorkOrder = defineAsyncComponent(() => import("../components/WorkOrder.vue"));
const PopularServices = defineAsyncComponent(() => import("../components/PopularServices.vue"));
const FeedBackForm = defineAsyncComponent(() => import("../components/FeedBackForm.vue"));
const DialogFeedBack = defineAsyncComponent(() => import("../components/Form/DialogFeedBack.vue"));
//<Импорт картинок блок наши услуги>================================================================================
// import img_service_1 from "";
import img_service_2 from "../assets/images/drainagePage/services-1.webp";
import img_service_3 from "../assets/images/drainagePage/services-3.webp";
import img_service_4 from "../assets/images/drainagePage/services-4.webp";
import img_service_5 from "../assets/images/drainagePage/services-5.webp";
// import img_service_6 from "";
//</Импорт картинок>===============================================================================

const bannerPrice = [
  {
    url: "/images/drainagePage/banner-1.webp",
    price: "от 80 000 руб.",
    name: "Обустройство дренажа",
  },
];
const dataServices = [
  [
    [
      {
        class: "services__row-item-big",
        title: "Cхема с уклонами и высотными отметками",
        price: "от 10 000 руб.",
        pathImg: "",
        hoverColors: "rgb(170, 214, 199)",
      },
    ],
    [
      {
        class: "services__row-item-sm",
        title: "Монтаж ливневой канализации",
        price: "от 50 000 руб.",
        pathImg: img_service_2,
        hoverColors: "rgb(204, 209, 255)",
      },
      {
        class: "services__row-item-sm",
        title: "Видеоинспекция ливневой канализации",
        price: "от 6 000 руб.",
        pathImg: img_service_3,
        hoverColors: "rgb(204, 209, 255)",
      },
    ],
  ],
  [
    [
      {
        class: "services__row-item-sm",
        title: "Обустройство дренажа",
        price: "от 80 000 руб.",
        pathImg: img_service_4,
        hoverColors: "rgb(255, 229, 204)",
      },
      {
        class: "services__row-item-sm",
        title: "Монтаж дренажных насосов",
        price: "",
        pathImg: img_service_5,
        hoverColors: "rgb(243, 253, 180)",
      },
    ],
    [
      {
        class: "services__row-item-big",
        title: "Прочистка дренажа, ливневой канализации модернизация и реконструкция",
        price: "",
        pathImg: "",
        hoverColors: "rgb(255, 229, 204)",
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
];
const feedBackData = [
  "Схема с уклонами",
  "Обустройство дренажа",
  "Монтаж дренажных насосов",
  "Ливневая канализация",
  "Видеоинспекция",
  "Прочистка дренажа",
  "Прочистка лив. канализации",
  "Нет в списке",
];

function visibleForm() {
  if (!feedbackForm.active) {
    feedbackForm.active = true;
  } else {
    feedbackForm.active = false;
  }
}
const feedbackForm = reactive({
  active: false, // Открыта ли форма обратной связи
});
</script>

<template>
  <DialogFeedBack @isVisible="visibleForm()" v-if="feedbackForm.active" :services="feedBackData" />
  <BannerSlider
    style="white-space: pre-line"
    bannerText="Ливневые канализации 
и дренаж участка"
    bannerDescription="Сбор и отвод чистых вод от дренажных, водосточных систем с кровли и террасс, отведение очищенных вод из станции биологической очистки. Устройство ливневой канализации позволяет отвести поверхностные и грунтовые воды в общую систему дренажа (канавы, поселковая канализация) максимально эффективным и эстетичным образом. На низких участках возможно обустройство накопительного колодца и принудительный подъем и выброс воды дренажными насосами."
    :bannerPrice="bannerPrice"
    @isVisible="visibleForm()"
  />
  <OurServices @isVisible="visibleForm()" :dataServices="dataServices" title="Наши услуги" />
  <WorkOrder :data="dataOrder" title="Как мы работаем" />
  <PopularServices title="Популярные услуги" />
  <FeedBackForm title="Оставьте заявку" id="GlobalForm" />
</template>

<style lang="scss" scoped></style>
