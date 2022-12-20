
<template>
    <main class="min-h-min px-4 md:px-8 mb-4 lg:px-16" :key="route.name">
        <router-link :to="{ name: 'projects' }">
            <h1 class="text-5xl font-bold mb-8 sm:block"> <span
                    class="projects-underline hover:cursor-pointer transition-all duration-300 transform ease hover:italic hover:text-accent">
                    Projects</span></h1>
        </router-link>
        <section class="flex h-min flex-col sm:flex-row">
            <ul v-show="!allProj"
                class=" flex md:flex-col sm:block gap-y-2 md:gap-y-0 flex-wrap justify-between sm:flex-nowrap min-w-fit h-min">
                <li v-for="project in myProjects">
                    <router-link :to="{ name: 'project', params: { id: `${project.id}` } }"
                        class="px-3 md:m-1 md:py-1 border-solid border-[1px] w-full border-accent sm:hover:bg-transparent hover:italic hover:text-accent sm:hover:border-transparent active:bg-accent sm:active:bg-transparent active:text-background sm:active:text-main rounded-full sm:rounded-none active:border-accent sm:border-none">
                        {{ project.name }}
                    </router-link>
                </li>
            </ul>
            <img v-show="!allProj" class="block sm:hidden px-5 mt-4 mb-8" src="/separator-mobile.svg" alt="">
            <img v-show="!allProj" class="hidden sm:block px-5 h-[500px]" src="/separator-projects.svg" alt="">
            <article class="columns-1 md:columns-4 lg:columns-5 gapx-2.5 gapy-4">
                <figure v-show="allProj" v-for="project in myProjects"
                    class="m-0 grid mb-2.5 break-inside-avoid hover:italic font-normal figure">
                    <router-link :to="{ name: 'project', params: { id: `${project.id}` } }" class="relative">
                        <!-- <div class="w-full h-full z-1 hover:bg-opacity-20 hover:bg-accent absolute">

                        </div> -->
                        <img class="max-w-full block justify-self-start" :src="project.pictureUrl[0]" 
                            alt="Project image" />
                        <figcaption
                            class="row-span-2 col-span-1 z-1 pl-2 pr-9 w-40 ml-1 bg-white absolute bottom-1 left-0 text-accent bg-[url('/miniature-project.svg')] bg-contain bg-center bg-no-repeat">
                                {{ project.name }}
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
li .router-link-active {
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