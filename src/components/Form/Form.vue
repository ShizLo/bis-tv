<script>
export default {
  props: {},
  computed: {},
};
</script>
<template>
  <div class="form-feedback">
    <div class="form-feedback__container">
      <button class="form-feedback__close-btn" @click="$emit('someEvent')">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.20868 14.5405L14.2902 1.45898M14.2902 14.5405L1.20875 1.45899"
            stroke="#102938"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
        </svg>
      </button>
      <p class="form-feedback__title">Свяжемся с вами для консультации</p>
      <form class="form-feedback__form" onsubmit="return true; ym(38077235,'reachGoal','submitted');">
        <div class="form-feedback__group">
          <input class="form-feedback__group-input hover-group-input" type="text" name="Имя" placeholder="Имя" id="modalName2" />
        </div>
        <div class="form-feedback__group">
          <input
            class="form-feedback__group-input phone_mask hover-group-input"
            type="tel"
            placeholder="Телефон"
            name="Телефон"
            id="modalTelephone2"
            required=""
          />
        </div>
        <button type="submit" class="form-feedback__send-btn btn" data-id="#consultationForm2" data-form="">ОТПРАВИТЬ</button>
      </form>
      <p class="form-feedback__bottom-text">
        Нажимая кнопку «отправить», вы соглашаетесь с
        <a href="/politika-konfidencialnosti/">Политикой конфиденциальности</a>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.form-feedback {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1100;
  background-color: rgba(16, 41, 56, 0.9);
  justify-content: end;
  right: 0;
  left: 0;
  display: none;
  opacity: 0;
  &__container {
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 40px 121px;
    text-align: left;
    color: #102938;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }
  &__close-btn {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
  &__form {
    width: 45%;
  }
}

.form-feedback__title {
  font-size: 34px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 20px;
}
.form-feedback__group {
  background-color: #f5f5f5;
  border: 1px solid #e8eaec;
  margin: 0 0 20px;
  border-radius: 4px;
  position: relative;
  height: 56px;
  padding: 0 14px;
  transition: 0.2s;
}
.form-feedback__group-input,
input.form-feedback__group-input {
  background: 0 0;
  border: none !important;
  outline: 0;
  margin: 0;
  padding: 0;
  height: 50px;
}
.form-feedback__bottom-text,
.form-feedback__bottom-text a {
  color: #88959c;
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
}
.form-feedback__send-btn {
  height: 56px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  width: 100%;
  background: linear-gradient(86deg, #ffb096 0, #ff6bbb 39%, #ac6bed 100%), linear-gradient(87deg, #ffb096 0, #ff6bbb 39%, #ac6bed 100%);
  color: #fff;
  margin: 0 0 15px;
}
input[type="email"],
input[type="password"],
input[type="tel"],
input[type="text"],
textarea {
  width: 100%;
  height: 100%;
  color: #333;
  font: bold 16px "Roboto Flex", Arial;
  vertical-align: top;
  /* padding: 10px 0 4px; */
  border: none;
  border-bottom: 2px solid #102938;
  background: 0 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.form-feedback__close-btn {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.form-feedback__group label {
  position: absolute;
  top: 15px;
  left: 14px;
  right: 14px;
  pointer-events: none;
  font-size: 16px;
  font-weight: 400;
  color: #839097;
}
</style>
