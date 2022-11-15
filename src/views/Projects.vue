
<template>
    <main class="min-h-min px-[64px] font-display">
        <h1 class="text-5xl font-bold mb-8"> <span class="projects-underline"> Projects</span></h1>
        <section class="flex h-min flex-col sm:flex-row">
            <aside class=" flex sm:block flex-wrap sm:flex-nowrap min-w-fit h-min">
                <h4 v-for="project in myProjects" class="px-4 py-2 sm:px-0">
                    <router-link :to="{ name: 'project', params: { id: `${project.id}` } }"> {{ project.name }}
                    </router-link>
                </h4>
            </aside>
            <img class="block sm:hidden px-5 mt-4 mb-8" src="/separator-mobile.svg" alt="">
            <img class="hidden sm:block px-5 h-[500px]" src="/separator-projects.svg" alt="">
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