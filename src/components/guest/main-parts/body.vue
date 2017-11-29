<template>
  <div class="g-body">
    <div class="container">
      <slot></slot>
    </div>
  </div>
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
  @import "src/assets/scss/_mixins";

  .g-body {
    background: #000 url(/static/img/bg.jpg) 70% 0 no-repeat;
    padding: 40px 0;

    @include br-sm {
      background-position: 50% 0;
    }
  }


</style>
