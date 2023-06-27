<template>
  <main class="h-full lg:px-16 sm:px-8 px-4 text-xl">
    <h1 class="text-5xl font-bold mb-8 sm:block">
      <span class="font-display about-underline"> About</span>
    </h1>
    <section class="flex flex-col mb-8">
      <article class="mt-6 md:w-2/3 font-body">
        <span class="designer-container p-6">Maria is a designer</span> whose
        work aims to generate a physical interaction even from a digital
        environment. She experiments with the phygital, and seeks debate through
        artifacts and interactive experiances. Maria always tries to provoke
        complicity between people, either by creating new bonds or reinforcing
        existing ones.
      </article>
      <article class="mt-6 md:w-2/3 font-body">
        <span class="programmer-underline py-1"> Maria is a programmer</span>
        who loves working and exploring with any tech she encouters, not only as
        a front-end developer, but also creating with Arduino and Processing.
      </article>
      <article class="mt-6 md:w-2/3 font-body">
        <span class="human-underline py-1 px-2"> Maria is a human</span> eager
        to work with you!
      </article>
      <!-- <article class="mt-12 font-detail text-4xl self-center md:self-start"> <span class="font-detailed text-accent">Maria is eage</span>r to work with you!</article> -->
      <a
        href="/MariaBladeCV.pdf"
        id="resume"
        class="mt-18 hover:play uppercase text-xl self-center md:self-start border rounded-[50px] w-max mt-8 px-6 py-2 bg-accent text-background hover:italic hover:font-bold"
        download
        >Download Maria's resume!</a
      >
    </section>
  </main>
</template>
<script setup>
import { ref } from "vue";
</script>
<style scoped>
.programmer-underline {
  background-image: url(/programmer-underline.svg);
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
}
.human-underline {
  background-image: url(/human-underline.svg);
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
}

.designer-container {
  background-image: url(/designer-container.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.about-underline {
  background-image: url(/about-underline.svg);
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
}
</style>
