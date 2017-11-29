<template>
  <ul class="g-nav list-unstyled">
    <template v-if="false">
      комменты скрыл от рендера

      я не ставил здесь много страниц всяких. Обошелся текущей и заглушкой
    </template>
    <router-link active-class="active" tag="li" exact="" :to="{name: 'dummy'}"><a>Игровой зал</a></router-link>
    <router-link active-class="active" tag="li" exact="" :to="{name: 'dummy'}"><a>Гаминатор</a></router-link>
    <router-link active-class="active" tag="li" exact="" :to="{name: 'lotteries'}"><a>Лотереи</a></router-link>
    <router-link active-class="active" tag="li" exact="" :to="{name: 'dummy'}"><a>Бонусы</a></router-link>
    <router-link active-class="active" tag="li" exact="" :to="{name: 'dummy'}"><a>VIP-клуб</a></router-link>
  </ul>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>

<style lang="scss" scoped="">

  @import "src/assets/scss/_variables";

  .g-nav {
    display: flex;
    justify-content: space-between;
    flex: 1 1 auto;

    a {
      padding: 5px 5px;
      color: $c-lightblue;
      text-transform: uppercase;
      font-size: 11px;
      white-space: nowrap;
      &:hover {
        color: $c-lightblue2;
      }
    }

    > li {
      &.active {
        a {
          color: $c-orange;
        }
      }
    }
  }


</style>
