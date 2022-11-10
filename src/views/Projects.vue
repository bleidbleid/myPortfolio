
<template>
    <main>
        <div class="h-[600px] px-[64px] font-display">
            <h1 class="text-5xl font-bold "> <span class="projects-underline"> Projects</span></h1>
            
            <section v-for="project in myProjects">
                <router-view>
                    <router-link :to="{ name: 'project', params: { id: `${project.id}` }}" class="text-2xl"> {{ project.name }}</router-link>
                </router-view>
        </section>
        </div>
    </main>
</template>
  
<script setup>
import { ref } from 'vue';

import projects from "../data/projects.json";
const myProjects = ref(projects)
console.log(myProjects)
</script>

<style>
.projects-underline {
    background-image: url(/projects-underline.svg);
    background-size: auto;
    background-repeat: no-repeat;
    background-position: bottom;
}
</style>