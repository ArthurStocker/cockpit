import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: [
      {
        displayname: 'Cockpit',
        destination: {
          name: 'cockpit',
          path: '/cockpit',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "cockpit" */ '@/components/AppMainsection.vue')
        },
        children: [
          {
            displayname: 'Hello World 1',
            destination: {
              name: 'section1',
              path: '//section1',
              alias: '/section1/*',
              component: () =>
                import(/* webpackChunkName: "HelloWorld" */ '@/views/HelloWorld.1.vue')
            },
            icon: ['fas', 'ellipsis-v']
          },
          {
            displayname: 'Hello World 2',
            destination: {
              name: 'section2',
              path: '//section2',
              alias: '/section2/*',
              component: () =>
                import(/* webpackChunkName: "about" */ '@/views/HelloWorld.2.vue')
            },
            icon: ['fas', 'ellipsis-v']
          }
        ],
        icon: ['fas', 'digital-tachograph']
      },
      {
        displayname: 'X Plane',
        destination: {
          name: 'xplane',
          path: '/xplane',
          component: () =>
            import(/* webpackChunkName: "xplane" */ '@/components/AppMainsection.vue')
        },
        icon: ['fas', 'paper-plane']
      },
      {
        displayname: 'Gauges',
        destination: {
          name: 'gauges',
          path: '/gauges',
          component: () =>
            import(/* webpackChunkName: "gauges" */ '@/components/AppMainsection.vue')
        },
        icon: ['fas', 'tachometer-alt']
      },
      {
        displayname: 'Tables',
        destination: {
          name: 'tables',
          path: '/tables',
          component: () =>
            import(/* webpackChunkName: "tables" */ '@/components/AppMainsection.vue')
        },
        icon: ['fas', 'table']
      },
      {
        displayname: 'Graphs',
        destination: {
          name: 'graphs',
          path: '/graphs',
          component: () =>
            import(/* webpackChunkName: "graphs" */ '@/components/AppMainsection.vue')
        },
        icon: ['fas', 'chart-line']
      },
      {
        displayname: 'About',
        destination: {
          name: 'about',
          path: '/',
          component: () =>
            import(/* webpackChunkName: "about" */ '@/components/AppMainsection.vue')
        },
        icon: ['fas', 'bookmark']
      }
    ],
    hw1: 'This is a VueJS Application'
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {}
})
