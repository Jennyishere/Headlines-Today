import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Personal from '../views/personal.vue'
import editPersonal from '../views/editPersonal.vue'
Vue.use(VueRouter)

const routes = [
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
  {
    name: 'Personal',
    path: '/personal/:id',
    component: Personal
  },
  
  {
    name: 'editPersonal',
    path: '/editPersonal/:id',
    component: editPersonal
  },
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  // ...
  // console.log(to.path);
  let token = localStorage.getItem('ht_token')
  if(to.path.indexOf('/login') || to.path.indexOf('/index')) {
    next()
  }else {
    if (token) {
      next()
    }else {
      next({name: 'Login'})
    }
  }
  
})
export default router
