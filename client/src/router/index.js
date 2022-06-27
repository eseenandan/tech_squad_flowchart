import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/data-view',
    name: 'dataView',
    component: () => import('../views/DataView.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreateView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
