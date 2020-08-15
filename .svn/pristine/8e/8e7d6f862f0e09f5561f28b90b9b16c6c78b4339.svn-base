<template>
  <div class="loginWrap">
    <div class="loginBox">
      <div class="logo">
        <img src="@/assets/images/entranceImgs/logo.png">
        <img src="@/assets/images/entranceImgs/logo1.png">
      </div>
      <div class="formBox">
        <p class="loginTxt"><i class="el-icon-caret-right"></i>登录/Login</p>
        <el-form label-position="right" label-width="80px" :model="loginForm">
          <el-form-item label="用户名:">
            <el-input v-model="loginForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码:">
            <el-input v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item label="验证码:">
            <el-input v-model="loginForm.verificationCode">
              <template slot="append">
                <img src="../../assets/images/entranceImgs/aaa.png" class="verificationIMg">
              </template>
            </el-input>
          </el-form-item>
        </el-form>
        
      <el-button class="submitBtn" type="primary">登 录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        userName: 'admin',
        password: '123456',
        verificationCode: '5555'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import './login.scss';
</style>