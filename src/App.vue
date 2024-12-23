<template>
  <el-container class="layout-container">
    <el-header>
      <h1>羽毛球报名系统</h1>
      <el-menu mode="horizontal" router>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/registration">报名</el-menu-item>
        <el-menu-item index="/gallery">照片墙</el-menu-item>
        <el-menu-item index="/statistics">比赛统计</el-menu-item>
        <el-menu-item index="/players">参赛选手</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>© 2023 羽毛球报名系统</el-footer>
  </el-container>
</template>

<script setup>
import {
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElMenu,
  ElMenuItem,
} from "element-plus";
</script>

<style>
.layout-container {
  min-height: 100vh;
}

.el-header {
  background-color: #409eff;
  color: white;
}

.el-footer {
  color: #666666;
  line-height: 60px;
  text-align: center;
}

.el-main {
  padding: 20px;
}
</style>
