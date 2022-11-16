
<template>
    <main class="min-h-min px-4 md:px-8 lg:px-16 font-display" :key="route.name">
        <router-link :to="{ name: 'projects' }">
            <h1 class="text-5xl font-bold mb-8 sm:block"> <span class="projects-underline"> Projects</span></h1>
        </router-link>
        <section class="flex h-min flex-col sm:flex-row">
            <aside v-show="!allProj" class=" flex sm:block flex-wrap justify-between sm:flex-nowrap min-w-fit h-min">
                <h4 v-for="project in myProjects"
                    class="px-3 m-1 py-1 border-solid border-[1px] border-accent  sm:hover:bg-transparent sm:hover-text-semantic sm:hover:border-transparent active:bg-semantic sm:active:bg-transparent active:text-background sm:active:text-main rounded-full active:border-semantic sm:border-none">
                    <router-link :to="{ name: 'project', params: { id: `${project.id}` } }"> {{ project.name }}
                    </router-link>
                </h4>
            </aside>
            <img v-show="!allProj" class="block sm:hidden px-5 mt-4 mb-8" src="/separator-mobile.svg" alt="">
            <img v-show="!allProj" class="hidden sm:block px-5 h-[500px]" src="/separator-projects.svg" alt="">
            <article class="columns-1 md:columns-2 lg:columns-4 gapx-2.5 gapy-4">
                <figure v-show="allProj" v-for="project in myProjects"
                    class="m-0 grid mb-2.5 break-inside-avoid font-sans figure">
                    <router-link :to="{ name: 'project', params: { id: `${project.id}` } }">
                        <img class="max-w-full block justify-self-start" :src="project.pictureUrl[0]"
                            alt="A windmill" />
                        <figcaption
                            class="row-span-2 col-span-1 bg-[url('/miniature-project.svg')] bg-contain bg-center bg-no-repeat font-bold p-2 text-center">
                            <h5>

                                {{ project.name }}
                            </h5>
                        </figcaption>
                    </router-link>
                </figure>
            </article>
            <router-view v-show="!allProj"></router-view>
        </section>
    </main>
</template>
  
<script setup>
import { ref } from 'vue';
import projects from "../data/projects.json";
import { useRoute } from 'vue-router';
const route = useRoute();

const myProjects = ref(projects)
let allProj = ref(true)
const myUrl = ref(window.location.href)
const urlLength = ref(myUrl.value.split("/projects/").length)

if (route.name == 'projects') {
    allProj.value = true;
} else {
    allProj.value = false;
}

console.log(route.name)
console.log(allProj.value)



</script>

<style>
.projects-underline {
    background-image: url(/projects-underline.svg);
    background-size: auto;
    background-repeat: no-repeat;
    background-position: bottom;
}

.figure {
    grid-template-rows: 1fr auto;
}
</style>