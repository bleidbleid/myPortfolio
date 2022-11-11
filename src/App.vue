<template>
  <NavBar/>
  <router-view class="h-full"></router-view>
</template>
<script setup>
import { ref } from 'vue';
import NavBar from "./components/NavBar.vue";
</script>
<style scoped>

</style>