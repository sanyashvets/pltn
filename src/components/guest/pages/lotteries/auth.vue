<template>
  <form class="g-auth" @submit.prevent="submit">
    <p class="g-auth--title">
      Зарегистрируйся сейчас:
    </p>
    <div class="form__group">
      <input type="email" class="form__control" placeholder="Введите E-mail" v-model="email">
    </div>
    <div class="form__group">
      <input type="password" class="form__control" placeholder="Введите пароль" v-model="password">
    </div>
    <div class="form__group">
      <button type="submit" class="g-auth--btn">
        <span></span>
      </button>
    </div>
    <div class="form__group">
      <p class="agreement">Регистрируясь в казино Русский Вулкан, Вы соглашаетесь с
        <router-link :to="{name: 'dummy'}">правилами казино</router-link>.
      </p>
    </div>
  </form>
</template>

<script>

  import {Validator} from 'vee-validate'

  export default {
    validator: null,
    data() {
      return {
        email: '',
        password: '',
        errs: ''
      }
    },
    methods: {
      /**
       * Инициализация валидатора
       *
       */
      initValidator() {
        this.validator = new Validator();

        this.validator.attach('email', 'required|email', {
          alias: 'E-mail'
        });
        this.validator.attach('pswd', 'required|min:6|max:20', {
          alias: 'Пароль'
        });

        this.$set(this, 'errs', this.validator.errors);
      },
      /**
       * Сабмит авторизации
       *
       * Отправляет запрос на сервер и по приходу ответа происходит/не происходит авторизация
       */
      submit() {
        this.validator.validateAll({
          email: this.email,
          pswd: this.password
        }).then(r => {
          if (r) {
            // this.$store.dispatch('user/authorization', {login: this.email, password: this.password}) - здесь у нас запрос.
            // Хранилище под 1 запрос-заглушку я не ставил
          }
        })
      }
    },
    created() {
      this.initValidator()
    },
    computed: {},
    components: {}
  }
</script>

<style lang="scss" scoped="">

  /**
  * здесь есть одна замечательная кнопочка регистрации. Сначала я думал её сделать градиентом,
  * но эта идея быстро отпала ввиду невероятного кол-ва мелочей. И, даже если использовать генератор,
  * то ничего хорошего с этого не получится. Поэтому заюзал спрайт. В этом подходе тоже тоже не всё гладко,
  * т.к. всё привязано к самим параметрарм спрайта (отступ между картинками, например).. В общем, буду рад,
  * если подскажете вменяемый инструмент для заделывания таких кнопок. Всё было хорошо в спрайте до тех пор, пока
  * ему не надо было ресайзиться на респонзиве при всех разрешениях
  *
   */
  @import "src/assets/scss/_variables";
  @import "src/assets/scss/_mixins";
  @import "src/assets/scss/_sprites";

  .g-auth {

    &--title {
      color: $c-orange;
      font-size: 18px;
      font-family: $f-os-bold;
      margin-bottom: 13px;
      text-align: center;
    }

    .form {
      &__control {
        padding: 15px 15px 15px;
        font-size: 18px;
        text-align: center;
        position: relative;
        z-index: 5;
      }
    }

    &--btn {
      position: relative;
      width: 100%;
      height: 66px;
      padding: 0;
      appearance: none;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;

      @include br-xs {
        height: 80px;
      }

      @include br-custom(400px) {
        height: 60px;
      }

      @include br-custom(360px) {
        span {
          background-position: 103% 0;
          background-size: 198%;
        }
      }

      @include br-exs {
        span {
          background-position: 104% 0;
          background-size: 194%;
        }
      }

      span {
        position: absolute;
        top: -13px;
        left: -17px;
        pointer-events: none;
        @extend .bg-btn_usual;
      }

      &:hover {
        // эта кнопка сводит меня с ума
        span {
          left: -16px;
          @extend .bg-btn_hover;
        }
      }
    }

    .agreement {
      width: 80%;
      margin: 0 auto;
      text-align: center;
      font-size: 12px;
      line-height: 1.5;
      color: $c-lightblue2;

      a {
        color: $c-orange;
        text-decoration: underline;
      }
    }
  }


</style>
