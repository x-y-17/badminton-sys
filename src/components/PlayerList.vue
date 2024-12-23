<template>
  <el-table :data="players" style="width: 100%">
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="age" label="年龄" />
    <el-table-column prop="gender" label="性别" />
    <el-table-column prop="contact" label="联系方式" />
  </el-table>
</template>

<script setup>
import { ElTable, ElTableColumn } from "element-plus";

defineProps({
  players: {
    type: Array,
    required: true,
  },
});
</script>
