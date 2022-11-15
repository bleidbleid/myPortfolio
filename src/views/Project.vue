<template>
    <main v-if="!isLoading" class="h-80 font-sans max-w-full">
        <section class="flex flex-col sm:flex-row gap-10 h-[500px]">
            <article class="sm:w-6/12">
                <h2 class="text-4xl font-bold uppercase"> {{ project.name }}</h2>

                <h3 class="text-2xl font-display uppercase mb-4"> <span class="title-underline">{{ project.subtitle
                }}</span> </h3>
                <p class=" "> {{ project.description }}</p>
                <a v-if="project.href" target="_blank" :href="project.href"
                    class="relative mt-6 inline-flex items-center justify-center px-4 py-2 overflow-hidden text-main transition duration-300 ease-out border-2 border-accent hover:border-semantic rounded-full group">
                    <span
                        class="absolute inset-0 flex items-center justify-center w-full h-full  duration-300 -translate-x-full bg-semantic  text-background group-hover:translate-x-0 ease">
                        <svg width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.56445 1C7.56445 5.83153 7.5942 10.6862 8.35219 15.471C8.61807 17.1494 8.87735 18.7378 8.87735 20.4308"
                                stroke="#FDFDFF" stroke-width="2" stroke-linecap="round" />
                            <path
                                d="M1 15.4419C2.87459 15.4419 4.69221 17.0589 5.98899 18.3303C6.99417 19.3157 8.03619 20.2981 8.92112 21.3937C9.19823 21.7368 9.31297 22.2689 9.79638 22.2689C10.4584 22.2689 11.4416 17.0878 11.5323 16.8131C12.3673 14.2863 13.2428 11.976 14.479 9.636C14.6863 9.24359 14.8146 9.05975 15.1792 8.87744"
                                stroke="#FDFDFF" stroke-width="2" stroke-linecap="round" />
                            <path
                                d="M4.93848 28.5706C7.73445 28.5706 10.5304 28.5706 13.3264 28.5706C15.786 28.5706 18.2194 28.0454 20.6932 28.0454"
                                stroke="#FDFDFF" stroke-width="2" stroke-linecap="round" />
                            <path d="M4.41309 33.5596H21.2181" stroke="#FDFDFF" stroke-width="2"
                                stroke-linecap="round" />
                        </svg>

                    </span>
                    <span
                        class="absolute flex items-center justify-center w-full h-full text-main  px-4 py-2 transition-all duration-300 transform group-hover:translate-x-full ease">View
                        Project</span>
                    <span class="relative invisible">View Project</span>
                </a>
            </article>

            <figure class="sm:w-6/12 sm:global flex flex-col gap-4">
                <iframe v-if="project.embed" width="100%" height="100%" :src="project.embed" :title="project.name"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                <div v-for="picture in project.pictureUrl" class="flex flex-col gap-4">
                    <!-- {{ project.pictureUrl }} -->
                    <img :src="picture">
                  
                </div>
            </figure>
        </section>

    </main>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import projects from "../data/projects.json";

const myProjects = ref(projects);
const route = useRoute();
const project = ref();
const isLoading = ref(true);


// onMounted es una funcion que se llama en el momento que el componente esta listo para renderizarse
onMounted(() => {
    project.value = findProject(route.params.id);
    console.log("hehe", project.value)
    isLoading.value = false;
})

watch(() => route.params.id, newValue => {
    project.value = findProject(route.params.id);

})

const findProject = (id) => {
    // Busca el projecte en la array
    return projects.find((project) => {
        return project.id === id
    })

}
console.log(myProjects.value[1].pictureUrl)
</script>
<style scoped>
.global {
    height: 71vh;
    overflow-x: hidden;
    overflow-y: scroll;
}

.title-underline {
    background-image: url(/title-underline.svg);
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
}
</style>