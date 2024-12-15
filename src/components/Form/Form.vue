<script>
export default {
  props: {},
  computed: {},
  data() {
    return {
      name: "",
      email: "",
      questiion: "",
    };
  },
  methods: {
    sendMessage() {
      var my_text = this.name + " " + this.email + " " + this.questiion;
      var token2 = "7564255529:AAELnqPYEHTvtJzwSaf3tnn7JQb4whqx688";
      var chat_id2 = -1002378962422;
      var chat_id = -1002383432249;
      var url2 = `https://api.telegram.org/bot${token2}/sendMessage?chat_id=${chat_id2}&text=${my_text}`;
      var url = `https://api.telegram.org/bot${token2}/sendMessage?chat_id=${chat_id}&text=${my_text}`;
      let api2 = new XMLHttpRequest();
      let api = new XMLHttpRequest();
      api2.open("GET", url2, true);
      api.open("GET", url, true);
      api2.send();
      api.send();
      this.name = "";
      this.email = "";
      this.questiion = "";
    },
  },
};
</script>
<template>
  <div class="feedback">
    <div class="feedback__container">
      <button class="feedback__close-btn" @click="$emit('someEvent')">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.20868 14.5405L14.2902 1.45898M14.2902 14.5405L1.20875 1.45899"
            stroke="#102938"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
        </svg>
      </button>
      <p class="feedback__title title">Свяжемся с вами для консультации</p>
      <div class="feedback__form">
        <div class="feedback__group">
          <input v-model="name" class="feedback__group-input hover-group-input" type="text" name="Имя" placeholder="Имя" />
        </div>
        <div class="feedback__group">
          <input
            v-model="email"
            class="feedback__group-input phone_mask hover-group-input"
            type="tel"
            placeholder="Телефон"
            name="Телефон"
            required=""
          />
        </div>
        <button @click="sendMessage()" type="submit" class="feedback__send-btn btn" data-id="#consultationForm2" data-form="">
          ОТПРАВИТЬ
        </button>
      </div>
      <p class="feedback__bottom-text">
        Нажимая кнопку «отправить», вы соглашаетесь с
        <a href="/politika-konfidencialnosti/">Политикой конфиденциальности</a>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.feedback {
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
  &__title {
    margin: 0 0 20px;
    &.title {
      font-size: 34px;
      font-weight: 600;
      line-height: 1.2;
    }
  }
  &__group {
    background-color: #f5f5f5;
    border: 1px solid #e8eaec;
    margin: 0 0 20px;
    border-radius: 4px;
    position: relative;
    height: 56px;
    padding: 0 14px;
    transition: 0.2s;
  }
}
.feedback__group-input,
input.feedback__group-input {
  background: 0 0;
  border: none !important;
  outline: 0;
  margin: 0;
  padding: 0;
  height: 50px;
}
.feedback__bottom-text,
.feedback__bottom-text a {
  color: #88959c;
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
}
.feedback__send-btn {
  height: 56px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  width: 100%;
  background: linear-gradient(86deg, #c2e7ed 0, #064179 39%, #5ab4ce 100%), linear-gradient(87deg, #c2e7ed 0, #064179 39%, #5ab4ce 100%);
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
  font-size: 18px;
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
.feedback__close-btn {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.feedback__group label {
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
