<template>
  <div class="statistics">
    <h2>比赛统计</h2>
    <match-statistics :statistics="statistics" />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useRegistrationStore } from "@/store/registration";
import MatchStatistics from "@/components/MatchStatistics.vue";

const store = useRegistrationStore();
const { statistics } = storeToRefs(store);
</script>
