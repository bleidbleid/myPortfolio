<template>
    <main v-if="!isLoading" class="max-w-full text-lg">
        <section class="flex flex-col sm:max-h-[80vh] sm:flex-row gap-10">
            <figure class="sm:w-6/12 sm:overflow-x-hidden sm:overflow-y-scroll flex flex-col gap-4 h-auto">
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
    // console.log("hehe", project.value.id)
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
</script>
<style scoped>
.title-underline {
    background-image: url(/title-underline.svg);
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
}
</style>