<script setup>
import { ROUTES_PATHS } from "../../constants";
import { ref } from "vue";

let name = ref("");
let email = ref("");
let questiion = ref("");

function sendMessage() {
  //--------------api2 основная группа
  var my_text = name.value + " " + email.value + " " + questiion.value;
  var token2 = "7564255529:AAELnqPYEHTvtJzwSaf3tnn7JQb4whqx688";
  var chat_id2 = -1002378962422;
  var chat_id = -1002383432249;
  //var url2 = `https://api.telegram.org/bot${token2}/sendMessage?chat_id=${chat_id2}&text=${my_text}`; //Основная группа
  var url = `https://api.telegram.org/bot${token2}/sendMessage?chat_id=${chat_id}&text=${my_text}`;
  //let api2 = new XMLHttpRequest();
  let api = new XMLHttpRequest();
  // api2.open("GET", url2, true);
  api.open("GET", url, true);
  // api2.send();
  api.send();
  name = "";
  email = "";
  questiion = "";
  document.querySelectorAll(".form__button").forEach((element) => {
    element.addEventListener("touchstart", () => element.classList.add("on-hover"));
    element.addEventListener("touchend", () => element.classList.remove("on-hover"));
  });
}
</script>
<template>
  <section id="section" class="global-form">
    <div class="_container global-form_mt">
      <div class="form-bl brd">
        <div class="form-submit" style="padding-bottom: 0">
          <div class="form__title">Оставьте заявку</div>
          <p>Позвоните сейчас или запишитесь на бесплатную консультацию</p>
          <a class="link__phone phone" href="tel:+7 911 277-56-07"> +7 911 277-56-07</a>
          <div class="flex-input">
            <div class="col">
              <input v-model="name" type="text" name="Ваше имя" value="" id="input-name" placeholder="Ваше имя" />
            </div>
            <div class="col">
              <input v-model="email" type="text" name="Ваша почта" value="" placeholder="Ваша почта или телефон" id="input-email" />
            </div>
            <div class="col">
              <textarea v-model="questiion" name="Задайте ваш вопрос" placeholder="Задайте ваш вопрос"></textarea>
            </div>
          </div>
          <input @click="sendMessage" class="form__button button_mtp" type="submit" value="Отправить" />
          <div class="feedback">
            <p class="feedback__text">
              Нажимая кнопку «отправить», вы соглашаетесь с
              <router-link :to="{ name: ROUTES_PATHS.POLICY }"> Политикой конфиденциальности.</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use "../../assets/styles/main.scss" as *;
.flex-input {
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 558px) {
    flex-direction: column;
  }
}
.phone {
  font-size: 20px;
  @media (max-width: $md4) {
    font-size: $fs-m;
  }
}
.col:first-child {
  flex-grow: 1;
  order: 1;
  margin-right: 12px;
  @media (max-width: 558px) {
    margin-right: 0px;
  }
}
.col:nth-child(2) {
  flex-grow: 1;
  order: 2;
  margin-right: 12px;
  @media (max-width: $md3) {
    margin-right: 0px;
  }
}
.col:nth-child(3) {
  flex-grow: 10;
  order: 3;
  margin-right: 10px;
  @media (max-width: $md3) {
    margin-right: 0px;
  }
}
input[type="email"],
input[type="password"],
input[type="tel"],
input[type="text"],
textarea {
  width: 100%;
  height: auto;
  color: #333;
  font-size: 20px;
  vertical-align: top;
  padding: 10px 0 4px;
  border: none;
  border-bottom: 1px solid #102938;
  background: 0 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  @media (max-width: $md4) {
    font-size: $fs-base;
  }
}
.global-form {
  margin-top: 2rem;
  @media (max-width: $md4) {
    margin-top: 15px;
  }
}
:focus,
a,
button,
input,
textarea {
  outline: 0;
}
textarea {
  resize: none;
  overflow: hidden;
  height: 45px;
}
.form__title {
  font-size: 26px;
  font-weight: 600;
  display: inline-block;
  border-radius: 32px;
  color: $color-title;
  @media (max-width: $md4) {
    font-size: $fs-l;
    margin-bottom: 5px;
  }
}
.form-submit p {
  //   padding-bottom: 24px;
  color: #102938;
  font-size: 1.2rem;
  font-weight: 400;
  @media (max-width: $md4) {
    margin-bottom: 5px;
    line-height: 1.3;
    font-size: 16px;
  }
}
.form__button {
  font-weight: 500;
  padding: 10px 14px;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #ea5b0c;
  background: rgba(245, 245, 245, 0);
  color: #102938;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  font-size: 20px;
  @media (max-width: $md4) {
    font-size: $fs-base;
  }
}
.button_mtp {
  margin-top: 20px;
  margin-bottom: 2px;
  @media (max-width: $md4) {
    margin-top: 15px;
  }
}
@media (min-width: $md1) {
  .form__button:hover {
    background: #102938;
    color: #f5f5f5;
    border-color: #102938;
  }
}
.on-hover:hover {
  background: #102938;
  transition: 10ms;
  color: #f5f5f5;
  border-color: #102938;
}
// }
.form-bl.brd {
  box-shadow: 0px 1px 3px 0px rgba(34, 60, 80, 0.18);
  color: #102938;
  text-align: left;
  padding: 28px 25px 1px;
  // border: 1px solid #ea5b0c;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-sizing: border-box;
  @media (max-width: $md4) {
    // padding: 28px 25px 1px;
    padding: 20px 12px 1px 15px;
  }
}
.feedback {
  margin: 2px 0px 18px 0px;

  & p {
    font-size: 12px;
  }
}
</style>
