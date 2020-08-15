<template>
  <div class="systemWrap">
    <header class="header">
      <span class="logoutIcon">
        <img src="@/assets/images/entranceImgs/logOut.png">
        退出登录
      </span>
    </header>
    <div class="navWrap">
      <ul class="systemNavItem">
        <li>研究辅助系统</li>
        <li @click="jumpUrl('SunNav')">智慧规划系统</li>
        <li>工程咨询系统</li>
      </ul>
    </div>
    <div class="systemBotm">
      <div class="systemInfo">
        <span class="name">数据管理系统</span>
        <span>
          当前数据：<span class="dataCount">{{dataCount.amount}}条</span>
        </span>
        <span>
          今日更新：<span class="dataCount">{{dataCount.newly}}条</span>
        </span>
      </div>
      <span class="systemSettingIcon">
        <img src="@/assets/images/entranceImgs/systemSetting.png">
        系统设置
      </span>
    </div>
  </div>
</template>
<script>
import { apiGet } from '@/api/api'
export default {
  data() {
    return {
      dataCount: {}
    }
  },
  mounted() {
    apiGet('zone/getAmount').then(res => {
      this.dataCount = res.data
    })
  },
  methods: {
    jumpUrl(path) {
      this.$router.push({
        name: path
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import './systemNav.scss';
</style>