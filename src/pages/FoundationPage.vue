<script setup>
import { reactive, defineAsyncComponent, onMounted } from "vue";
import BannerSlider from "../components/Banner.vue";
import OurServices from "../components/OurServices.vue";
const LocalService = defineAsyncComponent(() => import("../components/LocalService.vue"));
const WorkOrder = defineAsyncComponent(() => import("../components/WorkOrder.vue"));
const FeedBackForm = defineAsyncComponent(() => import("../components/FeedBackForm.vue"));
const PopularServices = defineAsyncComponent(() => import("../components/PopularServices.vue"));
const DialogFeedBack = defineAsyncComponent(() => import("../components/Form/DialogFeedBack.vue"));
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
    //<Основные услуги>================================================================================
    // Монтаж фундамента под дом
    state.dataServices[0][0][0].price = state.price[1].price;
    // Обвязка профтрубой
    state.dataServices[1][0][0].price = state.price[35].price;
    // Пробное бурение
    state.dataServices[1][0][1].price = state.price[36].price;
    // Деревянная обвязка
    state.dataServices[0][1][0].price = state.price[34].price;
    // Обвязка уголком
    state.dataServices[0][1][1].price = state.price[37].price;
    // Обвязка швеллером
    state.dataServices[1][1][0].price = state.price[38].price;
    //</Основные услуги>===============================================================================
    //<Банер>================================================================================
    //Монтаж фундамента под дом
    state.bannerPrice[0].price = state.price[1].price;
    //Деревянная обвязка
    state.bannerPrice[1].price = state.price[34].price;
    //</Банер>===============================================================================
    //<Дополнительные бурут>================================================================================
    //Отсыпка свайного поля
    state.dopServices[0].price = state.price[39].price;
    //Планировка и расчистка участка
    state.dopServices[1].price = state.price[40].price;
    //Ливневка
    state.dopServices[2].price = state.price[11].price;
    //</Дополнительные берут>===============================================================================
  }
}

const state = reactive({
  price: [],
  bannerPrice: initializeBannerStructure(),
  dataServices: initializeServicesStructure(),
  dopServices: initializeDopServicesStructure(),
  loading: false,
});

function initializeBannerStructure() {
  return [
    {
      url: "/images/foundationPage/slider-1+.jpg",
      price: "",
      name: "Монтаж фундамента под дом",
    },
    {
      url: "/images/foundationPage/slider-2.jpg",
      price: "",
      name: "Деревянная обвязка",
    },
  ];
}
function initializeServicesStructure() {
  return [
    [
      [
        {
          class: "services__row-item-big",
          title: "Монтаж фундамента под дом",
          price: "",
          pathImg: img_service_1,
          hoverColors: "rgb(170, 214, 199)",
        },
      ],
      [
        {
          class: "services__row-item-sm",
          title: "Деревянная обвязка",
          price: "",
          pathImg: img_service_2,
          hoverColors: "rgb(204, 209, 255)",
        },
        {
          class: "services__row-item-sm",
          title: "Обвязка уголком",
          price: "",
          pathImg: img_service_3,
          hoverColors: "rgb(204, 209, 255)",
        },
      ],
    ],
    [
      [
        {
          class: "services__row-item-sm",
          title: "Обвязка профтрубой",
          price: "",
          pathImg: img_service_4,
          hoverColors: "rgb(255, 229, 204)",
        },
        {
          class: "services__row-item-sm",
          title: "Пробное бурение",
          price: "",
          pathImg: img_service_5,
          hoverColors: "rgb(243, 253, 180)",
        },
      ],
      [
        {
          class: "services__row-item-big",
          title: "Обвязка швеллером",
          price: "",
          pathImg: img_service_6,
          hoverColors: "rgb(255, 229, 204)",
        },
      ],
    ],
  ];
}
function initializeDopServicesStructure() {
  return [
    { urlImg: "", price: "", name: "Отсыпка свайного поля" },
    { urlImg: "", price: "", name: "Планировка и расчистка участка" },
    { urlImg: "", price: "", name: "Ливневка" },
  ];
}
//<Импорт картинок блок "Наши услуги">================================================================================
import img_service_1 from "../assets/images/foundationPage/services-1.png";
import img_service_2 from "../assets/images/foundationPage/services-2.png";
import img_service_3 from "../assets/images/foundationPage/services-3.png";
import img_service_4 from "../assets/images/foundationPage/services-4.png";
import img_service_5 from "../assets/images/foundationPage/services-5.png";
import img_service_6 from "../assets/images/foundationPage/services-6.png";
//</Импорт картинок>===============================================================================

const dataOrder = [
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
];

const feedBackData = [
  "Монтаж фундамента под дом",
  "Обвязка профтрубой",
  "Пробное бурение",
  "Деревянная обвязка",
  "Обвязка уголком",
  "Обвязка шеллером",
  "Отсыпка свайного поля",
  "Планировка участка",
  "Дренаж и ливневка",
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
    bannerText="Монтаж фундамента на винтовых сваях"
    bannerDescription="Быстрое, надежное и экономичное решение для строительства. Обеспечивает прочность основания и подходит для любых грунтовых условий.
Различное назначение: фундамент для дома, хоз. построек, забора, фундамент под печти или доп оборудование. Везде где требуется обеспечить жесткое статичное основание."
    :bannerPrice="state.bannerPrice"
    @isVisible="visibleForm()"
  />
  <OurServices @isVisible="visibleForm()" :dataServices="state.dataServices" title="Услуги по фундаменту" />

  <WorkOrder :data="dataOrder" title="Как мы работаем" />
  <LocalService serviceTitle="Дополнительно берут" :servicePrice="state.dopServices" />
  <PopularServices title="Популярные услуги" />
  <FeedBackForm title="Оставьте заявку" id="GlobalForm" />
</template>

<style lang="scss" scoped></style>
