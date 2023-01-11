
<template>
    <main class="min-h-min px-4 md:px-8 mb-4 lg:px-16" :key="route.name">
        <h1 class="text-5xl font-bold mb-8 sm:block"> <span
                class="exhibitions-underline hover:cursor-pointer transition-all duration-300 transform ease hover:italic hover:text-accent">
                Exhibitions</span></h1>
                <!-- <h2 class="text-3xl font-bold mb-2 italic sm:block">Present to Past</h2> -->
        <section>
            <p class="exhibit font-body text-lg">"MyMachine". Disseny Hub Barcelona. Barcelona. January 2023.
            </p>
            <p class="exhibit font-body text-lg">"Water Matters. Sustainable Challenge: Industrial Symbiosis: A Booster
                to Circular Fashion". Disseny Hub Barcelona. Barcelona. November 2021.
            </p>
            <p class="exhibit font-body text-lg">"Cookbook for Planetary Health". Barcelona Design Week 2021. 7th of
                June to 17th of June 2021.</p>
            <p class="exhibit font-body text-lg">"Cookbook for Planetary Health". Melbourne Design Week 2021. 26th of
                March to 5th of April 2021.</p>
        </section>

    </main>
</template>
  
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();


</script>

<style>
.exhibitions-underline {
    background-image: url(/about-underline.svg);
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
}
</style>