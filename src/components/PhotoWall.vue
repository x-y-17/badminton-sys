<template>
  <div>
    <el-row :gutter="20">
      <el-col
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
        v-for="photo in photos"
        :key="photo.id"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img :src="photo.url" class="image" :alt="photo.description" />
          <div style="padding: 14px">
            <span>{{ photo.description }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ElRow, ElCol, ElCard } from "element-plus";

defineProps({
  photos: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.image {
  width: 100%;
  display: block;
}
</style>
