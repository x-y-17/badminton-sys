<template>
  <div class="registration">
    <h2>报名</h2>
    <registration-form @submit="handleRegistration" />
  </div>
</template>

<script setup>
import { useRegistrationStore } from "@/store/registration";
import RegistrationForm from "@/components/RegistrationForm.vue";
import { ElMessage } from "element-plus";

const store = useRegistrationStore();

const handleRegistration = (player) => {
  store.addPlayer(player);
  ElMessage.success("报名成功！");
};
</script>
