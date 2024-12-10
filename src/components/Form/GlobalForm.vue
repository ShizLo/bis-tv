<script>
export default {
    props: {

    },
    computed: {

    }
}
</script>
<template>
    <section class="global-form">
        <div class="_container global-form_mt">
            <div class="form-bl brd">
                <form class="form-submit" style="padding-bottom: 0;">
                    <div class="form__title">Оставьте заявку</div>
                    <input type="hidden" name="subject" value="Оставьте заявку">
                    <p>Напишите нам свой вопрос или позвоните по номеру +7 981 999-99-96</p>
                    <div class="flex-input">
                        <div class="col">
                            <input type="text" name="Ваше имя" value="" id="input-name" placeholder="Ваше имя">
                        </div>
                        <div class="col">
                            <input type="email" name="Ваша почта" value="" placeholder="Ваша почта" id="input-email"
                                required="">
                        </div>
                        <div class="col">
                            <textarea name="Задайте ваш вопрос" placeholder="Задайте ваш вопрос"></textarea>
                        </div>
                        <input type="hidden" name="Ссылка источник" value="https://sewera.ru/contacts/">
                    </div>
                    <input class="form__button button_mtp" type="submit" value="Отправить">
                </form>
            </div>
        </div>
    </section>
</template>
<style lang="scss"coped>
@use "../../assets/styles/app.scss" as c;

.flex-input {
    display: flex;
    flex-wrap: wrap;
    
    @media (max-width: 558px) {
      flex-direction: column;
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
    @media (max-width: c.$md3) {
        margin-right: 0px;
    }
}
.col:nth-child(3) {
    flex-grow: 10;
    order: 3;
    margin-right: 10px;
    @media (max-width: c.$md3) {
        margin-right: 0px;
    }
}
input[type='email'], input[type='password'], input[type='tel'], input[type='text'], textarea {
    width: 100%;
    height: auto;
    color: #333;
    font-size: 20px ;
    vertical-align: top;
    padding: 10px 0 4px;
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
.global-form {
    margin-top: 2rem;
}
:focus, a, button, input, textarea {
    outline: 0;
}
textarea {
    resize: none;
    overflow: hidden;
    height: 45px;
}
.form__title {
    font-size: 30px;
    font-weight: 600;
    background: #fff;
    display: inline-block;
    border-radius: 32px;
    color: #102938;
}
.form-submit p {
    padding-bottom: 24px;
    color: #102938;
    font-size: 22px;
}
.form__button {
    font-weight: 500;
    padding: 11px 14px;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #102938;
    background: rgba(245, 245, 245, 0);
    color: #102938;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    font-size: 20px;
}
.button_mtp {
    margin-top: 20px;
    margin-bottom: 20px;
}
.form__button:hover {
    background: #102938;
    color: #f5f5f5;
    border-color: #102938;
}
.form-bl.brd {
    color: #102938;
    text-align: left;
    padding: 28px 33px 1px;
    border: 3px solid #e4e9ec;
    border-radius: 6px;
    box-sizing: border-box;
}

</style>