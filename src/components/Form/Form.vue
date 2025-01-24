<script setup>
import { ref, onUpdated } from "vue";
import { ROUTES_PATHS } from "../../constants";
let name = ref("");
let email = ref("");
let questiion = ref("");
let errorName = ref("");
let errorTel = ref("");

let isSuccesTel = ref(false);
let isSuccesName = ref(false);

onUpdated(() => {
  let nameInput = document.querySelector('input[name="name"]');
  let telInput = document.querySelector('input[name="telephone"]');

  const inputs = document.querySelectorAll(".feedback__group");

  let nameError = document.querySelector('input[name="name"]').nextElementSibling;
  let telError = document.querySelector('input[name="telephone"]').nextElementSibling;

  const maskOptions = {
    mask: "+{7} (000) 000-00-00",
    lazy: false,
  };
  const maskTel = IMask(telInput, maskOptions);
  maskTel.on(
    "complete",
    () => {
      inputs[1].classList.remove("error");
      inputs[1].classList.add("success");
      telError.classList.remove("name-error");
      isSuccesTel.value = true;
    },
    maskTel.on("accept", () => {
      inputs[1].classList.remove("success");
      inputs[1].classList.add("error");
      errorTel.value = "Заполните поле";
      telError.classList.add("name-error");
    })
  );
  nameInput.addEventListener("keydown", function (e) {
    // Будет перехватывать все числа при руч ввномоде.
    if (e.key.match(/[0-9]/)) {
      // Тажке нужна, чтобы replace не сбрасывал каретку, срабатывая каждый раз.
      inputs[0].classList.add("error");
      nameError.classList.add("name-error");
      errorName.value = "Ввод цифр невозможен";
      return e.preventDefault();
    } else {
      nameError.classList.remove("name-error");
      inputs[0].classList.add("success");
      isSuccesName.value = true;
      inputs[0].classList.remove("error");
    }
  });

  nameInput.addEventListener("input", function (e) {
    // На случай, если умудрились ввести через копипаст или авто-дополнение.
    nameInput.value = nameInput.value.replace(/[0-9]/g, "");
  });
  nameInput.addEventListener("blur", function (e) {
    nameError.classList.remove("name-error");
  });

  nameInput.addEventListener("blur", function (e) {
    if (nameInput.value.length == 0) {
      nameError.classList.add("name-error");
      errorName.value = "Заполните поле";
      inputs[0].classList.add("error");
    }
  });
});
function sendMessage() {
  let nameError = document.querySelector('input[name="name"]').nextElementSibling;
  let telError = document.querySelector('input[name="telephone"]').nextElementSibling;
  const inputs = document.querySelectorAll(".feedback__group");

  if (isSuccesName && isSuccesTel) {
    var my_text = name.value + " " + email.value + " " + questiion.value;
    var token2 = "7564255529:AAELnqPYEHTvtJzwSaf3tnn7JQb4whqx688";
    var chat_id2 = -1002378962422;
    // ОСНОВНАЯ ГРУППА
    var url2 = `https://api.telegram.org/bot${token2}/sendMessage?chat_id=${chat_id2}&text=${my_text}`;
    let api2 = new XMLHttpRequest();
    api2.open("GET", url2, true);
    api2.send();

    // ДОПОЛНИТЕЛЬНАЯ ГРУППА
    var chat_id = -1002383432249;
    var url = `https://api.telegram.org/bot${token2}/sendMessage?chat_id=${chat_id}&text=${my_text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    name.value = "";
    email.value = "";
    questiion.value = "";
    isSuccesName = false;
    isSuccesTel = false;
    // telError.classList.add('send-message')
    // this.errorTel = "Сообщение отправлено"
    // console.log('succes')
  } else {
    telError.classList.add("name-error");
    inputs[1].classList.add("error");
    nameError.classList.add("name-error");
    errorName = "Заполните поле";
    inputs[0].classList.add("error");
    errorTel = "Заполните поле";
  }
}
</script>
<template>
  <!-- <div class="container-modal" @click.self="$emit('someEvent')"> -->
  <div class="container-modal">
    <div class="reveal-modal">
      <p class="feedback__title title">Свяжемся с вами для консультации</p>
      <div class="feedback__form">
        <div class="feedback__group">
          <input v-model="name" class="feedback__group-input hover-group-input" type="text" name="name" placeholder="Имя" maxlength="20" />
          <span>{{ errorName }}</span>
        </div>
        <div class="feedback__group">
          <input
            v-model="email"
            class="feedback__group-input phone_mask hover-group-input"
            type="tel"
            placeholder="Телефон"
            name="telephone"
            required=""
          />
          <span>{{ errorTel }}</span>
        </div>
        <button @click="sendMessage" type="submit" class="form__button btn" data-id="#consultationForm2" data-form="">ОТПРАВИТЬ</button>
      </div>
      <p class="feedback__bottom-text">
        Нажимая кнопку «отправить», вы соглашаетесь с
        <router-link :to="{ name: ROUTES_PATHS.POLICY }"> Политикой конфиденциальности.</router-link>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../../assets/styles/main.scss" as *;

@keyframes shake {
  0% {
    margin-left: 0rem;
  }
  25% {
    margin-left: 0.5rem;
  }
  75% {
    margin-left: -0.5rem;
  }
  100% {
    margin-left: 0rem;
  }
}

.name-error {
  display: block !important;
  animation: shake 0.2s ease-in-out 0s 2;
}
.success {
  background-color: #dff0d8 !important;
}

.error {
  background-color: #f2dede !important;
}

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

  @media (max-width: $md4) {
    font-size: $fs-base;
  }
}

.container-modal {
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  // visibility: hidden;
  z-index: 3;
  // display: none;
  background-color: rgba(22, 22, 22, 0.5);
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

  @media (max-width: $md3) {
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
  // display: none;
  // opacity: 0;

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
    margin: 0 0 25px;
    border-radius: 4px;
    position: relative;
    height: 56px;
    padding: 0 14px;
    transition: 0.2s;
  }

  &__group > span {
    color: red;
    display: none;
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
