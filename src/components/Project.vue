<template>
    <div class="h-[600px] px-[64px] font-display">
        <section v-for="project in myProjects"></section>
        <h1 class="text-5xl font-bold "> <span class="name-underline"> {{project.name}}</span></h1>

    </div>
</template>
<script setup>
import { ref } from 'vue';
import projects from "./data/projects.json";
const myProjects = projects;

</script>
<style scoped>
</style>