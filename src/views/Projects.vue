
<template>
    <main class="min-h-min px-[64px] font-display">
        <h1 class="text-5xl font-bold mb-8"> <span class="projects-underline"> Projects</span></h1>
        <section class="flex h-min">
            <aside class=" block min-w-fit h-min">
                <h4 v-for="project in myProjects">
                    <router-link :to="{ name: 'project', params: { id: `${project.id}` } }"> {{ project.name }}
                    </router-link>
                </h4>
            </aside>
            <img class="px-5 h-[500px]" src="/separator-projects.svg" alt="">
            <router-view></router-view>
        </section>
    </main>
</template>
  
<script setup>
import { ref } from 'vue';
import projects from "../data/projects.json";
const myProjects = ref(projects)
</script>

<style>
.projects-underline {
    background-image: url(/projects-underline.svg);
    background-size: auto;
    background-repeat: no-repeat;
    background-position: bottom;
}
</style>