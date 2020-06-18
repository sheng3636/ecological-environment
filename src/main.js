import Vue from 'vue'
import App from './App.vue'
import router from './router/routers'
import store from './store'
// 全局echarts
import echarts from 'echarts'
import 'echarts-gl'
/*引入element-ui*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

/*引入需要View UI*/
import {
  ColorPicker
} from 'view-design';
import 'view-design/dist/styles/iview.css'


import 'leaflet/dist/leaflet.css'
import '@/assets/styles/index.scss' // 全局css

Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.component('ColorPicker', ColorPicker)

router.beforeEach(async (to, from, next) => {
  // 设置页面标题
  document.title = `${to.meta.title}-生态环境`
  next()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
