
<template>
    <main class="min-h-min px-4 md:px-8 lg:px-16 font-display" :key="route.name">
        <router-link :to="{ name: 'projects' }">
            <h1 class="text-5xl font-bold mb-8 sm:block"> <span class="projects-underline hover:cursor-pointer transition-all duration-300 transform ease hover:text-semantic"> Projects</span></h1>
        </router-link>
        <section class="flex h-min flex-col sm:flex-row">
            <aside v-show="!allProj" class=" flex flex-col sm:block flex-wrap justify-between sm:flex-nowrap min-w-fit h-min">
                <ul>
                <li v-for="project in myProjects"
                    class="px-3 m-1 py-1 border-solid border-[1px] border-accent  sm:hover:bg-transparent hover:text-semantic sm:hover:border-transparent active:bg-semantic sm:active:bg-transparent active:text-background sm:active:text-main rounded-full active:border-semantic sm:border-none">
                    <router-link :to="{ name: 'project', params: { id: `${project.id}` } }"> {{ project.name }}
                    </router-link>
                </li>
            </ul>
            </aside>
            <img v-show="!allProj" class="block sm:hidden px-5 mt-4 mb-8" src="/separator-mobile.svg" alt="">
            <img v-show="!allProj" class="hidden sm:block px-5 h-[500px]" src="/separator-projects.svg" alt="">
            <article class="columns-1 md:columns-2 lg:columns-4 gapx-2.5 gapy-4">
                <figure v-show="allProj" v-for="project in myProjects"
                    class="m-0 grid mb-2.5 break-inside-avoid uppercase font-normal figure">
                    <router-link :to="{ name: 'project', params: { id: `${project.id}` } }">
                        <img class="max-w-full block justify-self-start" :src="project.pictureUrl[0]"
                            alt="Project image" />
                            <!-- style hover quan hovering tota la targeta -->
                        <figcaption                    
                            class="row-span-2 col-span-1  bg-[url('/miniature-project.svg')] transition-all duration-300 transform group-hover:translate-x-full ease hover:bg-[url('/miniature-hover-project.svg')] hover:text-semantic  bg-contain bg-center bg-no-repeat p-2 text-center">
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
import { ref, onMounted, watch } from 'vue';
import projects from "../data/projects.json";
import { useRoute } from 'vue-router';
const route = useRoute();
const isLoading = ref(true);
const page = ref();
const myProjects = ref(projects)
let allProj = ref(true)

// onMounted es una funcion que se llama en el momento que el componente esta listo para renderizarse
onMounted(() => {
    page.value = route.name;
    // console.log(page.value)

    if (page.value == 'projects') {
        allProj.value = true;
        // console.log(allProj.value)
    } else {
        allProj.value = false;
        // console.log(allProj.value)
    }

      isLoading.value = false;
})

watch(() => route.name, newValue => {
    page.value = route.name;
    // console.log(page.value)

    if (page.value == 'projects') {
        allProj.value = true;
        // console.log(allProj.value)
    } else {
        allProj.value = false;
        // console.log(allProj.value)
    }

})

</script>

<style>
aside  .router-link-active {
color: #0000FF;
}

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