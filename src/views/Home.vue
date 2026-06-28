<template>
    <!-- Canviat h-[600px] a min-h-[600px] o eliminat l'alçada fixa perquè no se t'encavalqui el contingut de sota -->
    <main class="min-h-screen lg:px-16 sm:px-8 px-4 flex flex-col justify-between">
        
        <!-- SECCIÓ INICIAL (HOME ACTUAL) -->
        <section class="flex justify-around flex-col mx-auto py-12 text-center text-3xl sm:text-4xl lg:text-6xl gap-y-12">
            <article> <span class="hola-container">Hola! </span> </article>

            <article>My name is<router-link :to="{ name: 'about' }"><span
                        class="name-container py-7 hover:italic hover:text-accent hover:cursor-pointer lg:py-10">
                        MARIA BLADÉ</span> !!!!!!!!
                </router-link>
            </article>
            <article class="mt-6 text-center text-3xl sm:text-4xl lg:text-6xl">
                I'm a <router-link :to="{ name: 'projects' }"><span
                        class="interaction-container hover:cursor-pointer py-3 hover:italic hover:text-accent">
                        multidisciplinary interaction designer </span></router-link> and <a href="https://github.com/bleidbleid" target="_blank"
                        class="frontend-container hover:cursor-pointer py-1 hover:italic hover:text-accent">
                        front-end developer</a> from Barcelona.
            </article>
            <article
                class="mx-auto max-w-sm sm:items-end items-center text-center flex flex-col sm:flex-row sm:max-w-none">
                <p class="text-center align-center text-3xl sm:text-4xl lg:text-6xl mr-0 sm:mr-4 mt-6 sm:mt-0">
                    Let's get in touch :)
                </p>
                <img class="sm:hidden mt-2 block" src="/contact-arrow.svg" alt="">
                <div class="flex flex-col mt-2 sm:mt-0">
                    <div class="flex gap-3 justify-center sm:justify-start">
                        <img class="hidden sm:block " src="/github-arrow.svg" alt="">
                        <a href="https://www.github.com/bleidbleid"
                            class="text-center hover:italic hover:text-accent text-lg lg:text-2xl">
                            github.com/bleidbleid
                        </a>
                    </div>
                    <div class="flex gap-3 content-startjustify-center mt-2 sm:mt-0">
                        <img class="hidden sm:block" src="/email-arrow.svg" alt="">
                        <a href="mailto:mblablade@gmail.com">
                            <h1
                                class="text-center text-lg lg:text-2xl hover:italic hover:text-accent">
                                mblablade@gmail.com </h1>
                        </a>
                    </div>
                </div>
            </article>
        </section>
<br><br>
       <!-- NOVA SECCIÓ: PREVIEW DE PROJECTES -->
        <section class="w-full lg:px-16 sm:px-8 px-4 mx-auto pb-24">
            
            <!-- CAPÇALERA: Títol i Botó alineats (Space Between) -->
            <div class="flex justify-between items-end mb-8 w-full feedback-header">
                <h2 class="text-4xl font-bold text-left">
                    <span class="projects-underline">Featured Projects</span>
                </h2>
                
                <!-- Botó d'enllaç net estil text blau -> negre en hover -->
                <router-link 
                    :to="{ name: 'projects' }" 
                    class="text-accent text-lg font-medium transition-all duration-300 hover:text-black hover:italic flex items-center gap-1"
                >
                    See all projects →
                </router-link>
            </div>
            
            <!-- Grid simple de 3 columnes -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <figure 
                    v-for="project in featuredProjects" 
                    :key="project.id"
                    class="m-0 break-inside-avoid hover:italic hover:text-accent font-normal relative"
                >
                    <!-- Definim una relació d'aspecte fixa per a tota la card -->
                    <router-link :to="{ name: 'project', params: { id: `${project.id}` } }" class="relative block w-full h-full aspect-[4/3] overflow-hidden">
                        <!-- MODIFICAT: w-full h-full i object-cover forcen a omplir tot l'espai retallant els costats si cal -->
                        <img 
                            class="w-full h-full object-cover block" 
                            :src="project.coverUrl || project.pictureUrl[0] || '/projects/placeholder.png'" 
                            alt="Project image" 
                        />
                        <figcaption
                            class="z-1 pl-2 pr-9 w-48 ml-1 bg-white absolute bottom-1 uppercase left-0 bg-[url('/miniature-project.svg')] bg-contain bg-center bg-no-repeat"
                        >
                            {{ project.name }}
                        </figcaption>
                    </router-link>
                </figure>
            </div>

        </section>

    </main>
</template>
  
<script setup>
import { computed } from 'vue';
import projects from "../data/projects.json";

// Agafem només els 3 primers projectes del teu JSON per fer la preview
const featuredProjects = computed(() => {
    return projects.slice(0, 3);
});
</script>

<style>
/* SPAN SVGS */
.name-container {
    background-image: url(/name-container.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.interaction-container {
    background-image: url(/interaction-container.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.frontend-container {
    background-image: url(/frontend-container.svg);
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
}

.hola-container {
    background-image: url(/hola-container.svg);
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
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