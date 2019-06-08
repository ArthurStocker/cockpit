<template>
  <b-row id="app-navigation">
    <b-col id="nav-menubar">
      <b-nav class="nav-menubar">
        <b-nav-item v-for="route in routes" v-bind:key="route.destination.name" :to="route.destination" class="nav-menubar-item">
          <font-awesome-icon :icon="route.icon" />&nbsp;{{ route.displayname }}
        </b-nav-item>
      </b-nav>
    </b-col>
  </b-row>
</template>

<style lang="scss">
/* nav-vertical definition */
#app-navigation {
  margin: 0px;
}
#nav-menubar {
  border-top: 1px solid #c0c0c0;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid #c0c0c0;
  a {
    &.router-link-exact-active {
      color: #2673bf;
    }
  }
}
</style>

<script>
export default {
  name: 'app-navigation',
  computed: {
    routes () {
      return this.$store.state.routes
    }
  }
}
</script>
