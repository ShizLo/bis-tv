<script setup></script>
<template>
  <section class="survey"></section>
  <div class="survey__wrapper _container">
    <div class="survey__header">
      <div class="survey__input">
        <div class="input__text">Дата выезда:</div>
        <div class="input__value">25.03.24</div>
      </div>
      <div class="survey__input">
        <div class="input__text">Объект:</div>
        <div class="input__value">Скаут</div>
      </div>
      <div class="survey__input">
        <div class="input__text">ФИО:</div>
        <div class="input__value">Иванов Иван Иванович</div>
      </div>
      <div class="survey__input">
        <div class="input__text">Модель дома:</div>
        <div class="input__value">612 Р - 4</div>
      </div>
      <div class="survey__input">
        <div class="input__text">Координаты:</div>
        <div class="input__value">60.349604, 30.462303</div>
      </div>
      <div class="survey__input">
        <div class="input__text">Адрес объекта:</div>
        <div class="input__value">Гарболово озеро</div>
      </div>
      <div class="survey__input">
        <div class="input__text">Площадка для разгрузки модулей координаты:</div>
        <div class="input__value">?</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.survey {
  margin-top: 25px;
}
.survey__input {
  display: flex;
}
.input__text {
  margin: 0px 10px 0px 0px;
}
</style>
