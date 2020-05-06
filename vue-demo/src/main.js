import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './mock/mock'

Vue.config.productionTip = false

import http from './http/http'
Vue.prototype.$http = http

//mint-ui
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUi)

//elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
