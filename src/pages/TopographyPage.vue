<template>
  <BannerSlider
    style="white-space: pre-line"
    bannerText="Топографическая съемка и проектирование"
    bannerDescription="Поиск и закрепление границ вашего участка по координатам Росреестра. Определение границ заказывают перед установкой нового забора, покупкой участка и при спорах с соседями о текущем положении границы."
    :bannerPrice="bannerPrice"
    :desctiption="desctription"
  />
  <OurServices :dataServices="dataServices" title="Наши услуги" />
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
        price: "от 12 000 руб.",
        name: "Топографическая съемка",
      },
      {
        url: "",
        price: "от 6 000 руб.",
        name: "Вынос в натуру границ земельного участка",
      },
      {
        url: "",
        price: "от 6 000 руб.",
        name: "Проектирование и ландшафтный дизайн",
      },
      {
        url: "",
        price: "от 65 000 руб.",
        name: "Эскизный ландшафтный проект",
      },
      {
        url: "",
        price: "от 85 000 руб.",
        name: "Полный ландшафтный проект",
      },
    ],
    dataServices: [
      [
        [
          {
            class: "services__row-item-big",
            title: "Вынос в натуру границ земельного участка",
            price: "от 6 000 руб.",
            // pathImg: "url(/images/fence/services-2.png)",
            pathImg: "",
            hoverColors: "rgb(170, 214, 199)",
          },
        ],
        [
          {
            class: "services__row-item-big",
            title: "Полный ландшафтный проект",
            price: "от 85 000 руб.",
            pathImg: "",
            hoverColors: "rgb(204, 209, 255)",
          },
          // {
          //   class: "services__row-item-sm",
          //   title: "Эскизный проект",
          //   price: "",
          //   pathImg: "",
          //   hoverColors: "rgb(204, 209, 255)",
          // },
        ],
      ],
      [
        [
          {
            class: "services__row-item-big",
            title: "Эскизный проект",
            price: "от 65 000 руб.",
            pathImg: "",
            hoverColors: "rgb(255, 229, 204)",
          },
        ],
        [
          {
            class: "services__row-item-big",
            title: "Топографическая съемка",
            price: "от 12 000 руб.",
            pathImg: "",
            hoverColors: "rgb(255, 229, 204)",
          },
        ],
      ],
    ],
    servicePrice: [
      { urlImg: "url(/images/fence/dop-1.png)", price: "от 60 000 руб.", name: "Установка автоматики" },
      { urlImg: "url(/images/fence/dop-2.png", price: "от 10 000 руб.", name: "Освещение участка" },
      { urlImg: "url(/images/fence/dop-3+.png)", price: "", name: "Организация парковки и заеда" },
      { urlImg: "url(/images/fence/dop-5+.png)", price: "", name: "Откатные ворота" },
      { urlImg: "url(/images/fence/dop-4+.png)", price: "", name: "Распашные ворота" },
      { urlImg: "url(/images/fence/dop-6.png", price: "", name: "Дополнительные услуги" },
      // { urlImg: "url(/images/fence/services-6.png)", price: "от 6000 м.пог", name: "Забор и оргаждения из бруска" },
    ],
    dataOrder: [
      {
        urlImg: "/icons/workOrder/bubbles4.svg",
        title: "Заявка",
        text: "Вы оставляете заявку или звоните в БИС, обсуждаем работы и согласовываем время выезда на участок.",
      },
      {
        urlImg: "/icons/topographyPage/pencil2.svg",
        title: "Документы",
        text: "Инженеры готовят и проверяют документы, заказывают выписку из Росреестра.",
      },
      {
        urlImg: "/icons/workOrder/automobile.svg",
        title: "Разметка",
        text: "Инженеры выезжают к вам и размечают сертифицированным оборудованием границы участка по координатам из выписки ЕГРН.",
      },
      {
        urlImg: "/icons/workOrder/clipboard.svg",
        title: "Акт",
        text: "Вы получаете акт выноса границ участка и оплачиваете услуги.*",
      },
    ],
    desctription: [
      {
        title: `Топографическая съемка
        и проектирование`,
        text: ``,
      },
      {
        title: `Вынос в натуру границ
        земельного участка`,
        text: `Поиск и закрепление границ вашего участка по координатам Росреестра. Определение границ заказывают перед установкой нового забора, покупкой участка и при спорах с соседями о текущем положении границы.
        Стоимость услуги - менее 1% от цены участка или стоимости установки забора, но сэкономит нервы и возможные затраты, связанные с переносом забора.
        Важно провести работы официально, чтобы избежать возможных споров с соседями.`,
      },
      {
        title: `Проектирование
        и ландшафтный дизайн`,
        text: `Мы занимаемся всеми видами проектных работ, от проведения предварительных изысканий и разработки концепции дизайна, до составления пакета дизайнерских и практических документов для вынесения проекта на местность.
        Для чего нужен проект ландшафта: наглядность - Вы сможете увидеть участок Вашей мечты до того как начнёте вкладывать деньги, а также
        избежать ошибки и предусмотреть максимум Ваших потребностей.`,
      },
      {
        title: `Эскизный
        ландшафтный проект`,
        text: `Эскизный ландшафтный проект отражает общую концепцию дизайна участка, расположение растений и элементов дизайна, позволяет рассчитать стоимость проведения благоустройства. Содержит комплект проектной документации для проведения ландшафтных работ на небольших участках с ровным рельефом.`,
      },
      {
        title: `Полный
        ландшафтный проект`,
        text: `Полный ландшафтный проект содержит полный комплект проектной документации, необходимой для дальнейшего проведения работ по благоустройству на участках любой площадью, и с любым рельефом, позволяет подробно рассчитать стоимость планируемых работ и необходимых материалов.`,
      },
    ],
  }),
};
</script>
<style lang="scss" scoped></style>
