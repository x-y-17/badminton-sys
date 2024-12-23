<template>
  <el-form :model="form" label-width="120px" @submit.prevent="handleSubmit">
    <el-form-item label="姓名" required>
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="年龄" required>
      <el-input-number v-model="form.age" :min="1" :max="100" />
    </el-form-item>
    <el-form-item label="性别" required>
      <el-radio-group v-model="form.gender">
        <el-radio label="男">男</el-radio>
        <el-radio label="女">女</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="联系方式" required>
      <el-input v-model="form.contact" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">提交报名</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref } from "vue";
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElInputNumber,
  ElRadioGroup,
  ElRadio,
  ElButton,
} from "element-plus";

const form = ref({
  name: "",
  age: 18,
  gender: "男",
  contact: "",
});

const emit = defineEmits(["submit"]);

const handleSubmit = () => {
  emit("submit", { ...form.value, id: Date.now() });
  form.value = {
    name: "",
    age: 18,
    gender: "男",
    contact: "",
  };
};
</script>
