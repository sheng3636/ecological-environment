<template>
  <div class="sunNavWrap">
    <header class="header">
      <span class="logoutIcon" @click="jumpUrl('SystemNav')">
         <i class="goBack el-icon-refresh-left"></i>
        返回
      </span>
    </header>
    <ul class="navCenter">
      <li>
        <img src="@/assets/images/entranceImgs/navIcon1.png">
        <span>宏观经济</span>
      </li>
      <li>
        <img src="@/assets/images/entranceImgs/navIcon2.png">
        <span>城镇发展</span>
      </li>
      <li>
        <img src="@/assets/images/entranceImgs/navIcon3.png">
        <span>产业发展</span>
      </li>
      <li>
        <img src="@/assets/images/entranceImgs/navIcon4.png">
        <span>能源发展</span>
      </li>
      <li @click="jumpUrl('AreaSelect')">
        <img src="@/assets/images/entranceImgs/navIcon5.png">
        <span>快速导览</span>
      </li>
      <li>
        <img src="@/assets/images/entranceImgs/navIcon6.png">
        <span>基础设施</span>
      </li>
      <li>
        <img src="@/assets/images/entranceImgs/navIcon7.png">
        <span>社会发展</span>
      </li>
      <li>
        <img src="@/assets/images/entranceImgs/navIcon8.png">
        <span>区域空间</span>
      </li>
      <li>
        <img src="@/assets/images/entranceImgs/navIcon9.png">
        <span>生态环境</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { apiGet } from '@/api/api'
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    
  },
  methods: {
    // 跳转路由
    jumpUrl(path) {
      this.$router.push({
        name: path
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import './sunNav.scss';
</style>