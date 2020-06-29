import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/cityEnvironmental'
  },
  {
    path: '/cityEnvironmental',
    name: 'CityEnvironmental',
    component: () => import('@/views/cityEnvironmental/cityEnvironmental.vue'),
    meta: {
      title: '市级'
    }
  },
  {
    path: '/countyEnvironmental',
    name: 'CountyEnvironmental',
    component: () => import('@/views/countyEnvironmental/countyEnvironmental.vue'),
    meta: {
      title: '县级'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
