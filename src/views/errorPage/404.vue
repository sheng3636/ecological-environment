<template>
  <div class="error404-body-con">
    <el-card class="errorBox">
      <div class="errorTitle">
        4<i class="el-icon-position"></i>4
      </div>
      <p class="errorMessage">YOU&nbsp;&nbsp;LOOK&nbsp;&nbsp;LOST</p>
      <div class="btnGroup">
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
      </div>
    </el-card>
  </div>
</template>
<style scoped lang="scss">
@keyframes error404animation {
  0% {
    transform: rotateZ(0deg);
  }
  20% {
    transform: rotateZ(-60deg);
  }
  40% {
    transform: rotateZ(-10deg);
  }
  60% {
    transform: rotateZ(50deg);
  }
  80% {
    transform: rotateZ(-20deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}
.errorBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 500px;
  .errorTitle {
    text-align: center;
    font-size: 240px;
    font-weight: 700;
    color: #2d8cf0;
    height: 260px;
    line-height: 260px;
    margin-top: 40px;
    i {
      display: inline-block;
      color: #19be6b;
      font-size: 230px;
      animation: error404animation 3s ease 0s infinite alternate;
    }
  }
  .errorMessage {
    display: block;
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 12px;
    color: #dddde2;
  }
  .btnGroup {
    text-align: center;
    padding: 20px 0;
    margin-bottom: 20px;
  }
}
</style>