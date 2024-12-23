<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>总比赛场数</span>
            </div>
          </template>
          <div class="card-content">
            {{ statistics.totalMatches }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>总参赛人数</span>
            </div>
          </template>
          <div class="card-content">
            {{ statistics.totalPlayers }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>平均得分</span>
            </div>
          </template>
          <div class="card-content">
            {{ statistics.averageScore.toFixed(2) }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ElRow, ElCol, ElCard } from "element-plus";

defineProps({
  statistics: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-content {
  font-size: 24px;
  font-weight: bold;
  color: #409eff;
}
</style>
