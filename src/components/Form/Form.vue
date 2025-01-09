<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  props: {},
  computed: {},

  data() {
    return {
      name: "",
      email: "",
      questiion: "",
      toastId: "",
      toastIds: [],
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
      if (this.name === "" || this.email === "") {
        const toastId = toast.error("Заполните все поля", {
          rtl: false,
          limit: 3,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        this.toastIds.push(toastId);
      } else {
        const toastId = toast.success("Заявка отправлена", {
          rtl: false,
          limit: 3,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        this.toastIds.push(toastId);
      }
      this.name = "";
      this.email = "";
      this.questiion = "";
    },
  },
};
</script>
<template>
  <div class="container-modal" @click.self="$emit('someEvent')">
    <!-- <button class="feedback__close-btn">
        <svg width="22" height="22" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.20868 14.5405L14.2902 1.45898M14.2902 14.5405L1.20875 1.45899"
            stroke="#102937"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
        </svg>
      </button> -->
    <div class="reveal-modal">
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
        <!-- <button @click="sendMessage()" @click.self="$emit('someEvent',this.test)" type="submit" class="form__button btn" data-id="#consultationForm2" data-form="">
          ОТПРАВИТЬ
        </button> -->
        <button @click="sendMessage()" type="submit" class="form__button btn" data-id="#consultationForm2" data-form="">ОТПРАВИТЬ</button>
      </div>
      <p class="feedback__bottom-text">
        Нажимая кнопку «отправить», Вы соглашаетесь с
        <router-link :to="{ name: 'PolicyView' }" @click.self="$emit('someEvent')"> Политикой конфиденциальности.</router-link>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../../assets/styles/app.scss" as c;
.form__button {
  font-weight: 500;
  padding: 10px 14px;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #ea5b0c;
  background: rgba(245, 245, 245, 0);
  color: #102938;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  font-size: 20px;
  @media (max-width: c.$md4) {
    font-size: c.$fs-base;
  }
}

.container-modal {
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  // visibility: hidden;
  z-index: 99;
  display: none;
  background-color: rgba(22, 22, 22, 0.5);
  /* complimenting your modal colors */
}
.reveal-modal {
  display: flex;
  position: relative;
  padding-bottom: 20px;
  padding-top: 50px;
  margin: 0 auto;
  top: 30%;
  background-color: white;
  width: 700px;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  border-radius: 10px;
  -webkit-box-shadow: 1px 1px 50px 29px rgba(34, 33, 33, 0.8);
  -moz-box-shadow: 1px 1px 50px 29px rgba(34, 33, 33, 0.8);
  box-shadow: 1px 1px 50px 29px rgba(34, 33, 33, 0.8);
  @media (max-width: c.$md3) {
    width: 500px;
  }
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
///////////////////////////////////////////////////////

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
    width: 60%;
    display: flex;
    flex-direction: column;
  }
  &__title {
    margin: 0 0 20px;
    &.title {
      font-size: 34px;
      font-weight: 600;
      line-height: 1.2;
      text-align: center;
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
  margin-top: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
  text-align: center;
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
