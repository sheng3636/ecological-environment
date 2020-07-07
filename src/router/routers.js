import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/peopleAnalyze'
  },
  {
    path: '/peopleAnalyze',
    name: 'PeopleAnalyze',
    component: () => import('@/views/peopleAnalyze/peopleCount.vue'),
    meta: {
      title: '人口分析市级'
    }
  },
  {
    path: '/cityEnvironmental',
    name: 'CityEnvironmental',
    component: () => import('@/views/cityEnvironmental/cityEnvironmental.vue'),
    meta: {
      title: '生态环境市级'
    }
  },
  {
    path: '/countyEnvironmental',
    name: 'CountyEnvironmental',
    component: () => import('@/views/countyEnvironmental/countyEnvironmental.vue'),
    meta: {
      title: '生态环境县级'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
