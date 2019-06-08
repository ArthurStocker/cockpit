<template>
  <div id="app">
    <b-container fluid>
      <app-header />
      <app-navigation />
      <router-view />
    </b-container>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i&display=swap&subset=latin-ext");
@import "@/assets/scss/base.scss";
@import "@/assets/scss/fonts.scss";

/* app definition */
#app {
  color: #333333; //#2c3e50;
  font-size: 12px;
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue'
import AppNavigation from '@/components/AppNavigation.vue'

import { getRouterPath } from '@/router-helper.js'

export default {
  name: 'app',
  created () {
    this.$router.addRoutes(this.$store.state.routes.map(getRouterPath))
  },
  components: {
    AppHeader,
    AppNavigation
  }
}
</script>
