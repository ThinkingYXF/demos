import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//点击同一路由报错解决办法
const VueRouterPush = VueRouter.prototype.push 
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

const Login = ()=> import('@/pages/test/Login.vue')
const HelloWorld = ()=> import('@/pages/test/HelloWorld.vue')

const Home = ()=> import('@/pages/home/home.vue')
const Category = ()=> import('@/pages/category/category.vue')
const Cart = ()=> import('@/pages/cart/cart.vue')
const Settings = ()=> import('@/pages/settings/settings.vue')


const routes = [{
  path: '/',
  component: Home
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
  path: '/category', 
  component: Category
},{
  path: '/cart', 
  component: Cart
},{
  path: '/settings', 
  component: Settings
}]

const router = new VueRouter({
  routes
})

export default router