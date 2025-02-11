<script setup>
import { ref, onUpdated, computed} from "vue";
import { ROUTES_PATHS } from "../../constants";
import moment from 'moment'
let name = ref("");
let email = ref("");
let telephone = ref("");
let questiion = ref("");
let errorName = ref("");
let errorTel = ref("");
let errorEmail = ref("");
let errorSelected = ref("");
let date = ref(new Date());

let isSuccesTel = ref(false);
let isSuccesName = ref(false);
let isSuccesEmail = ref(false);
let selectedCommunication = ref([])
const selectedColor = ref('orange');
  const formattedDate = computed(() => {
    return moment(date.value).format('DD-MM-YYYY HH:mm')
})
onUpdated(() => {
  let nameInput = document.querySelector('input[name="name"]'); //Доступ к полям ввода
  let telInput = document.querySelector('input[name="telephone"]');
  let emailInput = document.querySelector('input[name="email"]');

  let nameError = document.querySelector('input[name="name"]').nextElementSibling;
  let telError = document.querySelector('input[name="telephone"]').nextElementSibling;
  let emailError = document.querySelector('input[name="email"]').nextElementSibling;

  const inputs = document.querySelectorAll(".feedback__group");

  const telOptions = {
    mask: "+{7} (000) 000-00-00",
    lazy: false,
  };

  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  function isEmailValid(value) {
 	return EMAIL_REGEXP.test(value);
}
function onInput() {
	if (isEmailValid(email.value)) {
		inputs[1].classList.remove("error");
      inputs[1].classList.add("success");
      emailError.classList.remove("name-error");
      isSuccesEmail.value = true;
	} else {
		inputs[1].classList.remove("success");
      inputs[1].classList.add("error");
      errorEmail.value = "Заполните поле";
      emailError.classList.add("name-error");
      isSuccesEmail.value = false;
	}
  console.log(isEmailValid(email.value))
}
emailInput.addEventListener('input', onInput);



  const maskTel = IMask(telInput, telOptions);
  maskTel.on(
    "complete",
    () => {
      inputs[2].classList.remove("error");
      inputs[2].classList.add("success");
      telError.classList.remove("name-error");
      isSuccesTel.value = true;
    },
    maskTel.on("accept", () => {
      inputs[2].classList.remove("success");
      inputs[2].classList.add("error");
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
function convertToUnicod(text) {
  return text.replace(
    /[\u0080-\uFFFF]/g,
    function (s) {
        return "\\u" + ('000' + s.charCodeAt(0).toString(16)).substr(-4);
    }
)
}
function sendMessage() {
  let nameError = document.querySelector('input[name="name"]').nextElementSibling;
  let telError = document.querySelector('input[name="telephone"]').nextElementSibling;  
  let emailError = document.querySelector('input[name="email"]').nextElementSibling;
  let selectedError = document.querySelector('.errorSelected');

  const inputs = document.querySelectorAll(".feedback__group");
  console.log(formattedDate.value)
  if (isSuccesName.value && isSuccesTel.value && isSuccesEmail.value && isSuccesEmail.value && selectedCommunication.value.length !== 0) {
    console.log(selectedCommunication.value.length !== 0)
    var my_text = "Имя: "+ name.value + "%0A" + 
                  "Почта: " + email.value + "%0A" +
                  "Телефон:"+ "%2b" + convertToUnicod(telephone.value) + 
                  "%0A" + " " + questiion.value + 
                  "Каким способом связаться:" + " " + selectedCommunication.value + "%0A" +
                  "Когда нужно связаться: " + formattedDate.value;
    var token2 = "7564255529:AAELnqPYEHTvtJzwSaf3tnn7JQb4whqx688";
    var chat_id2 = -1002378962422;
    // ОСНОВНАЯ ГРУППА
    var url2 = `https://api.telegram.org/bot${token2}/sendMessage?chat_id=${chat_id2}&text=${my_text}`;
    let api2 = new XMLHttpRequest();
    api2.open("GET", url2, true);
  

    // ДОПОЛНИТЕЛЬНАЯ ГРУППА
    var chat_id = -1002383432249;
    var url = `https://api.telegram.org/bot${token2}/sendMessage?chat_id=${chat_id}&text=${my_text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    name.value = "";
    email.value = "";
    telephone.value = "";
    questiion.value = "";
    document.querySelectorAll('.round > input').forEach(function(checkbox) {
  checkbox.checked = true; 
});
    isSuccesName.value = false;
    isSuccesTel.value = false;
    isSuccesEmail.value = false
    // telError.classList.add('send-message')
    // this.errorTel = "Сообщение отправлено"
    // console.log('succes')
  } else {
    telError.classList.add("name-error");
    emailError.classList.add("name-error");
    inputs[1].classList.add("error");
    inputs[2].classList.add("error");
    nameError.classList.add("name-error");
    errorName.value = "Заполните поле";
    errorEmail.value = "Заполните поле";
    inputs[0].classList.add("error");
    errorTel.value = "Заполните поле";
    selectedError.classList.add("name-error");
    errorSelected.value = "Выберите хотя бы один способ связи"
  }
}
</script>
<template>
  <!-- <div class="container-modal" @click.self="$emit('someEvent')"> -->
    
  <div class="container-modal" @click.self="$emit('isVisible')">
    <div class="reveal-modal">
      <div class="block-">
      <p class="feedback__title title">Свяжемся с вами для консультации</p>
    </div>
      <div class="block-form">  
      <div class="feedback__form">
        <div class="feedback__group">
          <input v-model="name" class="feedback__group-input hover-group-input" type="text" name="name"
            placeholder="Имя" maxlength="20" />
          <span>{{ errorName }}</span>
        </div>
        <div class="feedback__group">
          <input v-model="email" class="feedback__group-input hover-group-input" type="email"
            placeholder="your@email.ru" name="email" required="" />
          <span>{{ errorEmail }}</span>
        </div>
        <div class="feedback__group">
          <input v-model="telephone" class="feedback__group-input phone_mask hover-group-input" type="tel"
            placeholder="Телефон" name="telephone" required="" />
          <span>{{ errorTel }}</span>
        </div>
        
        <div class="text">Выберите способ для связи</div>
        <div class="btn-group">
          <div class="">
          <div class="btn-group__left">
          <button class="">
            <div class="checkbox-wrapper-18">
              <div class="round">
                <input type="checkbox" id="telephone" value="telephone" v-model="selectedCommunication"/>
                <label for="telephone"></label>
                </div>
              </div>
              <p>Телефон</p>
            <img 
              src="../../assets/icons/form-telephone.svg"
              alt="Иконка Telephone" />
            
          </button>
          <button class="">
            <div class="checkbox-wrapper-18">
              <div class="round">
                <input type="checkbox" id="Telegram" value="Telegram" v-model="selectedCommunication"/>
                <label for="Telegram"></label>
                </div>
              </div>
              <p>Telegram</p>
            <img 
              src="../../assets/icons/header-telegram.svg" 
              alt="Иконка Telegram" />
              
            </button>
          </div>
          <div class="btn-group__right">
          <button class="">
            <div class="checkbox-wrapper-18">
              <div class="round">
                <input type="checkbox" id="Whatsapp" value="Whatsapp" v-model="selectedCommunication"/>
                <label for="Whatsapp"></label>
                </div>
              </div>
              <p>Whatsapp</p>
            <img 
              src="../../assets/icons/header-whatsapp.svg" 
              alt="Иконка Whatsapp" />
              
          </button>
          <button class="">
            <div class="checkbox-wrapper-18">
              <div class="round">
                <input type="checkbox" id="mail" value="mail" v-model="selectedCommunication"/>
                <label for="mail"></label>
                </div>
              </div>
              <p>Почта</p>
            <img 
              src="../../assets/icons/form-email.svg"
              alt="Иконка email" />
          </button>
        </div>
        </div>
        <span class="errorSelected" :class="[selectedCommunication.length == 0 ? 'name-error' : '']">{{ errorSelected }}</span>

      </div>
    </div>
      <div class="calendar-desk none-calendar">
        <VDatePicker v-model="date" mode="dateTime"  :color="selectedColor" is24hr />
        
    </div>
      <div class="calendar-mob show-calendar">
        <VDatePicker v-model="date" mode="dateTime" :color="selectedColor" is24hr>
          <template #default="{ togglePopover }">
            
            <button
              class=" px-3 py-2 bg-blue-500 text-sm text-white font-semibold rounded-md"
              @click="togglePopover"
            >
              Выберите дату
            </button>
            
          </template>
          
  </VDatePicker>
  <p>Выбранная дата </br>{{ formattedDate  }}</p>
      </div>
      
    </div>
    <div class="block-send">
    <button @click="sendMessage" type="submit" class="form__button btn" data-id="#consultationForm2"
    data-form="">ОТПРАВИТЬ</button>
    <p class="feedback__bottom-text">
        Нажимая кнопку «отправить», вы соглашаетесь с
        <router-link :to="{ name: ROUTES_PATHS.POLICY }"> Политикой конфиденциальности.</router-link>
      </p>
    </div>
    </div>
    
    
  </div>
<!--  -->






<!--  -->
</template>
<style lang="scss" scoped>
@use "../../assets/styles/main.scss" as *;
.none-calendar {
  display: block !important;
  @media (max-width: $md4) {
    display: none !important;
  };
  @media (max-width: $md3) {
    display: none !important;
  };
}
.show-calendar {
  display: none;
  text-align: center;
  @media (max-width: $md4) {
    display: block;
  };
  @media (max-width: $md3) {
    display: block;
  };
}
.show-calendar > p {
  margin-bottom: 10px;
}
.show-calendar > button {
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
  };
  @media (max-width: $md3) {
    flex-direction: column;
  };
}

.block-send {
  display: flex
;
    flex-direction: column;
}

.errorSelected {
  display: none;
  margin-left: 15px;
  animation: shake 0.2s ease-in-out 0s 2;
}

.checkbox-wrapper-18 .round {
    position: relative;
  }

  .checkbox-wrapper-18 .round label {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 28px;
    width: 28px;
    display: block;
  }

  .checkbox-wrapper-18 .round label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 8px;
    opacity: 0;
    position: absolute;
    top: 9px;
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
    text-align: center;
}

.btn-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.btn-group__left, .btn-group__right {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: $md4) {
    flex-direction: row;
  };
}

.btn-group__left > button, .btn-group__right > button {
  align-items: center;
  justify-content: flex-start;
}

.btn-group__left > button > p, .btn-group__right > button > p {
  margin: 0px 10px 0px 10px;
}

.btn-group button {
  display: flex;
  width: 40%;
  align-self: center;
  justify-content: space-between;
  padding: 10px 0px 10px 0px;
  color: #102938;;
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
  position: absolute;
  // visibility: hidden;
  z-index: 11;
  // display: none;
  background-color: rgba(22, 22, 22, 0.5);
}

.reveal-modal {
  display: flex;
  position: relative;
  padding-bottom: 20px;
  padding-top: 50px;
  margin: 0 auto;
  top: 10%;
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
  };

  @media (max-width: $md4) {
    width: 380px;
    padding-top: 5px;
  };
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
    width: 35%;
    display: flex;
    flex-direction: column;
    @media (max-width: $md4) {
      width: 90%;
  };
  @media (max-width: $md3) {
      width: 90%;
  };
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
