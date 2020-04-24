import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const VueRouterPush = VueRouter.prototype.push 
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}



const Login = ()=> import('../components/Login.vue')
const HelloWorld = ()=> import('../components/HelloWorld.vue')
const Home = ()=> import('../pages/home.vue')

const First = ()=> import('../pages/first/first.vue')
const Second = ()=> import('../pages/second/second.vue')
const Third = ()=> import('../pages/third/third.vue')
const Fourth = ()=> import('../pages/fourth/fourth.vue')


const routes = [{
  path: '/',
  component: First
},{
  path: '/login',
  component: Login
},{
  path: '/hello',
  component: HelloWorld
},{
  path: '/home',
  component: Home
},{
  path: '/first', 
  component: First
},{
  path: '/second', 
  component: Second
},{
  path: '/third', 
  component: Third
},{
  path: '/fourth', 
  component: Fourth
}]

const router = new VueRouter({
  routes
})

export default router