<template>
  <b-col id="nav-menulist" sm="1">
    <b-nav class="nav-menulist">
      <b-nav-item v-for="route in routes" v-bind:key="route.destination.name" :to="route.destination" class="nav-menulist-item">
        <font-awesome-icon :icon="route.icon" />&nbsp;{{ route.displayname }}
      </b-nav-item>
    </b-nav>
  </b-col>
</template>

<style lang="scss">
/* nav-vertical definition */
#nav-menulist {
  padding: 0.5rem 0rem;
  border-top: 0px;
  border-left: 0px;
  border-right: 1px solid #c0c0c0;
  border-bottom: 0px;
  a {
    &.router-link-exact-active {
      color: #2673bf;
    }
  }
}
.nav-menulist-item {
  padding: 0rem 1rem;
}
</style>

<script>
export default {
  name: 'nav-menulist',
  props: ['routes'],
  created () {},
  data () {
    return {}
  }
}
</script>
