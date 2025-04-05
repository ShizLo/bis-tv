<script setup>
import { ref, onUpdated, computed, reactive } from "vue";
import { ROUTES_PATHS } from "../../constants";
import useVuelidate from "@vuelidate/core";
import { required, helpers, email, minLength } from "@vuelidate/validators";
import moment from "moment";

//------ переменные ------//
let questiion = ref("");
let date = ref();
let visible = ref("");
let isReady = ref();

//------ вычисляемые свойства ------//
const formattedDate = computed(() => {
  if (date.value == null) {
    visible.value = false;
    return "любое время";
  } else {
    visible.value = true;
    return moment(date.value).format("DD-MM-YYYY HH:mm");
  }
});

const formData = reactive({
  name: "",
  email: "",
  telephone: "",
  selectedCommunication: [],
});
const rules = {
  name: {
    required: helpers.withMessage("Поле должно быть заполнено", required),
    alpha: helpers.withMessage("Только латинские буквы", (val) => /^[а-яё]*$/i.test(val)),
  },
  email: {
    required: helpers.withMessage("Поле должно быть заполнено", required),
    email: helpers.withMessage("Пример ivanov@mail.ru", email),
  },
  telephone: {
    required: helpers.withMessage("Поле должно быть заполнено", required),
    minLength: helpers.withMessage("Заполните поле полностью", minLength(18)),
  },
};
const rulesTime = ref({
  hours: { min: 9, max: 19 },
  minutes: { interval: 5 },
});
const v$ = useVuelidate(rules, formData);

const selectedColor = ref("orange"); // правило для календаря цвет кружочков оранжевый

const dateNull = () => {
  return (date.value = null);
};
onUpdated(() => {
  let telInput = document.querySelector('input[name="telephone"]');

  const telOptions = {
    mask: "+{7} (000) 000-00-00",
    lazy: false,
  };
  //------ маска телефона ------//
  const maskTel = IMask(telInput, telOptions);
  maskTel.on();
});

//------ Конвертация в Unicod для отправки в телеграм ------//
function convertToUnicod(text) {
  return text.replace(/[\u0080-\uFFFF]/g, function (s) {
    return "\\u" + ("000" + s.charCodeAt(0).toString(16)).substr(-4);
  });
}
const submitForma = () => {
  v$.value.$touch();
  const result = v$.value.$validate();
  // if (result) {
  //   isReady.value = result
  // } else {
  //   isReady.value = result
  // }
};
const resetForm = () => {
  ////form.value.username = '';

  v$.value.name.$model = "";
  v$.value.email.$model = "";
  v$.value.telephone.$model = "";
  //console.log(v$.value.name)
  v$.value.$reset;

  // v$.value.$reset()
  // formData.name = ''
};

const emit = defineEmits(["isVisible"]);
const isVisible = () => {
  //setTimeout(() => emit('isVisible'), 500);
  emit("isVisible");
  resetForm();
};

const submitForm = () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    var my_text =
      "Имя: " +
      formData.name +
      "%0A" +
      "Почта: " +
      formData.email +
      "%0A" +
      "Телефон:" +
      "%2b" +
      convertToUnicod(formData.telephone) +
      "%0A" +
      " " +
      formData.questiion +
      "Каким способом связаться:" +
      " " +
      formData.selectedCommunication +
      "%0A" +
      "Когда нужно связаться: " +
      formattedDate.value;
    var token2 = "7564255529:AAELnqPYEHTvtJzwSaf3tnn7JQb4whqx688";
    var chat_id2 = -1002378962422;
    // ОСНОВНАЯ ГРУППА
    var url2 = `https://api.telegram.org/bot${token2}/sendMessage?chat_id=${chat_id2}&text=${my_text}`;
    let api2 = new XMLHttpRequest();
    api2.open("GET", url2, true);
    //api2.send();
    // ДОПОЛНИТЕЛЬНАЯ ГРУППА
    var chat_id = -1002383432249;
    var url = `https://api.telegram.org/bot${token2}/sendMessage?chat_id=${chat_id}&text=${my_text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    //api.send();
    questiion.value = "";
    console.log("succes");
    isVisible();
  } else {
    console.log("bad");
  }
};
</script>
<template>
  <div class="container-modal" @click.self="isVisible(), v$.$reset()">
    <form class="reveal-modal" @submit.prevent="submitForm">
      <div class="block-">
        <p class="feedback__title title">Свяжемся с вами для консультации</p>
      </div>
      <div class="block-form">
        <div class="feedback__form">
          <div class="feedback__group" v-bind:class="{ 'fld-error': v$.name.$error }">
            <input
              v-model="formData.name"
              class="feedback__group-input"
              type="text"
              name="name"
              placeholder="Имя"
              @input="v$.name.$touch"
              maxlength="20"
            />
            <span v-for="error in v$.name.$errors" :key="error.$uid">
              {{ error.$message }}
            </span>
          </div>
          <div class="feedback__group" v-bind:class="{ 'fld-error': v$.email.$error }">
            <input
              v-model="formData.email"
              class="feedback__group-input"
              type="email"
              placeholder="your@email.ru"
              @input="v$.email.$touch"
              name="email"
            />
            <span v-for="error in v$.email.$errors" :key="error.$uid">
              {{ error.$message }}
            </span>
          </div>
          <div class="feedback__group" v-bind:class="{ 'fld-error': v$.telephone.$error }">
            <input
              v-model="formData.telephone"
              class="feedback__group-input phone_mask hover-group-input"
              type="tel"
              placeholder="Телефон"
              @input="v$.telephone.$touch"
              name="telephone"
            />
            <span v-for="error in v$.telephone.$errors" :key="error.$uid">
              {{ error.$message }}
            </span>
          </div>
          <div class="text">Выберите удобный способ для связи</div>
          <div class="btn-group">
            <div class="">
              <div class="btn-group__left">
                <div class="btn-inline">
                  <div class="checkbox-wrapper-18">
                    <div class="round">
                      <input type="checkbox" id="telephone" value="Телефон" v-model="formData.selectedCommunication" />
                      <label for="telephone"></label>
                    </div>
                  </div>
                  <p>Телефон</p>
                </div>
                <div class="btn-inline">
                  <div class="checkbox-wrapper-18">
                    <div class="round">
                      <input type="checkbox" id="Telegram" value="Telegram" v-model="formData.selectedCommunication" />
                      <label for="Telegram"></label>
                    </div>
                  </div>
                  <p>Telegram</p>
                </div>
              </div>
              <div class="btn-group__right">
                <div class="btn-inline">
                  <div class="checkbox-wrapper-18">
                    <div class="round">
                      <input type="checkbox" id="Whatsapp" value="Whatsapp" @click.stop v-model="formData.selectedCommunication" />
                      <label for="Whatsapp"></label>
                    </div>
                  </div>
                  <p>Whatsapp</p>
                </div>
                <div class="btn-inline">
                  <div class="checkbox-wrapper-18">
                    <div class="round">
                      <input type="checkbox" id="mail" value="Почта" v-model="formData.selectedCommunication" />
                      <label for="mail"></label>
                    </div>
                  </div>
                  <p>Почта</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="feedback__calendar">
          <div class="calendar-desk none-calendar">
            <div class="calendar-desk__header text">Выберите время для связи</div>
            <VDatePicker v-model="date" mode="dateTime" :min-date="new Date()" :color="selectedColor" :rules="rulesTime" is24hr />
          </div>
          <div class="calendar-mob show-calendar">
            <div class="text">Выберите время для связи</div>
            <VDatePicker
              v-model="date"
              mode="dateTime"
              :min-date="new Date()"
              :color="selectedColor"
              :rules="rulesTime"
              is24hr
              @dayclick="
                (_, event) => {
                  event.target.blur();
                }
              "
            >
              <template #default="{ togglePopover }">
                <div class="changeDate px-3 py-2 bg-blue-500 text-sm text-white font-semibold rounded-md" @click="togglePopover">
                  <p>Выберите дату</p>
                </div>
              </template>
            </VDatePicker>
            <div class="date">
              <p>Выбранная дата: {{ formattedDate }}</p>
              <div class="" v-show="visible" @click="dateNull()">
                <svg width="20" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z"
                    fill="#102938"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block-send">
        <button type="submit" class="form__button btn" data-form="">ОТПРАВИТЬ</button>
        <p class="feedback__bottom-text">
          Нажимая кнопку «отправить», вы соглашаетесь с
          <router-link :to="{ name: ROUTES_PATHS.POLICY }"> Политикой конфиденциальности.</router-link>
        </p>
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
@use "../../assets/styles/main.scss" as *;
.fld-error {
  background-color: $color-error !important;
}
.fld-success {
  background-color: $color-succes !important;
}
.date {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.btn-inline {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  flex: 0.7;
}
.feedback__calendar {
  height: 385px;
  margin-bottom: 20px;
  @media (max-width: $md4) {
    margin: 10px 0px;
    height: auto;
  }
  @media (max-width: $md3) {
    margin: 10px 0px;
    height: auto;
  }
}
.none-calendar {
  display: block !important;
  @media (max-width: $md4) {
    display: none !important;
  }
  @media (max-width: $md3) {
    display: none !important;
  }
}
.show-calendar {
  display: none;
  text-align: center;
  @media (max-width: $md4) {
    display: block;
  }
  @media (max-width: $md3) {
    display: block;
  }
}
.show-calendar > p {
  margin-bottom: 10px;
}
.show-calendar > .changeDate {
  display: flex;
  justify-content: center;
}
.show-calendar > .changeDate > p {
  border-bottom: 1px solid #ea5b0c;
  border-radius: 0%;
  padding-bottom: 5px;
}

.block-form {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media (max-width: $md4) {
    flex-direction: column;
  }
  @media (max-width: $md3) {
    flex-direction: column;
  }
}

.block-send {
  display: flex;
  flex-direction: column;
}

.errorSelected {
  display: none;
  position: absolute;
  top: 77%;
  margin-left: 15px;
  animation: shake 0.2s ease-in-out 0s 2;
  @media (max-width: $md4) {
    top: 67%;
  }
  @media (max-width: $md3) {
    top: 70%;
  }
}
.checkbox-wrapper-18 {
  margin-right: 10px;
}

.checkbox-wrapper-18 .round {
  position: relative;
}

.checkbox-wrapper-18 .round label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  width: 20px;
  display: block;
}

.checkbox-wrapper-18 .round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 5px;
  opacity: 0;
  position: absolute;
  top: 5px;
  transform: rotate(-45deg);
  width: 12px;
}

.checkbox-wrapper-18 .round input[type="checkbox"] {
  visibility: hidden;
  display: none;
  opacity: 0;
}

.checkbox-wrapper-18 .round input[type="checkbox"]:checked + label {
  background-color: #66bb6a;
  border-color: #66bb6a;
}

.checkbox-wrapper-18 .round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}

//////////
.test {
  background-color: #102938;
  color: white !important;
}

.text {
  font-weight: 500;
  color: #102938;
  font-size: 20px;
}
.calendar-desk__header {
  margin-bottom: 10px;
}
.btn-group {
  display: flex;
  flex-direction: column;
}
.btn-group__left {
  margin-bottom: 10px;
}

.btn-group__left,
.btn-group__right {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: $md4) {
    flex-direction: row;
  }
}

.btn-group__left > button,
.btn-group__right > button {
  align-items: center;
  justify-content: flex-start;
}

.btn-group__left > button > p,
.btn-group__right > button > p {
  margin: 0px 10px 0px 10px;
}

.btn-group button {
  display: flex;
  width: 40%;
  align-self: center;
  justify-content: space-between;
  padding: 10px 0px 10px 0px;
  color: #102938;
  font-weight: 500;
  transition: all 0.3s ease 0s;
  font-size: 14px;
}

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
  color: red;
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
  position: fixed;
  // visibility: hidden;
  z-index: 11;
  // display: none;
  background-color: rgba(22, 22, 22, 0.5);
}

.reveal-modal {
  display: flex;
  position: relative;
  padding-bottom: 20px;
  padding-top: 25px;
  margin: 0 auto;
  top: 15%;
  background-color: white;
  width: 780px;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  border-radius: 10px;
  -webkit-box-shadow: 1px 1px 50px 29px rgba(34, 33, 33, 0.8);
  -moz-box-shadow: 1px 1px 50px 29px rgba(34, 33, 33, 0.8);
  box-shadow: 1px 1px 50px 29px rgba(34, 33, 33, 0.8);

  @media (max-width: $md3) {
    width: 500px;
    padding-top: 5px;
  }

  @media (max-width: $md4) {
    width: 380px;
    // padding-top: 5px;
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
    width: 50%;
    display: flex;
    flex-direction: column;
    @media (max-width: $md4) {
      width: 90%;
    }
    @media (max-width: $md3) {
      width: 90%;
    }
  }

  &__title {
    margin: 0 0 20px;

    &.title {
      font-size: 34px;
      font-weight: 600;
      line-height: 1.2;
      text-align: center;
      @media (max-width: $md4) {
        font-size: 30px;
        margin: 0 0 20px;
      }
      @media (max-width: $md3) {
        font-size: 28px;
        margin: 10px 0 10px;
      }
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
    animation: shake 0.2s ease-in-out 0s 2;
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
