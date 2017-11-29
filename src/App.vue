<template>
  <div id="app">
    <slideout class="main-container" menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']">
      <nav id="menu">
        <g-nav class="mob-menu"></g-nav>
      </nav>
      <main id="panel">
        <button class="toggle-button" type="button">☰</button>
        <router-view/>
      </main>
    </slideout>
  </div>
</template>

<script>

  import slideout from 'vue-slideout'
  import gNav from './components/guest/main-parts/nav.vue'

  export default {
    name: 'app',
    components: {
      slideout,
      gNav
    }
  }
</script>

<style lang="scss">

  @import "./assets/scss/styles";
  @import "./assets/scss/mixins";

  #panel {
    > .toggle-button {
      display: none;
      position: fixed;
      top: 10px;
      left: 10px;
      appearance: none;
      border: none;
      background: none;
      color: #ffffff;
      font-size: 25px;
      cursor: pointer;

      @include br-md {
        display: block;
      }
    }
  }

  .main-container {
    touch-action: none; // fix chrome warning
  }

  .mob-menu {
    justify-content: flex-start !important;
    flex-direction: column;
    height: 100%;
    padding: 40px 20px;

    li {
      + li {
        margin-top: 20px;
      }
    }

    a {
      font-size: 25px;
    }
  }


</style>
