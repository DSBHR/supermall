import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/cart',
      component: ()=> import('../views/cart/Cart')
    },
    {
      path: '/category',
      component: ()=> import('../views/category/Category')
    },
    {
      path: '/home',
      component: ()=> import('../views/home/Home')
    },
    {
      path: '/profile',
      component: ()=> import('../views/profile/Profile')
    }
  ],
  mode: 'history'
})
export default router
