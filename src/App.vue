<template>
  <NavBar class="sticky top-0 z-20"/>
  <router-view ></router-view>
</template>
<script setup>
import { ref } from 'vue';
import NavBar from "./components/NavBar.vue";
</script>
<style scoped>

</style>