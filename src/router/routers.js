import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/environmentalQuality'
  },
  {
    path: '/environmentalQuality',
    name: 'EnvironmentalQuality',
    component: () => import('@/views/environmentalQuality/environmentalQuality.vue'),
    meta: {
      title: '环境质量'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
