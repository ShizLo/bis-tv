<template>
  <Banner
    style="white-space: pre-line"
    bannerText="Инженерные коммуникации 
  и благоустройство участка"
    :bannerPrice="bannerPrice"
    @isVisible="visibleForm()"
  />
  <Form v-show="feedbackForm.active" 
        @isVisible="visibleForm()"/>
  <OurServices :dataServices="dataServices" title="Наши услуги" />
  <WorksSlider />
  <WorkOrder :data="dataOrder" title="Почему выбирают нас" />
  <Partners />
  <AboutUs />
  <FeedBackForm title="Оставьте заявку" id="GlobalForm" />
  <!-- <GlobalForm id="GlobalForm" /> -->
</template>

<script>
import OurServices from "../components/OurServices.vue";
import Banner from "../components/Banner.vue";
import Form from "../components/Form/Form.vue";
import WorksSlider from "../components/WorksSlider.vue";
import Partners from "../components/Partners.vue";
import AboutUs from "../components/AboutUs.vue";
import GlobalForm from "../components/Form/GlobalForm.vue";
import WorkOrder from "../components/WorkOrder.vue";
import FeedBackForm from "../components/FeedBackForm.vue";
import { ROUTES_PATHS } from "../constants";
import { reactive } from "vue";

export default {
  name: "HomePage",
  components: {
    OurServices,
    WorksSlider,
    Banner,
    Partners,
    AboutUs,
    GlobalForm,
    Form,
    WorkOrder,
    FeedBackForm,
  },

  setup() {
    function visibleForm() {
      if (!feedbackForm.active) {
        feedbackForm.active = true
        toggleBodyScroll(true)
      } else {
        feedbackForm.active = false
        toggleBodyScroll(false)
      }
     
    }
    function toggleBodyScroll(lock) {
  // TODO: Использовать после того как будет реализована форма обратной связи
  document.body.style.overflow = lock ? "hidden" : "";
  document.getElementById("nav__button").style.zIndex = lock ? "-1" : "";
  document.getElementById("nav__button").style.overflow = lock ? "hidden" : "";
}
    const feedbackForm = reactive({
  // Не используется
  //TODO: Открывать форму при нажатии кнопки "Обсудить задачу"
  active: false, // Открыта ли форма обратной связи
});
    return {visibleForm,toggleBodyScroll, feedbackForm};
  },
  data: () => ({
    bannerPrice: [
      {
        url: "/images/swiperBanner/banner-1+.jpg",
        price: "от 110 000 руб.",
        name: "Благоустройство",
        routerPath: "",
      },
      {
        url: "/images/swiperBanner/swiper-slide-1.webp",
        price: "от 90 000 руб.",
        name: "Установка забора",
        routerPath: ROUTES_PATHS.FENCE,
      },
      {
        url: "/images/swiperBanner/swiper-slide-2.webp",
        price: "от 100 000 руб.",
        name: "Свайное поле",
        routerPath: ROUTES_PATHS.FAUNDATION,
      },
      {
        url: "/images/swiperBanner/banner-3.jpg",
        price: "от 65 000 руб.",
        name: "Откатные ворота",
        routerPath: ROUTES_PATHS.FENCE,
      },
      {
        url: "/images/swiperBanner/swiper-slide-4.webp",
        price: "от 1 900 руб./м²",
        name: "Парковка",
        routerPath: "",
      },
      {
        url: "/images/swiperBanner/swiper-slide-5.webp",
        price: "от 60 000 руб.",
        name: "Водоподготовка",
        routerPath: ROUTES_PATHS.WATER,
      },
      {
        url: "/images/swiperBanner/swiper-slide-6.webp",
        price: "от 180 000 руб.",
        name: "Септик под ключ",
        routerPath: "",
      },
    ],
    dataOrder: [
      {
        urlImg: "/icons/homePage/spinner9.svg",
        title: "Делаем полный цикл",
        text: "Мы беремся за реализацию всего цикла от проектирования до организации газона. Большой набор услуг позволяет закрыть большую часть потребностей в 'одном окне', что позволяет не тратить время на согласования, коллаборации и экономит средства.",
      },
      {
        urlImg: "/icons/homePage/user-tie.svg",
        title: "Индивидуальный подход",
        text: "Как не бывает двух одинаковых заказчиков, так и нет полностью идентичных участков. Наши инженеры и ландшафтный дизайнер помогут создать индивидуальный ландшафт и грамотно разместить коммуникации, учитывая все особенности участка.",
      },
      {
        urlImg: "/icons/homePage/checkmark.svg",
        title: "Гарантия качества",
        text: "Гарантируем качество наших работ и оперативно реагируем в случае когда, что-то пошло не так. ",
      },
      {
        urlImg: "/icons/homePage/cogs.svg",
        title: "Служба сервиса",
        text: "Если заказываете сервис у нас, то помимо сезонного обслуживания получаете и расширенную* гарантию. После монтажа оборудования наш специалист сам будет отслеживать и напоминать вам о необходимости провести ТО.",
      },
      {
        urlImg: "/icons/homePage/clipboard.svg",
        title: "Прозрачная смета",
        text: "После первичной встречи на участке составляется визуализация вашего участка с привязками и размерами. Это позволяет точно составить подробную смету. Цена в большинстве случаев фиксируется или в смете указаны пункты, корректируемые по факту.",
      },
    ],
    dataServices: [
      [
        [
          {
            class: "services__row-item-big",
            title: "Септик под ключ",
            price: "От 180 000 руб.",
            pathImg: "url(/images/homePage/services-1.png)",
            hoverColors: "rgb(170, 214, 199)",
          },
        ],
        [
          {
            class: "services__row-item-sm",
            title: "Водоснабжение",
            price: "От 60 000 руб.",
            pathImg: "url(/images/homePage/services-2.png",
            hoverColors: "rgb(204, 209, 255)",
            routePath: ROUTES_PATHS.WATER,
          },
          {
            class: "services__row-item-sm",
            title: "Ливневка",
            price: "От 50 000 руб.",
            pathImg: "url(/images/ourServices/services-7.webp",
            hoverColors: "rgb(204, 209, 255)",
          },
        ],
      ],
      [
        [
          {
            class: "services__row-item-sm",
            title: "Фундамент",
            price: "От 100 000 руб.",
            pathImg: "url(/images/ourServices/services-5+.webp",
            hoverColors: "rgb(255, 229, 204)",
            routePath: ROUTES_PATHS.FAUNDATION,
          },
          {
            class: "services__row-item-sm",
            title: "Электромонтаж",
            price: "От 20 000 руб.",
            pathImg: "url(/images/ourServices/services-8++.webp",
            hoverColors: "rgb(243, 253, 180)",
          },
        ],
        [
          {
            class: "services__row-item-big",
            title: "Установка заборов",
            price: "От 90 000 руб.",
            pathImg: "url(/images/homePage/services-6.png",
            hoverColors: "rgb(255, 229, 204)",
            routePath: ROUTES_PATHS.FENCE,
          },
        ],
      ],
    ],
  }),
};
</script>
<style lang="scss" scoped></style>
