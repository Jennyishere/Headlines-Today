import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Login from '../views/login.vue'
import Personal from '../views/personal.vue'
import editPersonal from '../views/editPersonal.vue'
import Index from '../views/index.vue'
import Register from '../views/register.vue'
import articleDetail from '../views/articleDetail.vue'

const routes = [
  {
    path: '/',
    redirect:{path: '/index'}
  },
  {
    name: 'Index',
    path: '/index',
    component: Index
  },
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
  {
    name: 'Register',
    path: '/register',
    component: Register
  },
  {
    name: 'Personal',
    path: '/personal/:id',
    component: Personal
  },
  {
    name: 'articleDetail',
    path: '/articleDetail/:id',
    component: articleDetail
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
  if(to.path.indexOf('/index')==0 || to.path.indexOf('/login')==0) {
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
