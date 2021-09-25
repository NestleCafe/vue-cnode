import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dayjs from './utils/dayjs'
import BasicContainer from './components/BasicContainer.vue'
import icon from './components/Icon.vue'


Vue.config.productionTip = false

Vue.prototype.$dayjs = dayjs
Vue.component("icon", icon);
Vue.component("BasicContainer", BasicContainer);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
