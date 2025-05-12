<script setup>
import { reactive, defineAsyncComponent, onMounted } from "vue";
import { useCatalogStore } from "@/stores/modules/catalog.store";
import BannerSlider from "../components/Banner.vue";
import OurServices from "../components/OurServices.vue";
const WorkOrder = defineAsyncComponent(() => import("../components/WorkOrder.vue"));
const PopularServices = defineAsyncComponent(() => import("../components/PopularServices.vue"));
const FeedBackForm = defineAsyncComponent(() => import("../components/FeedBackForm.vue"));
const DialogFeedBack = defineAsyncComponent(() => import("../components/Form/DialogFeedBack.vue"));

const catalogStore = useCatalogStore();

onMounted(async () => {
  await catalogStore.loadCatalog();
  updatePrices();
});

function updatePrices() {
  //<Основные услуги>================================================================================
  // Проектирование электросетей
  state.dataServices[0][0][0].price = catalogStore.getPriceById(45);
  // Установка стабилизаторов
  state.dataServices[1][0][0].price = catalogStore.getPriceById(43);
  // Монтаж уличного освещения
  state.dataServices[1][0][1].price = catalogStore.getPriceById(3);
  // Монтаж опоры трубостойки
  state.dataServices[0][1][0].price = catalogStore.getPriceById(42);
  // Монтаж приборов
  state.dataServices[0][1][1].price = catalogStore.getPriceById(46);
  // Монтаж щита и воздушной линии
  state.dataServices[1][1][0].price = catalogStore.getPriceById(44);
  //</Основные услуги>===============================================================================
  //<Банер>================================================================================
  //Монтаж уличного освещения
  state.bannerPrice[0].price = catalogStore.getPriceById(3);
  //Монтаж опоры/трубостойки
  state.bannerPrice[1].price = catalogStore.getPriceById(42);
  //Установка стабилизаторов
  state.bannerPrice[2].price = catalogStore.getPriceById(43);
  //Монтаж щита и воздушной линии
  state.bannerPrice[3].price = catalogStore.getPriceById(44);
  //</Банер>===============================================================================
}

const state = reactive({
  price: [],
  bannerPrice: initializeBannerStructure(),
  dataServices: initializeServicesStructure(),
  loading: false,
});

function initializeBannerStructure() {
  return [
    {
      url: "/images/electricityPage/banner-3+.jpg",
      price: "",
      name: "Монтаж уличного освещения",
    },
    {
      url: "/images/electricityPage/banner-4.jpg",
      price: "",
      name: "Монтаж опоры/трубостойки",
    },
    {
      url: "/images/electricityPage/banner-5.jpg",
      price: "",
      name: "Установка стабилизаторов",
    },
    {
      url: "/images/electricityPage/banner-6.jpg",
      price: "",
      name: "Монтаж щита и воздушной линии",
    },
  ];
}
function initializeServicesStructure() {
  return [
    [
      [
        {
          class: "services__row-item-big",
          title: "Проектирование электросетей",
          price: "",
          pathImg: img_service_1,
          hoverColors: "rgb(243, 253, 180)",
        },
      ],
      [
        {
          class: "services__row-item-sm",
          title: "Монтаж опоры трубостойки",
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
          price: "",
          pathImg: img_service_4,
          hoverColors: "rgb(243, 253, 180)",
        },
        {
          class: "services__row-item-sm",
          title: "Монтаж уличного освещения",
          price: "",
          pathImg: img_service_6,
          hoverColors: "rgb(243, 253, 180)",
        },
      ],
      [
        {
          class: "services__row-item-big",
          title: "Монтаж щита и воздушной линии",
          price: "",
          pathImg: img_service_5,
          hoverColors: "rgb(243, 253, 180)",
        },
      ],
    ],
  ];
}

//<Импорт картинок блок наши услуги>================================================================================
import img_service_1 from "../assets/images/electricityPage/services-1.webp";
import img_service_2 from "../assets/images/electricityPage/services-2.webp";
import img_service_3 from "../assets/images/electricityPage/services-3.webp";
import img_service_4 from "../assets/images/electricityPage/services-4.webp";
import img_service_5 from "../assets/images/electricityPage/services-6.webp";
import img_service_6 from "../assets/images/electricityPage/services-5.webp";
//</Импорт картинок>===============================================================================

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
const feedBackData = [
  "Проектирование электросетей",
  "Установка стабилизаторов",
  "Монтаж уличного освещения",
  "Монтаж опоры трубостойки",
  "Монтаж приборов",
  "Монтаж щита",
  "Воздушная линия",
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
    bannerText="Электромонтажные работы"
    bannerDescription="В загородных домовладениях наравне с подведением коммуникаций требуется и граммотный монтаж электросетей приборов и прочих установок на участке и в домах. Мы предлагаем полный спектр услуг по электромонтажу: 
    - Проектирование
  - Монтаж светильников (садовых, уличных, внутри помещений)
  - Монтаж электрощитов, прокладка магистралей
  - Установка опор и трубостоек, монтаж воздушных линий
  - Установка стабилизаторов напряжения
  - Установка приборов (выключатели, розетки, переключатели...)"
    :bannerPrice="state.bannerPrice"
    @isVisible="visibleForm()"
  />
  <OurServices @isVisible="visibleForm()" :dataServices="state.dataServices" title="Услуги по электромонтажу" />
  <WorkOrder :data="dataOrder" title="Как мы работаем" />
  <PopularServices title="Популярные услуги" />
  <FeedBackForm title="Оставьте заявку" id="GlobalForm" />
</template>

<style lang="scss" scoped></style>
