<template>
  <app-body>
    <pages-box>
      <router-view></router-view>
    </pages-box>
    <app-footer></app-footer>
  </app-body>
</template>

<script>

  import appBody from './main-parts/body.vue'
  import appFooter from './main-parts/footer.vue'
  import appNav from './main-parts/nav.vue'
  import pagesBox from './main-parts/pages-box.vue'

  export default {
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {
      appBody,
      appFooter,
      appNav,
      pagesBox
    }
  }
</script>

<style>
</style>
