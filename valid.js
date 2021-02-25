class Valid {
    regExpForName = /^[a-zа-яА-ЯёЁ]+$/i;
    regExpForTel = /^\+7\(\d{3}\)\d{3}-\d{4}$/;
    regExpForEmail = /^[a-z]{2,6}[.-]?[a-z]{4}@mail\.ru$/i;

    constructor(name, tel, email) {
            this.name = document.getElementById(name);
            this.tel = document.getElementById(tel);
            this.email = document.getElementById(email);
            this.init();
        }

        init() {
            this._validateName();
            this._validateTel();
            this._validateEmail();
        }

        _validateName () {
            if (this.regExpForName.test(this.name.value)) {
                this.removeError();
                this.name.classList.remove('mistake');
            }else {
                this.name.classList.add('mistake');
                this.name.insertAdjacentHTML('afterend', `<span class="error">Допустимые символы для ввода: <b>[a-z],[а-я],[А-Я],[ёЁ]</b></span>`);
            }
        }

        _validateTel () {
            if (this.regExpForTel.test(this.tel.value)) {
                this.removeError();
                this.tel.classList.remove('mistake');
            }else {
                this.tel.classList.add('mistake');
                this.tel.insertAdjacentHTML('afterend', `<span class="error">Телефон пишется в формате: <b>+7(000)000-0000</b></span>`);
            }
        }

        _validateEmail () {
            if (this.regExpForEmail.test(this.email.value)) {
                this.removeError();
                this.email.classList.remove('mistake');
            }else {
                this.email.classList.add('mistake');
                this.email.insertAdjacentHTML('afterend', `<span class="error">E-mail должен быть вида: <b>mymail@mail.ru</b>, или <b>my.mail@mail.ru</b>, или <b>my-mail@mail.ru</b></span>`);
            }
        }

        removeError() {
            let error = document.querySelectorAll('.error');
            error.forEach(er => er.remove());
        }
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    new Valid('name', 'tel', 'email');
});