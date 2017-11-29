<template>
  <div class="pg-lottery">
    <div class="logo-box">
      <router-link :to="{name: ''}">
        <img src="/static/img/work.png" alt="Logo">
      </router-link>
    </div>
    <auth></auth>
  </div>
</template>

<script>
  import auth from './auth.vue'
  export default {
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {
      auth
    }
  }
</script>

<style lang="scss" scoped="">

  @import "src/assets/scss/_variables";

  .pg-lottery {
    .logo-box {
      margin-bottom: 20px;
      text-align: center;
    }
  }



</style>
