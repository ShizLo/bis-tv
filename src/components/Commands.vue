<script setup>
import BlockHeader from "../components/BlockHeader.vue";
</script>
<template>
  <section class="commands">
    <div class="commands__container _container">
      <BlockHeader class="commands__title" title="Наша команда"></BlockHeader>
      <div class="commands__items">
        <div class="commands__item item">
          <div class="commands__img-wrapper">
            <div class="commands__avatar">
              <picture>
                <source srcset="" type="image/png" />
                <img src="/images/command/serg.png" />
              </picture>
            </div>
          </div>
          <div class="item__title">Сергей Поляков</div>
          <div class="item__subtitle">Руководитель нулевого цикла БИС</div>
          <div class="item__description">
            <p>Специализация</p>
            <ul>
              <li>Планирование и управление всеми процессами команды</li>
              <li>Первичная консультация</li>
            </ul>
          </div>
          <div class="item__contacts"></div>
        </div>
        <div class="commands__item">
          <div class="commands__img-wrapper">
            <div class="commands__avatar">
              <picture>
                <source srcset="" type="image/jpg" />
                <img src="/images/command/kirillov.webp" />
              </picture>
            </div>
          </div>
          <div class="item__title">Андерей Кириллов</div>
          <div class="item__subtitle">Инженер и бригадир нулевого цикла</div>
          <div class="item__description">
            <p>Специализация</p>
            <ul>
              <li>Организация и монтаж наружных инженерных сетей</li>
              <li>Топографическая съемка</li>
              <li>Первичный выезд</li>
            </ul>
          </div>
        </div>
        <div class="commands__item">
          <div class="commands__img-wrapper">
            <div class="commands__avatar">
              <picture>
                <source srcset="" type="image/png" />
                <img src="/images/command/voronin.png" />
              </picture>
            </div>
          </div>
          <div class="item__title">Сергей Воронин</div>
          <div class="item__subtitle">Инженер и бригадир нулевого цикла</div>
          <div class="item__description">
            <p>Специализация</p>
            <ul>
              <li>Организация и монтаж наружных инженерных сетей</li>
              <li>Специалист по водоподготовке и водоочистке</li>
              <li>Работы по благоустройству</li>
              <li>Сервис нулевого цикла</li>
            </ul>
          </div>
        </div>
        <div class="commands__item">
          <div class="commands__img-wrapper">
            <div class="commands__avatar">
              <picture>
                <source srcset="" type="image/jpg" />
                <img src="/images/command/4.webp" />
              </picture>
            </div>
          </div>
          <div class="item__title">Алексей Качерук</div>
          <div class="item__subtitle">Инженер и бригадир нулевого цикла</div>
          <div class="item__description">
            <p>Специализация</p>
            <ul>
              <li>Организация и монтаж наружных инженерных сетей</li>
              <li>Расчет и монтаж выездных групп, заборов и ограждений</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "../assets/styles/main.scss" as *;
.commands {
  &__title {
    margin: 0px 0px 20px 0px;
  }
  &__items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 40px;
    @media (max-width: $md4) {
      grid-template-columns: 1fr;
    }
  }
  &__img-wrapper {
    display: flex;
    justify-content: center;
  }
  &__avatar {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 200px;
    flex: 0 0 200px;
    max-height: 200px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0px 0px 10px 0px;
  }
  &__item {
    position: relative;
    @media (max-width: $md4) {
      padding-bottom: 15px;
      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        content: "";
        height: 1px;
        width: 100%;
        background-color: $subtitle;
        opacity: 0.5;
      }
    }
  }
}

.item {
  // margin: 0px 0px 25px 0px;
  &__title {
    text-align: center;
    font-weight: 500;
    font-size: 22px;
    line-height: 1;
    color: $title;
  }
  &__subtitle {
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    color: $subtitle;
    margin: 0px 0px 10px 0px;
    @media (max-width: $md4) {
      margin: 0px 0px 5px 0px;
    }
  }
  &__description {
    line-height: 1.2;
    color: $subtitle;
    p {
      &:first-child {
        color: $title;
        margin: 0px 0px 10px 0px;
      }
    }
    ul {
      padding-left: 15px;
    }
    li {
      list-style: circle;
    }
    @media (max-width: $md4) {
      font-size: 13px;
      p {
        &:first-child {
          margin: 0px 0px 5px 0px;
        }
      }
      ul {
        padding-left: 0;
      }
      li {
        list-style: none;
      }
    }
  }
}
</style>
