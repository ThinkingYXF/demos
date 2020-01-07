import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Login = ()=> import('../components/Login.vue')
const HelloWorld = ()=> import('../components/HelloWorld.vue')


const routes = [{
  path: '/',
  component: Login
},{
  path: '/login',
  component: Login
},{
  path: '/hello',
  component: HelloWorld
}]

const router = new VueRouter({
  routes
})

export default router