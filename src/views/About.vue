<template>
    <div class="min-h-min px-4 md:px-8 lg:px-16 font-display">
        <h1 class="text-5xl font-bold mb-8"> <span class="name-underline"> About</span></h1>
        <main class="flex flex-col md:flex-row md:gap-12">
            <div>
                <section class="mb-10">
                    <h2 class="mb-3">
                        <span class="education-underline uppercase text-2xl font-bold">Education</span>
                    </h2>
                    <article v-for="course in education" class="mb-6">
                        <h4 class="font-bold text-sm">{{ course.dates }}</h4>
                        <p class="font-sans font-bold text-lg">{{ course.title }}</p>
                        <p class="font-sans text-md"><span> {{ course.subtitle }}</span></p>
                        <p>{{ course.description }}</p>
                    </article>
                </section>
                <section class="mb-10">
                    <h2 class="mb-3">
                        <span class="education-underline uppercase text-2xl font-bold">Languages</span>
                    </h2>
                    <article class="mb-6 font-sans text-md">
                        <p v-for="language in languages"> <b>{{ language.lang }}</b> {{ language.level }}</p>
                    </article>
                </section>
                <section class="mb-10">
                    <h2 class="mb-3">
                        <span class="education-underline uppercase text-2xl font-bold">Informatics</span>
                    </h2>
                    <article class="mb-6 font-sans text-md">
                        <ul class="list-[square]">
                            <li v-for="info in informatics">{{ info.title }}: {{ info.descr }}</li>
                        </ul>
                    </article>
                </section>
                <section class="mb-10">
                    <h2 class="mb-3">
                        <span class="education-underline uppercase text-2xl font-bold">Other</span>
                    </h2>
                    <article class="mb-6 font-sans text-md">
                        <ul class="list-[square]">
                            <li>My Final Degree Thesis was carried out in collaboration with <span
                                    class="tfg-underline"> Elisava Research</span> and <span
                                    class="tfg-underline">Adidas Maker Lab.</span></li>
                            <li>Participation in La Murga 2016, a learning and service project developed by Escoltes
                                Catalans that aims to raise awareness of the right to decent housing.</li>
                            <li>6th edition of the competition "(RE)IMAGINA'T: Fem un espot no sexista".</li>
                            <li>Car driving licence.</li>
                        </ul>
                    </article>
                </section>
            </div>
            <div>
                <section class="mb-10">
                    <h2 class="mb-3">
                        <span class="education-underline uppercase text-2xl font-bold">Work experiance</span>
                    </h2>
                    <article v-for="job in work" class="mb-6">
                        <h4 class="font-bold text-sm">{{ job.dates }}</h4>
                        <p class="font-sans font-bold text-lg">{{ job.title }}</p>
                        <p class="font-sans text-md"> {{ job.subtitle }}</p>
                        <p>{{ job.description }}</p>
                    </article>
                </section>
            </div>
        </main>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import education from "../data/education.json";
import languages from "../data/languages.json";
import informatics from "../data/informatics.json";
import work from "../data/work.json";


</script>
<style scoped>
.name-underline {
    background-image: url(/name-underline.svg);
}

.tfg-underline {
    background-image: url(/tfg-underline.svg);
}

.education-underline {
    background-image: url(/education-underline.svg);
}

.elisava-circle {
    background-image: url(/elisava-circle.svg);
}

.bauhaus-circle {
    background-image: url(/bauhaus-circle.svg);
}

.name-underline,
.elisava-circle,
.bauhaus-circle,
.tfg-underline,
.education-underline {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
}
</style>