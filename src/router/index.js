import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Personal from '../views/personal.vue'
Vue.use(VueRouter)

const routes = [
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
  {
    name: 'Personal',
    path: '/personal',
    component: Personal
  }
]

const router = new VueRouter({
  routes
})

export default router
