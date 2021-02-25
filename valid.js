class Valid {

        constructor(name, tel, email) {
            this.name = name;
            this.tel = tel;
            this.email = email;
            this.init();
        }

        init() {
            this._checkInputName();
            this._checkInputTel();
            this._checkInputEmail();
        }

        _checkInputName () {
            if (/^[a-zа-яА-ЯёЁ]+$/i.test(document.getElementById(this.name).value)) {
                return;
            }else {
                document.getElementById(this.name).classList.add('mistake');
                document.getElementById(this.name).insertAdjacentHTML('afterend', `<span class="error">Допустимые символы для ввода: <b>[a-z],[а-я],[А-Я],[ёЁ]</b></span>`);
            }
        }

        _checkInputTel () {
            if (/^\+7\({1}\d{3}\)\d{3}-\d{4}$/.test(document.getElementById(this.tel).value)) {
                return;
            }else {
                document.getElementById(this.tel).classList.add('mistake');
                document.getElementById(this.tel).insertAdjacentHTML('afterend', `<span class="error">Шаблон формата для ввода: <b>+7(000)000-0000</b></span>`);
            }
        }

        _checkInputEmail () {
            if (/^[a-z]{2,6}[.-]?[a-z]{4}@mail\.ru$/i.test(document.getElementById(this.email).value)) {
                return;
            }else {
                document.getElementById(this.email).classList.add('mistake');
                document.getElementById(this.email).insertAdjacentHTML('afterend', `<span class="error">E-mail может иметь вид <b>mymail@mail.ru</b>, или <b>my.mail@mail.ru</b>, или <b>my-mail@mail.ru</b></span>`);
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