<template>
  <div class="gallery">
    <h2>照片墙</h2>
    <photo-wall :photos="photos" />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useRegistrationStore } from "@/store/registration";
import PhotoWall from "@/components/PhotoWall.vue";

const store = useRegistrationStore();
const { photos } = storeToRefs(store);
</script>
