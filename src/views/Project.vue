<template>
    <main v-if="!isLoading" class="h-[600px] font-sans max-w-full">
        <h2 class="text-4xl font-bold mb-4 uppercase "> <span class="title-underline"> {{ project.name }}</span></h2>
        <section class="flex gap-10">

            <article class="w-6/12">
                <p class=" "> {{ project.description }}</p>  
            </article>
            <figure id="global" class="w-6/12 flex flex-col gap-4">
                <div v-for="picture in project.pictureUrl"> 
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
    // Nos busca el pais en la array
    return projects.find((project) => {
        return project.id === id
    })

}
console.log(myProjects.value[1].pictureUrl)
</script>
<style scoped>
#global {
    height: 90vh;
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