<template>
  <div class="g-box">
    <nav class="g-box--nav g-box--container">
      <app-nav class=""></app-nav>
    </nav>
    <div class="g-box--body g-box--container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import appNav from './nav.vue'
  export default {
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {
      appNav
    }
  }
</script>

<style lang="scss" scoped="">

  @import "src/assets/scss/_variables";
  @import "src/assets/scss/_sprites";
  @import "src/assets/scss/_mixins";

  $btn-coefficient: .1640625;
  $btn-width: calc(100vw * #{$btn-coefficient});

  .g-box {
    position: relative;
    width: 447px;
    max-width: 100%;

    @include br-xs {
      width: 100%;


    }

    &:after {
      content: '';
      position: absolute;
      top: -7px;
      left: calc(100% + 65px);
      @extend .bg-title;

      @include br-sm {
        display: none;
      }
    }

    @include br-sm {
      margin: 0 auto;
    }

    &--container {
      border: 1px solid rgba($c-darkblue, .3);
      background-color: rgba($c-darkblue2, .5);
    }

    &--nav {
      height: 50px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      margin-bottom: 10px;

      @include br-md {
        display: none;
      }
    }

    &--body {
      padding: 30px 65px;
      min-height: 575px;

      @include br-xs {
        padding: 20px;
      }

      @include br-md {
        margin-top: 10px;


      }
    }

  }

</style>
