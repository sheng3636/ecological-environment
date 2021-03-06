import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/areaSelect'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      moudleSystem: '登录',
      title: '登录'
    }
  },
  {
    path: '/systemNav',
    name: 'SystemNav',
    component: () => import('@/views/systemNav/systemNav.vue'),
    meta: {
      moudleSystem: '系统菜单',
      title: '系统菜单'
    }
  },
  {
    path: '/sunNav',
    name: 'SunNav',
    component: () => import('@/views/sunNav/sunNav.vue'),
    meta: {
      moudleSystem: '系统子菜单',
      title: '系统子菜单'
    }
  },
  {
    path: '/areaSelect',
    name: 'AreaSelect',
    component: () => import('@/views/areaSelect/areaSelect.vue'),
    meta: {
      moudleSystem: '选择城市',
      title: '选择城市'
    }
  },
  {
    path: '/analyzeToolType',
    name: 'AnalyzeToolType',
    component: () => import('@/views/analyzeToolType/analyzeToolType.vue'),
    meta: {
      moudleSystem: '分析类型',
      title: '分析类型'
    }
  },
  {
    path: '/citySynthesisAnalysis',
    name: 'CitySynthesisAnalysis',
    component: () => import('@/views/citySynthesisAnalysis/citySynthesisAnalysis.vue'),
    meta: {
      moudleSystem: '综合分析',
      title: '综合分析市级'
    }
  },
  {
    path: '/countySynthesisAnalysis',
    name: 'CountySynthesisAnalysis',
    component: () => import('@/views/countySynthesisAnalysis/countySynthesisAnalysis.vue'),
    meta: {
      moudleSystem: '综合分析',
      title: '综合分析县级'
    }
  },
  {
    path: '/cityIndustrialDev',
    name: 'CityIndustrialDev',
    component: () => import('@/views/cityIndustrialDev/cityIndustrialDev.vue'),
    meta: {
      moudleSystem: '产业发展分析',
      title: '产业发展市级'
    }
  },
  {
    path: '/countyIndustrialDev',
    name: 'CountyIndustrialDev',
    component: () => import('@/views/countyIndustrialDev/countyIndustrialDev.vue'),
    meta: {
      moudleSystem: '产业发展分析',
      title: '产业发展市级'
    }
  },
  {
    path: '/cityEnvironmental',
    name: 'CityEnvironmental',
    component: () => import('@/views/cityEnvironmental/cityEnvironmental.vue'),
    meta: {
      moudleSystem: '生态环境分析',
      title: '生态环境市级'
    }
  },
  {
    path: '/countyEnvironmental',
    name: 'CountyEnvironmental',
    component: () => import('@/views/countyEnvironmental/countyEnvironmental.vue'),
    meta: {
      moudleSystem: '生态环境分析',
      title: '生态环境县级'
    }
  },
  {
    path: '/cityPeopleAnalyze',
    name: 'CityPeopleAnalyze',
    component: () => import('@/views/cityPeopleAnalyze/cityPeopleAnalyze.vue'),
    meta: {
      moudleSystem: '人口分析',
      title: '人口分析市级'
    }
  },
  {
    path: '/countyPeopleAnalyze',
    name: 'CountyPeopleAnalyze',
    component: () => import('@/views/countyPeopleAnalyze/countyPeopleAnalyze.vue'),
    meta: {
      moudleSystem: '人口分析',
      title: '人口分析县级'
    }
  },
  {
    path: '*',
    name: 'Error404',
    meta: {
      title: '404-页面不存在'
    },
    component: () => import('@/views/errorPage/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router