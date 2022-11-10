<template>
    <section v-if="!isLoading" class="h-[600px] pr-[64px] font-sans flex">
        <article>
        <h2 class="text-4xl font-bold mb-4 uppercase"> <span class="title-underline"> {{ project.name }}</span></h2>
            <p class=" "> {{ project.description }}</p>  
        </article>
        <figure>
            <!-- <img v-for="pictureUrl in project" src="`${project.pictureUrl}`" alt=""> -->
        </figure>

    </section>
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
    console.log(project.value)
    isLoading.value = false;
})

watch(() => route.params.id, newValue => {
    project.value = findProject(route.params.id);
   
})

const findProject = (id) => {
    // Nos busca el pais en la array
    return projects.find((project) => {
        return project.id === id
    })

}
console.log(myProjects.value[0].description)
</script>
<style scoped>
.title-underline {
    background-image: url(/title-underline.svg);
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
}
</style>