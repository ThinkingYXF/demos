import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './mock/mock'

Vue.config.productionTip = false

import api from './http/api'
Vue.prototype.$api = api

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
