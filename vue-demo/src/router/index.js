import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Login = ()=> import('../views/Login.vue')
const HelloWorld = ()=> import('../views/HelloWorld.vue')


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