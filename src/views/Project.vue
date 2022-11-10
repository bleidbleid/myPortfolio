<template>
    <div class="h-[600px] px-[64px] font-display">
        <section v-for="project in myProjects">
            <h1 class="text-5xl font-bold "> <span class="name-underline"> {{ project.name }}</span></h1>
        </section>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import projects from "../data/projects.json";
const myProjects = ref(projects)
console.log(myProjects)

</script>
<style scoped>

</style>