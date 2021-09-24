import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dayjs from './utils/dayjs'
import icon from './components/Icon.vue'
Vue.prototype.$dayjs = dayjs
Vue.config.productionTip = false

Vue.component("icon", icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')