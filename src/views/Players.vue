<template>
  <div class="players">
    <h2>参赛选手</h2>
    <player-list :players="players" />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useRegistrationStore } from "@/store/registration";
import PlayerList from "@/components/PlayerList.vue";

const store = useRegistrationStore();
const { players } = storeToRefs(store);
</script>
