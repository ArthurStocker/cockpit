<template>
  <b-row id="app-mainsection">
    <app-menulist :routes="routes" />
    <router-view />
  </b-row>
</template>

<style lang="scss">
#app-mainsection {
  margin: 0px;
  height: 100vh;
}
</style>

<script>
// @ is an alias to /src
import AppMenulist from '@/components/AppMenulist.vue'

export default {
  name: 'app-mainsection',
  props: ['routes'],
  components: {
    AppMenulist
  }
}
</script>
