import Vue from 'vue'
import App from './App.vue'
import router from './router/routers'
import store from './store'
import '@/assets/styles/index.scss' // 全局css
import echarts from 'echarts' // 全局echarts
/*引入element-ui*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$echarts = echarts
Vue.use(ElementUI)

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
