<script>
import Form from "../components/Form/Form.vue";

export default {
    components: {
        Form,
  },
  setup() {
    return {};
  },
  data: () => ({

    formIsVisible: 0, 
  }),
  methods: {
    formVisible() {
      if (this.formIsVisible === 1) {
        this.formIsVisible = 0;
      } else {
        this.formIsVisible = 1;
      }
    },
  },
    props: {

    },
    computed: {
      
    }
}
</script>
<template>
      <Form 
      :class="formIsVisible === 1 ? 'form-feedback__show' : ''"
      @someEvent="formVisible"/>
    <div class="catalog__wrap">
        <ul class="catalog__list">
            <li class="catalog__list-item">
                <span class="catalog__list-item__header">
                    <img class="catalog__list-item__header__icon" width="20" height="20" alt="Услуги" src="../assets/icons/uslugi1.svg">
                    Услуги
                </span>

                <ul class="catalog__list-item__body">
                    <li class="catalog__list-item__body-item">
                        <div class="catalog__item" data-test="0">
                            <a class="catalog__link" @click="formVisible()">Септик под ключ</a>
                        </div>

                        <div class="catalog__item" data-test="1">
                            <a class="catalog__link" href="/pogreba/">Установка погреба</a>
                        </div>

                        <div class="catalog__item" data-test="2">
                            <a class="catalog__link" href="/vodosnabzhenie/">Водоснабжение
                            </a>
                        </div>
                    </li>

                    <li class="catalog__list-item__body-item">
                        <div class="catalog__item" data-test="0">
                            <a class="catalog__link" href="/skvazhina-na-vodu/">Скважина на воду
                            </a>
                        </div>

                        <div class="catalog__item" data-test="1">
                            <a class="catalog__link" href="/skvazhina-na-vodu/obustroistvo/">Обустройство скважины</a>
                        </div>

                        <div class="catalog__item" data-test="2">
                            <a class="catalog__link" href="/kolodec/">Колодец </a>
                        </div>
                    </li>

                    <li class="catalog__list-item__body-item">
                        <div class="catalog__item" data-test="0">
                            <a class="catalog__link" href="/sistema-ochistki-vodi/">Система очистки воды
                            </a>
                        </div>

                        <div class="catalog__item" data-test="1">
                            <a class="catalog__link" href="/svajnij-fundament/">Свайный фундамент</a>
                        </div>

                        <div class="catalog__item" data-test="2">
                            <a class="catalog__link" href="/blagoustrojstvo/">Благоустройство
                            </a>
                        </div>
                    </li>

                    <li class="catalog__list-item__body-item">
                        <div class="catalog__item" data-test="0">
                            <a class="catalog__link" href="/blagoustrojstvo/drenazh-ychastka/">Дренаж
                            </a>
                        </div>

                        <div class="catalog__item" data-test="1">
                            <a class="catalog__link" href="/blagoustrojstvo/livnevaja-kanalizacija/">Ливневая
                                канализация
                            </a>
                        </div>

                        <div class="catalog__item" data-test="2">
                            <a class="catalog__link" href="/blagoustrojstvo/otmostka-vokrug-doma/">Отмостка вокруг
                                дома</a>
                        </div>
                    </li>

                    <li class="catalog__list-item__body-item">
                        <div class="catalog__item" data-test="0">
                            <a class="catalog__link" href="/kupeli/">Установка купели</a>
                        </div>
                        <div class="catalog__item" data-test="1">
                            <a class="catalog__link" href="/videonabljudenie/">Видеонаблюдение
                            </a>
                        </div>
                        <div class="catalog__item" data-test="2">
                            <a class="catalog__link" href="/katok/">Каток на участке </a>
                        </div>
                    </li>

                    <li class="catalog__list-item__body-item">
                        <div class="catalog__item" data-test="0">
                            <a class="catalog__link" href="/ykrashenie-doma/">Световое оформление дома и участка</a>
                        </div>
                        <div class="catalog__item" data-test="1">
                            <a class="catalog__link" href="/terrasi/">Строительство террас
                            </a>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="catalog__list-item">
                <a href="/service" class="catalog__list-item__header">
                    <img class="catalog__list-item__header__icon" width="20" height="20" alt="Sewera Сервис" src="../assets/icons/serviceicon.svg">
                    Сервис
                </a>

                <ul class="catalog__list-item__body">
                    <li class="catalog__list-item__body-item">
                        <div class="catalog__item" data-test="0">
                            <a class="catalog__link" href="/service/">Обслуживание дома</a>
                        </div>

                        <div class="catalog__item" data-test="1">
                            <a class="catalog__link" href="/service/obluzhivanie-septikov/">Септики и ЛОСы</a>
                        </div>

                        <div class="catalog__item" data-test="2">
                            <a class="catalog__link" href="/service/obsluzhivanie-sistem-vodopodgotovki/">Система
                                очистки воды</a>
                        </div>
                    </li>

                    <li class="catalog__list-item__body-item">
                        <div class="catalog__item" data-test="0">
                            <a class="catalog__link" href="/service/obsluzhivanie-skvazhini/">Скважина на воду</a>
                        </div>

                        <div class="catalog__item" data-test="1">
                            <a class="catalog__link" href="/service/obsluzhivanie-sistem-vodosnabzhenija/">Система
                                водоснабжения</a>
                        </div>

                        <div class="catalog__item" data-test="2">
                            <a class="catalog__link" href="/service/obsluzhivanie-sistem-otoplenija/">Система
                                отопления</a>
                        </div>
                    </li>

                    <li class="catalog__list-item__body-item">
                        <div class="catalog__item" data-test="0">
                            <a class="catalog__link" href="/service/obsluzhivanie-sistemi-avtopoliva/">Система
                                автополива</a>
                        </div>

                        <div class="catalog__item" data-test="1">
                            <a class="catalog__link" href="/service/yxod-za-gazonom/">Уход за газоном</a>
                        </div>

                        <div class="catalog__item" data-test="2">
                            <a class="catalog__link" href="/service/yborka-zagorodnogo-doma/">Уборка участка</a>
                        </div>
                    </li>

                    <li class="catalog__list-item__body-item">
                        <div class="catalog__item" data-test="0">
                            <a class="catalog__link" href="/service/cleaning-zagorodnogo-doma/">Уборка частного дома</a>
                        </div>

                        <div class="catalog__item" data-test="1">
                            <a class="catalog__link" href="/service/rabota-s-elektrikoy/">Электромонтажные работы</a>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.form-feedback__show {
    display: block;
    opacity: 1;
}



.catalog__wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    border-radius: 8px;
    padding: 30px;
    margin-top: 21px;
    background: #fff;
    box-shadow: 0 4px 28px 0 rgba(0, 60, 92, 0.08);
}
.blog, .catalog__list {
    width: 100%;
}
.catalog__list-item {
    padding-bottom: 20px;
    padding-top: 20px;
    border-bottom: 1px solid #e8eaec;
    width: 100%;
}
.catalog__list-item:first-child {
    padding-top: 0;
}
li {
    list-style-type: none;
}
.catalog__list-item__header {
    text-align: left;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    color: #102938;
    font-size: 1.2rem;
}
.catalog__list-item__header__icon {
    width: 20px;
    min-width: 20px;
    height: 20px;
    margin-right: 10px;
    object-fit: contain;
    
}
.catalog__list-item__body {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: row;
    gap: 2px 33px;
}
.catalog__item {
    transition: border-radius 0.3s, background 0.3s;
}
.catalog__item:hover {
    border-radius: 6px;
    background: #f5f5f5;
}
/* .catalog__link {
    font: 700 16px / 150% "Roboto Flex";
    display: flex;
    justify-content: stretch;
    align-items: center;
    gap: 7px;
    color: #102938;
    padding: 8px 10px;
} */

.catalog__link {
    padding: 8px 10px;
    display: flex;
    justify-content: stretch;
    align-items: center;
    gap: 7px;
    font-size: 1.2rem;
    display: flex;
    width: 100%;
    color: #102938;
}
</style>