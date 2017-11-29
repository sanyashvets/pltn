<template>
  <div class="g-footer">
    <ul class="list-unstyled g-footer__partners">
      <li><a href="#" class="bg-visa" target="_blank" rel="nofollow nofollow"></a></li>
      <li><a href="#" class="bg-ms" target="_blank" rel="nofollow nofollow"></a></li>
      <li><a href="#" class="bg-qiwi" target="_blank" rel="nofollow nofollow"></a></li>
      <li><a href="#" class="bg-wallet" target="_blank" rel="nofollow nofollow"></a></li>
      <li><a href="#" class="bg-moneta" target="_blank" rel="nofollow nofollow"></a></li>
      <li><a href="#" class="bg-ya" target="_blank" rel="nofollow nofollow"></a></li>
      <li><a href="#" class="bg-wm" target="_blank" rel="nofollow nofollow"></a></li>
    </ul>
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

<style lang="scss">

  @import "src/assets/scss/_variables";
  @import "src/assets/scss/_mixins";

  .g-footer {
    display: flex;
    justify-content: center;
    margin-top: 80px;

    @include br-sm {
      margin-top: 30px;


    }

    &__partners {
      display: flex;
      align-items: center;

      @include br-sm {
        flex-wrap: wrap;
        justify-content: space-around;

        > li {
          margin-top: 20px;

          + li {
            margin-left: 0;
          }
        }
      }

      > li {
        + li {
          margin-left: 18px;
        }
      }

       a {
         display: block;
       }
    }
  }

</style>
