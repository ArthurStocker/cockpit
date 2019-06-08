import Vue from 'vue'
import '@/plugins/bootstrap-vue.js'
import app from '@/App.vue'
import store from '@/store.js'
import router from '@/router.js'
import '@/registerFontAwsome.js'
import '@/registerServiceWorker.js'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(app)
}).$mount('#app')
