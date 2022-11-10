<template>
    <div class="h-[600px] px-[64px] font-display">
        
            <h1 class="text-5xl font-bold "> <span class="name-underline"> {{ description }}</span></h1>
      
    </div>
</template>
<script setup>
import { ref } from 'vue';
import projects from "../data/projects.json";
const myProjects = ref(projects)
defineProps({
  name: String,
  subtitle: String,
  description: String,
})
console.log(myProjects.value[0].description)
</script>
<style scoped>

</style>