<template>
  <div class="home">
    <h1>欢迎来到羽毛球报名系统</h1>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>快速报名</span>
            </div>
          </template>
          <el-button type="primary" @click="$router.push('/registration')"
            >立即报名</el-button
          >
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>照片墙</span>
            </div>
          </template>
          <el-button type="primary" @click="$router.push('/gallery')"
            >查看照片</el-button
          >
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>比赛统计</span>
            </div>
          </template>
          <el-button type="primary" @click="$router.push('/statistics')"
            >查看统计</el-button
          >
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ElRow, ElCol, ElCard, ElButton } from "element-plus";
</script>

<style scoped>
.home {
  text-align: center;
}
.el-row {
}
</style>
